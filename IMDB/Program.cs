using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using IMDB.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace IMDB
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            SeedDb(host);
                
            host.Run();
        }

        private static void SeedDb(IWebHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using(var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<ImdbSeeder>();
                seeder.Seed();
            }


        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(StartupConfiguration)
                .UseStartup<Startup>()
                .Build();

        private static void StartupConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder)
        {
            //Removing the default configuration options
            builder.Sources.Clear();
            builder.AddJsonFile("config.json", false, true)
                .AddEnvironmentVariables();
        }
    }
}
