using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.DAL;

namespace Tracker.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectsController : Controller
    {
        private readonly TrackerContext _context;

        public ProjectsController(TrackerContext context)
        {
            _context = context;
        }

        [HttpGet("get-all")]
        public List<Project> GetAll()
        {
            var projects = _context.Projects.ToList();

            return projects;
        }

        [HttpPost("add")]
        public bool Add([FromBody] Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();
            return true;
        }
    }
}