using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using IMDB.Configuration;
using IMDB.Data.Dto;
using IMDB.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace IMDB.Data
{
    public class ImdbRepository : IImdbRepository
    {
        private readonly ImdbContext _context;
        private readonly ILogger<ImdbRepository> _logger;
        private readonly IMapper _mapper;

        public ImdbRepository(ImdbContext context, ILogger<ImdbRepository> logger, IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        public IEnumerable<MovieDto> GetAllMovies()
        {
            try
            {
                var result = _context.Movies
                    .Include(m => m.ProducerName)
                    .Include(m => m.Cast)
                    .ThenInclude(c=>c.Actor)
                    .ToList();
                return _mapper.Map<IEnumerable<Movie>, IEnumerable<MovieDto>>(result);
            }

            catch (Exception ex)
            {
                _logger.LogError($"Error occurred while retrieving movies: {ex}");
                return null;
            }
        }

        public MovieDto GetMovieById(int id)
        {
            try
            {
                
                var result = _context.Movies
                    .Include(m => m.ProducerName)
                    .Include(m => m.Cast)
                    .ThenInclude(c=>c.Actor)
                    .FirstOrDefault(m => m.Id==id);
                return _mapper.Map<Movie, MovieDto>(result);
            }

            catch (Exception ex)
            {
                _logger.LogError($"Error occurred while retrieving movie {id}: {ex}");
                return null;
            }
        }

        public IEnumerable<CastDto> GetAllActors()
        {
            try
            {
                var result = _context.Actors
                    .Include(m => m.Movies)
                    .ThenInclude(c => c.Movie)
                    .ToList();
                return _mapper.Map<IEnumerable<Actor>, IEnumerable<CastDto>>(result);
            }
            catch(Exception ex)
            {
                _logger.LogError($"Error occurred while retrieving actors list: {ex}");
                return null;
            }
        }

        public CastDto GetActorByName(string name)
        {
            try
            {
                var result = _context.Actors
                    .Include(m => m.Movies)
                    .ThenInclude(c => c.Movie)
                    .FirstOrDefault(a => a.Name.Contains(name));
                return _mapper.Map<Actor, CastDto>(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occurred while retrieving actor {name}: {ex}");
                return null;
            }
        }

        public void AddEntity(object movie)
        {
            _context.Add(movie);
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }

        public ProducerDto GetProducer(int id)
        {
            try
            {
                var result= _context.Producers
                        .Include(p=>p.Movies)
                    .FirstOrDefault(p => p.Id == id);
                return _mapper.Map<Producer, ProducerDto>(result);
            }
            catch(Exception ex)
            {
                _logger.LogError($"Unable to fetch producer data: {ex}");
                return null;
            }
        }
    }
}
