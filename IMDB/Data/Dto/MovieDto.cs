﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMDB.Data.Entities;

namespace IMDB.Data.Dto
{
    public class MovieDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Plot { get; set; }
        public DateTime ReleaseYear { get; set; }
        public string Poster { get; set; }//Image url
        public virtual ICollection<SimpleDto> Cast { get; set; }
        public ProducerDto Producer { get; set; }
    }
}
