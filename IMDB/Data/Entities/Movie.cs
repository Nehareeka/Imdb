﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMDB.Data.Entities
{
    public class Movie
    {
        public Movie()
        {
            Cast = new List<MovieActor>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime ReleaseYear { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }//Image url
        public virtual ICollection<MovieActor> Cast { get; set; }
        public int ProducerId { get; set; }
        public Producer Producer { get; set; }
        
    }
}
