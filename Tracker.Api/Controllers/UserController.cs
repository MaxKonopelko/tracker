using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Api.Models;
using Tracker.DAL;

namespace Tracker.Api.Controllers
{
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly TrackerContext _context;

        public UserController(TrackerContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public bool Add([FromBody] User user)
        {
            if (_context.Users.Any(x => x.Email == user.Email))
            {
                return false;
            }

            _context.Users.Add(user);
            _context.SaveChanges();
            return true;
        }

        [HttpPost("login")]
        public OperationResult<User> Login([FromBody] LoginModel loginModel)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);
            if (user != null)
            {           
                var success = new OperationResult<User>
                {
                    Object = new User
                    {
                        Id = user.Id,
                        Email = user.Email,
                        Name = user.Name
                    },
                    Message = "You have successfully login'"
                };
                return success;
            }
            else
            {
                var failure = new OperationResult<User>
                {
                    Success = false,
                    Message = "This password or email is not correct"
                };
                return failure;
            }
        }
    }
}