using System.Collections.Generic;
using IMDB.Data.Dto;
using IMDB.Data.Entities;

namespace IMDB.Data
{
    public interface IImdbRepository
    {
        IEnumerable<MovieDto> GetAllMovies();
        MovieDto GetMovieById(int id);
        IEnumerable<SimpleDto> GetAllActors();
        CastDto GetActorByName(string name);
        void AddEntity(object movie);
        bool SaveAll();
        ProducerDto GetProducer(int id);
        IEnumerable<SimpleDto> GetProducer();
    }
}