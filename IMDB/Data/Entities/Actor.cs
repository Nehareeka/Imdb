using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMDB.Data.Entities
{
    public class Actor
    {
        public Actor()
        {
            Movies = new List<MovieActor>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public DateTime Dob { get; set; }
        public string Bio { get; set; }
        public virtual ICollection<MovieActor> Movies { get; set; }
    }
}
