using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tracker.Api.ModelsDomain;
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
        public List<ProjectDisplay> GetAll()
        {
            List<ProjectDisplay> projectsDisplays = _context.Projects
                .Include(x => x.Client)
                .Select(project => new ProjectDisplay
                {
                    Id = project.Id,
                    CreatedDate = project.CreatedDate,
                    Name = project.Name,
                    Description = project.Description,
                    Status = project.Status,
                    Budget = project.Budget,
                    Actions = project.Actions,
                    Client = project.Client.Name,
                }).ToList();

            return projectsDisplays;
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