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
    [Route("api/Clients")]
    public class ClientsController : Controller
    {
        private readonly TrackerContext _context;

        public ClientsController(TrackerContext context)
        {
            _context = context;
        }

        [HttpGet("get-by-id")]
        public ClientDisplay GetById()
        {
            ClientDisplay client11 = _context.Clients
                .Select(client => new ClientDisplay
                {
                    Id = client.Id,
                    CreatedDate = client.CreatedDate,
                    Country = client.Country,
                    City = client.City,
                    
                    Name = client.Name,
                    ProjectsCount = client.Projects.Count
                })
                .First(x => x.Id == 1);

            return client11;
        }

        [HttpGet("get-all")]
        public List<ClientDisplay> GetAll()
        {
            List<ClientDisplay> clientsDisplays = _context.Clients
                .Select(client => new ClientDisplay
                {
                    Id = client.Id,
                    CreatedDate = client.CreatedDate,
                    Country = client.Country,
                    City = client.City,
                    Name = client.Name,
                    ProjectsCount = client.Projects.Count
                })
                .ToList();

            return clientsDisplays;
        }

        [HttpPost("add")]
        public bool Add([FromBody] Client client)
        {
            _context.Clients.Add(client);
            _context.SaveChanges();
            return true;
        }
    }
}