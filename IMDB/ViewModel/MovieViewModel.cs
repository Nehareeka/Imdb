﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMDB.Data.Entities;

namespace IMDB.ViewModel
{
    public class MovieViewModel
    {
        
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime ReleaseYear { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }//Image url
        public virtual ICollection<MovieActor> Cast { get; set; }
        public Producer ProducerName { get; set; }
    }
}
