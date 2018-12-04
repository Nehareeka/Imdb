using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMDB.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Newtonsoft.Json;

namespace IMDB.Data
{
    public class ImdbSeeder
    {
        private readonly ImdbContext _context;
        private readonly IHostingEnvironment _hosting;

        public ImdbSeeder(ImdbContext context, IHostingEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();
            if (!_context.Movies.AsNoTracking().Any())
            {
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/movies.json");
                var json = File.ReadAllText(filepath);
                var movies = JsonConvert.DeserializeObject<ICollection<Movie>>(json);
                filepath = Path.Combine(_hosting.ContentRootPath, "Data/actors.json");
                json = File.ReadAllText(filepath);
                var actors = JsonConvert.DeserializeObject<ICollection<Actor>>(json);

                _context.Movies.AddRange(movies);
                _context.SaveChanges();
                _context.Actors.AddRange(actors);
                _context.SaveChanges();
                //foreach (var movie in movies)
                //{
                //    foreach (var actor in actors)
                //    {
                //        if (actor.Movies.Any(m => m.MovieId == movie.Id))
                //        {
                //            movie.Cast.Add(new MovieActor
                //            {
                //                MovieId = movie.Id,
                //                ActorId = actor.Id
                //            });
                //        }
                //    }
                //}

                
            }

        }
    }
}
