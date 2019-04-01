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
    [Route("api/Client")]
    public class ClientController : Controller
    {
        private readonly TrackerContext _context;

        public ClientController(TrackerContext context)
        {
            _context = context;
        }

        [HttpGet("get-all")]
        public List<Client> GetAll()
        {
            var clients = _context.Clients.ToList();

            return clients;
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