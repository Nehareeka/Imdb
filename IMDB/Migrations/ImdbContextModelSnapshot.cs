﻿// <auto-generated />
using System;
using IMDB.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace IMDB.Migrations
{
    [DbContext(typeof(ImdbContext))]
    partial class ImdbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("IMDB.Data.Entities.Actor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Bio");

                    b.Property<DateTime>("Dob");

                    b.Property<string>("Name");

                    b.Property<string>("Sex");

                    b.HasKey("Id");

                    b.ToTable("Actors");
                });

            modelBuilder.Entity("IMDB.Data.Entities.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("Plot");

                    b.Property<string>("Poster");

                    b.Property<int?>("ProducerNameId");

                    b.Property<DateTime>("ReleaseYear");

                    b.HasKey("Id");

                    b.HasIndex("ProducerNameId");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("IMDB.Data.Entities.MovieActor", b =>
                {
                    b.Property<int>("ActorId");

                    b.Property<int>("MovieId");

                    b.HasKey("ActorId", "MovieId");

                    b.HasIndex("MovieId");

                    b.ToTable("MovieActor");
                });

            modelBuilder.Entity("IMDB.Data.Entities.Producer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Bio");

                    b.Property<DateTime>("Dob");

                    b.Property<string>("Name");

                    b.Property<string>("Sex");

                    b.HasKey("Id");

                    b.ToTable("Producers");

                    b.HasData(
                        new { Id = 1, Bio = "hehehehe", Dob = new DateTime(2018, 12, 4, 11, 14, 31, 784, DateTimeKind.Local), Name = "Steven", Sex = "M" }
                    );
                });

            modelBuilder.Entity("IMDB.Data.Entities.Movie", b =>
                {
                    b.HasOne("IMDB.Data.Entities.Producer", "ProducerName")
                        .WithMany("Movies")
                        .HasForeignKey("ProducerNameId");
                });

            modelBuilder.Entity("IMDB.Data.Entities.MovieActor", b =>
                {
                    b.HasOne("IMDB.Data.Entities.Actor", "Actor")
                        .WithMany("Movies")
                        .HasForeignKey("ActorId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("IMDB.Data.Entities.Movie", "Movie")
                        .WithMany("Cast")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}