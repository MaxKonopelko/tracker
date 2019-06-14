using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Api.Models
{
    public class JwtRequest
    {
        public string GrantType { get; set; }
        public string RefreshToken { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
