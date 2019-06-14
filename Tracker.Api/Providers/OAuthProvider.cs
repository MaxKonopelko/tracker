using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Tracker.Api.Common;
using Tracker.Api.Models;
using Tracker.Api.ModelsDomain;
using Tracker.DAL;

namespace Tracker.Api.Providers
{
    public class OAuthProvider
    {
        private readonly TrackerContext _context;

        private static TimeSpan AccessTokenExpiresTo => TimeSpan.FromSeconds(30);

        public OAuthProvider(TrackerContext context)
        {
            _context = context;
        }

        public OperationResult<JwtResponse> Login(JwtRequest parameters)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == parameters.Email);

            if (user == null)
            {
                return new OperationResult<JwtResponse>
                {
                    Message = "Incorrect email or password",
                    Success = false
                };
            }

            if (!SaltedHash.VerifyHashString(parameters.Password, user.Password, user.Salt))
            {
                return new OperationResult<JwtResponse>
                {
                    Message = "Incorrect email or password",
                    Success = false
                };
            }

            var refreshToken = new RefreshToken
            {
                Id = Guid.NewGuid().ToString()
            };

            _context.RefreshTokens.Add(refreshToken);
            _context.SaveChanges();

            JwtResponse result = GetJwt(user, refreshToken.Id);

            return new OperationResult<JwtResponse>
            {
                Object = result
            };
        }


        private JwtResponse GetJwt(User user, string refreshToken)
        {
            var dateNow = DateTime.UtcNow;

            var claims = CreateClaims(user);

            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(OAuthConfig.JwtSecret));

            var jwt = new JwtSecurityToken(
                issuer: ".",
                audience: ".",
                claims: claims,
                notBefore: dateNow,
                expires: dateNow.Add(AccessTokenExpiresTo),
                signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JwtResponse
            {
                AccessToken = encodedJwt,
                RefreshToken = refreshToken,
                UserDisplay = new UserDisplay
                {
                    CreatedDate = user.CreatedDate,
                    Name = user.Name,
                    Email = user.Email,
                    Id = user.Id,
                    Age = user.Age
                },
            };
        }

        public OperationResult<JwtResponse> GetNewAccessToken(JwtRequest parameters)
        {
            var refreshToken = _context.RefreshTokens.FirstOrDefault(token => token.Id == parameters.RefreshToken);

            var user = _context.Users.FirstOrDefault(person => person.Email == parameters.Email);

            if (refreshToken == null || user == null)
            {
                return new OperationResult<JwtResponse>
                {
                    Message = "Cannot refresh token",
                    Success = false
                };
            }

            var result = GetJwt(user, parameters.RefreshToken);

            return new OperationResult<JwtResponse>
            {
                Object = result
            };
        }

        private static List<Claim> CreateClaims(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
            };

            return claims;
        }
    }
}