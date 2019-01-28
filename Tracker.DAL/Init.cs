using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Tracker.DAL
{
    public static class InitDb
    {
        public static void InitConnectionString(IServiceCollection services)
        {
            services.AddDbContext<TrackerContext>(x =>
                x.UseSqlServer("Data Source=DESKTOP-P5T4DB7;Initial Catalog=Tracker;Integrated Security=True;"));
        }

        public static void Init(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<TrackerContext>();

                Create(context);
            }
        }

        private static void Create(TrackerContext context)
        {
            if (context.Database.EnsureCreated())
            {
                TrackerSeed.Seed(context);
            }
        }
    }
}