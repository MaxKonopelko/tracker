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
                    Family = "Vladimir",
                    City = "Boston",
                    Address = "Gagarina 45a",
                    Country = "Austria",
                },
                new Client
                {
                    Family = "Semen",
                    City = "Minsk",
                    Address = "Moskovski 77-105",
                    Country = "Russia",
                },
                new Client
                {
                    Family = "Ivan",
                    City = "Vitebsk",
                    Address = "Gorovca 11",
                    Country = "Belarus",
                },
                new Client
                {
                    Family = "Petr",
                    City = "Moskow",
                    Address = "Lenina 25",
                    Country = "Germany",
                },
                new Client
                {
                    Family = "Vasiliy",
                    City = "Paris",
                    Address = "Bloxina 12",
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
                    ClientId = 1
                },
                new Project
                {
                    Name = "Timer",
                    ClientId = 2
                },
                new Project
                {
                    Name = "Blog",
                    ClientId = 3
                },
                new Project
                {
                    Name = "Petr",
                    ClientId = 4
                },
                new Project
                {
                    Name = "Vasiliy",
                    ClientId = 1
                },
            });
            context.SaveChanges();
        }
    }
}