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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProjectUser>()
                .HasKey(bc => new { bc.ProjectId, bc.UserId });
        }

        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
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

    public class Client : EntityBase
    {
        public Client()
        {
          Projects = new List<Project>();
        }

        [Required]
        public string Name { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        public virtual List<Project> Projects { get; set; }
    }

    public class Project : EntityBase
    {
        public Project()
        {
          ProjectsUsers = new List<ProjectUser>();  
        }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Budget { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        public string Actions { get; set; }

        [ForeignKey(nameof(Client))]
        public int ClientId { get; set; }
        public virtual Client Client { get; set; }

        public virtual List<ProjectUser> ProjectsUsers { get; set; }
    }

    public class User : EntityBase
    {
        public User()
        {
           ProjectsUsers = new List<ProjectUser>();
        }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Salt { get; set; }

        [Required]
        public string Name { get; set; }

        public int Age { get; set; }

        public virtual List<ProjectUser> ProjectsUsers { get; set; }
    }

    public class RefreshToken
    {
        public RefreshToken()
        {
            CreatedDate = DateTime.UtcNow;
        }

        public string Id { get; set; }

        public DateTime CreatedDate { get; set; }
    }

    public class ProjectUser
    {
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        [ForeignKey(nameof(Project))]
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
    }
}