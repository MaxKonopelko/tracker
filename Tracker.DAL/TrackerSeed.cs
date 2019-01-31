using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace Tracker.DAL
{
    public static class TrackerSeed
    {
        public static void Seed(TrackerContext context)
        {
            CreateUsers(context);
        }

        private static void CreateUsers(TrackerContext context)
        {
            context.Users.Add(new User
            {
                Name = "Max",
                Email = "111",
                Password = "111"
            });

            context.SaveChanges();
        }
    }
}
