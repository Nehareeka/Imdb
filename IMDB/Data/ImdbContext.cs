﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMDB.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace IMDB.Data
{
    public class ImdbContext : DbContext
    {
        public ImdbContext(DbContextOptions<ImdbContext> options) : base(options)
        {
            
        }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Producer> Producers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Movie>()
                .Property(c => c.Id)
                .ValueGeneratedNever();

            modelBuilder.Entity<Actor>()
                .Property(c => c.Id)
                .ValueGeneratedNever();
            modelBuilder.Entity<Producer>()
                .HasData(new Producer
                {
                    Id = 1,
                    Bio = "hehehehe",
                    Dob = DateTime.Now,
                    Movies = {},
                    Name = "Steven",
                    Sex = "M"
                });

            modelBuilder.Entity<MovieActor>().HasKey(ma => new { ma.ActorId, ma.MovieId });
            modelBuilder.Entity<MovieActor>()
                .HasOne(bc => bc.Movie)
                .WithMany(b => b.Cast)
                .HasForeignKey(bc => bc.MovieId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MovieActor>()
                .HasOne(bc => bc.Actor)
                .WithMany(c => c.Movies)
                .HasForeignKey(bc => bc.ActorId)
                .OnDelete(DeleteBehavior.Restrict);


        }
    }
}
