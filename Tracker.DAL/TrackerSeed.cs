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
            AddProjectsInUsers(context);
        }

        private static void CreateUsers(TrackerContext context)
        {
            context.Users.AddRange(new List<User>
            {
                new User
                {
                    Name = "Max",
                    Email = "oma@rambler.ru",
                    Password = "111",
                    Age = 25
                },
                new User
                {
                    Name = "Tom",
                    Email = "tom1992@rambler.ru",
                    Password = "111",
                    Age = 17
                },
                new User
                {
                    Name = "Rom",
                    Email = "work@gmail.com",
                    Password = "111",
                    Age = 61
                },
                new User
                {
                    Name = "Gnom",
                    Email = "bla@mail.ru",
                    Password = "111",
                    Age = 22
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

        public static void AddProjectsInUsers(TrackerContext context)
        {
            var user1 = context.Users.First(x => x.Id == 1);
            var user2 = context.Users.First(x => x.Id == 2);
            var user3 = context.Users.First(x => x.Id == 3);
            var user4 = context.Users.First(x => x.Id == 4);

            user1.ProjectsUsers.Add(new ProjectUser
            {
                ProjectId = 1,
                UserId = user1.Id,
            });

            user1.ProjectsUsers.Add(new ProjectUser
            {
                ProjectId = 2,
                UserId = user1.Id,
            });

            user2.ProjectsUsers.Add(new ProjectUser
            {
                ProjectId = 2,
                UserId = user2.Id,
            });

            user3.ProjectsUsers.Add(new ProjectUser
            {
                ProjectId = 4,
                UserId = user3.Id,
            });

            context.SaveChanges();
        }
    }
}