using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tracker.Api.ModelsDomain;
using Tracker.DAL;

namespace Tracker.Api.Controllers
{
    [Authorize]
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
            
            IQueryable<ProjectDisplay> projectsDisplays = _context.Projects
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
                    UsersCount = project.ProjectsUsers.Count
                });

            List<ProjectDisplay> res = projectsDisplays.ToList();
            return res;
        }

        [HttpGet("get-by-id/{id}")]
        public ProjectDetail GetById(int id)
        {
            ProjectDetail projectDetail = _context.Projects
                .Select(project => new ProjectDetail
                {
                    Id = project.Id,
                    CreatedDate = project.CreatedDate,
                    Name = project.Name,
                    Description = project.Description,
                    Status = project.Status,
                    Budget = project.Budget,
                    Actions = project.Actions,
                    Client = project.Client.Name,
                    Users = project.ProjectsUsers.Select(x => new UserDisplay
                    {
                        Id = x.User.Id,
                        Email = x.User.Email,
                        Name = x.User.Name,
                        Age = x.User.Age,
                        CreatedDate = x.User.CreatedDate
                    }).ToList()
                }).First(x => x.Id == id);

            return projectDetail;
        }

        [HttpPost("add")]
        public bool Add([FromBody] Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();
            return true;
        }

        [HttpPost("change")]
        public bool Change([FromBody] ProjectDetail project)
        {
            Project proj = _context.Projects.First(x => x.Id == project.Id);

            proj.Name = project.Name;
            proj.Budget = project.Budget;
            proj.Description = project.Description;
            proj.Status = project.Status;
            
            _context.Projects.Update(proj);
            _context.SaveChanges();
            return true;
        }
    }
}