using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Api.ModelsDomain;
using Tracker.DAL;

namespace Tracker.Api.Models
{
    public class JwtResponse
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public UserDisplay UserDisplay { get; set; }
    }
}
