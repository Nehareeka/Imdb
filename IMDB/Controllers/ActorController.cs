using System;
using IMDB.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IMDB.Controllers
{
    [Route("api/[controller]")]
    public class ActorController : ControllerBase
    {
        private readonly IImdbRepository _repo;
        private readonly ILogger<ActorController> _logger;

        public ActorController(IImdbRepository repo, ILogger<ActorController> logger)
        {
            _repo = repo;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllActors());
            }
            catch(Exception ex)
            {
                _logger.LogError($"Sorry! Unable to get the actors list: {ex}");
                return BadRequest();
            }
        }

        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {
            try
            {
                var actor = _repo.GetActorByName(name);
                if (actor != null)
                    return Ok(actor);
                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Sorry! Unable to get the actor {name}: {ex}");
                return BadRequest();
            }
        }
    }
}
