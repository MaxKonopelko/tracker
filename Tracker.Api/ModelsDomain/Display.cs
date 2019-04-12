using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.DAL;

namespace Tracker.Api.ModelsDomain
{
    public class DomainBase
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class ClientDisplay : DomainBase
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int ProjectsCount { get; set; }
    }

    public class ProjectDisplay : DomainBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Budget { get; set; }
        public string Status { get; set; }
        public string Actions { get; set; }
        public string Client { get; set; }
        public int UsersCount { get; set; }
    }
}