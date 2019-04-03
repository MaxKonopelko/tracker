using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Tracker.DAL
{
    public class TrackerContext : DbContext
    {
        public TrackerContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Project> Projects { get; set; }
    }

    public class EntityBase
    {
        public EntityBase()
        {
            CreatedDate = DateTime.UtcNow;
        }

        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsDelited { get; set; }
    }

    public class User : EntityBase
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Name { get; set; }
    }

    public class Client : EntityBase
    {
        [Required]
        public string Family { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        public List<Project> Projects { get; set; }
    }

    public class Project : EntityBase
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        //[Required]
        //public string Users { get; set; }
        [Required]
        public string Budget { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public string Actions { get; set; }

        [ForeignKey(nameof(Client))]
        public int ClientId { get; set; }

        public Client Client { get; set; }
    }
}