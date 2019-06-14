using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Api.Models;
using Tracker.Api.Providers;
using Tracker.Common;
using Tracker.DAL;

namespace Tracker.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Tokens")]
    public class TokensController : Controller
    {
        private readonly TrackerContext _context;
        private readonly OAuthProvider _oAuthProvider;

        public TokensController(TrackerContext context, OAuthProvider oAuthProvider)
        {
            _context = context;
            _oAuthProvider = oAuthProvider;
        }

        [AllowAnonymous]
        [HttpPost]
        public OperationResult<JwtResponse> Token([FromBody] JwtRequest request)
        {
            if (request == null)
            {
                return new OperationResult<JwtResponse>
                {
                    Message = "request is null",
                    Success = false
                };
            }

            try
            {
                switch (request.GrantType)
                {
                    case "password":
                    {
                        return _oAuthProvider.Login(request);
                    }
                    case "refresh_token":
                    {
                        return _oAuthProvider.GetNewAccessToken(request);
                    }
                    default:
                        return new OperationResult<JwtResponse>
                        {
                            Message = "Bad request",
                            Success = false
                        };
                }
            }
            catch (Exception e)
            {
                return _oAuthProvider.Login(request);
            }
        }
    }
}