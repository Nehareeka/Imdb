using System;
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
        public DateTime ReleaseYear { get; set; }
        public string Poster { get; set; }//Image url
        public virtual ICollection<CastDto> Cast { get; set; }
        public ProducerDto ProducerName { get; set; }
    }
}
