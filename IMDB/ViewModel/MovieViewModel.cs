using System;
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
        [Required]
        public DateTime ReleaseYear { get; set; }
        public string Plot { get; set; }
      //  public string Poster { get; set; }//Image url
        [Required]
        public string Cast { get; set; }
        [Required]
        public string ProducerName { get; set; }
    }
}
