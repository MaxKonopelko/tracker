using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace Tracker.DAL
{
    public static class TrackerSeed
    {
        public static void Seed(TrackerContext context)
        {
            CreateUsers(context);
            CreateClients(context);
            CreateProjects(context);
        }

        private static void CreateUsers(TrackerContext context)
        {
            context.Users.AddRange(new List<User>
            {
                new User
                {
                    Name = "Max",
                    Email = "111",
                    Password = "111"
                },
                new User
                {
                    Name = "Tom",
                    Email = "222",
                    Password = "111"
                },
                new User
                {
                    Name = "Rom",
                    Email = "333",
                    Password = "111"
                },
                new User
                {
                    Name = "Gnom",
                    Email = "444",
                    Password = "111"
                }
            });

            context.SaveChanges();
        }

        public static void CreateClients(TrackerContext context)
        {
            context.Clients.AddRange(new List<Client>
            {
                new Client
                {
                    Name = "Vladimir",
                    City = "Boston",
                    Country = "Austria",
                },
                new Client
                {
                    Name = "Semen",
                    City = "Minsk",
                    Country = "Russia",
                },
                new Client
                {
                    Name = "Ivan",
                    City = "Vitebsk",
                    Country = "Belarus",
                },
                new Client
                {
                    Name = "Petr",
                    City = "Moskow",
                    Country = "Germany",
                },
                new Client
                {
                    Name = "Vasiliy",
                    City = "Paris",
                    Country = "France",
                },
            });

            context.SaveChanges();
        }

        public static void CreateProjects(TrackerContext context)
        {
            var t = context.Clients.ToList();

            //context.Projects.Add(new Project()
            //{
            //    Name = "Bla",
            //    ClientId = 1
            //});
            context.Projects.AddRange(new List<Project>
            {
                new Project
                {
                    Name = "Tracker",
                    Description = "The best Tracker",
                    Budget = "500$",
                    Status = "Active",
                    Actions = "Edit",
                    ClientId = 1,
                },
                new Project
                {
                    Name = "Timer",
                    Description = "The Clock",
                    Budget = "10000$",
                    Status = "Active",
                    Actions = "Edit",
                    ClientId = 2
                },
                new Project
                {
                    Name = "Blog",
                    Description = "Blog the Mythology",
                    Budget = "5000$",
                    Status = "Deactivate",
                    Actions = "Edit",
                    ClientId = 3
                },
                new Project
                {
                    Name = "Petr",
                    Description = "History",
                    Budget = "2000$",
                    Status = "Active",
                    Actions = "Edit",
                    ClientId = 4
                },
                new Project
                {
                    Name = "Vasiliy",
                    Description = "Hello Vasiliy",
                    Budget = "15000$",
                    Status = "Deactivate",
                    Actions = "Edit",
                    ClientId = 1
                },
            });
            context.SaveChanges();
        }
    }
}