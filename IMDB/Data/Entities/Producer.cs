using System;
using System.Collections.Generic;
using IMDB.Data.Dto;

namespace IMDB.Data.Entities
{
    public class Producer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public DateTime Dob { get; set; }
        public string Bio { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
