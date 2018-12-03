using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMDB.Data.Entities;

namespace IMDB.Data.Dto
{
    public class ProducerDto
    {
        public int Id { get; set; }
            public string Name { get; set; }
            public string Sex { get; set; }
            public DateTime Dob { get; set; }
            public string Bio { get; set; }
            public ICollection<MovieDetailsDto> Movies { get; set; }

    }
}
