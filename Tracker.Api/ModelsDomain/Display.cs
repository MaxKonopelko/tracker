using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Api.ModelsDomain
{
    public class DomainBase
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class ClientDisplay : DomainBase
    {
        public string Family { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int ProjectsCount { get; set; }
    }
}