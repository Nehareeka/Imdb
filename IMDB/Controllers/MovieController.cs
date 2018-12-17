using System;
using AutoMapper;
using IMDB.Data;
using IMDB.Data.Dto;
using IMDB.Data.Entities;
using IMDB.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IMDB.Controllers
{
    [Route("api/[Controller]")]
    public class MovieController : ControllerBase
    {
        private readonly IImdbRepository _repo;
        private readonly ILogger<MovieController> _logger;
        private readonly IMapper _mapper;

        public MovieController(IImdbRepository repo, ILogger<MovieController> logger, IMapper mapper)
        {
            _repo = repo;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllMovies());
            }
            catch (Exception ex)
            {
                _logger.LogError($"error occurred: {ex}");
                return BadRequest("Error occurred");
            }
            
            
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var movie = _repo.GetMovieById(id);
                if (movie != null)
                    return Ok(movie);
                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"error occurred: {ex}");
                return BadRequest("Error occurred");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]MovieDto movie)
        {
            try
            {
                _repo.AddEntity(_mapper.Map<MovieDto,Movie>(movie));
                if (_repo.SaveAll())
                {
                    return Created($"/api/movie/{movie.Id}", movie);
                }
            }
            catch(Exception ex)
            {   
                _logger.LogError($"Could not save new movie information: {ex}");
                return BadRequest();
            }

            return BadRequest("Failed to save new movie details");
        }
    }
}
