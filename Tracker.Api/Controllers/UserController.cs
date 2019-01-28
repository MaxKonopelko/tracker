using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.DAL;

namespace Tracker.Api.Controllers
{
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
        public bool Login([FromBody] User user)
        {
            return _context.Users.Any(x => x.Email == user.Email && x.Password == user.Password);
        }
    }
}