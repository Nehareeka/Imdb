using AutoMapper;
using IMDB.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace IMDB
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper();
            services.AddTransient<ImdbSeeder>();
            services.AddDbContext<ImdbContext>(cfg =>
            {
                cfg.UseSqlServer(_config.GetConnectionString("ImdbConnectionString"));
            });

            services.AddScoped<IImdbRepository, ImdbRepository>();
            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
            // app.UseDefaultFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error"); // display an error razor page(inside Pages folder) in case environment is production
            }
            app.UseStaticFiles();
            app.UseNodeModules(env);

            app.UseMvc(cfg =>
                {
                    cfg.MapRoute("Default",
                        "{controller}/{action}/{id?}",
                        new { controller = "Home", Action = "Index" });
                }
            );


        }
    }
}
