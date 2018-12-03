using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMDB.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IMDB.Controllers
{
    [Route("api/movie/{id}/producer")]
    public class ProducerController :ControllerBase
    {
        private readonly IImdbRepository _repo;
        private readonly ILogger<ProducerController> _logger;

        public ProducerController(IImdbRepository repo, ILogger<ProducerController> logger)
        {
            _repo = repo;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(int id)
        {
            try
            {
                var producer = _repo.GetProducer(id);
                if (producer != null)
                    return Ok(producer);
                else return NotFound();
            }
            catch(Exception ex)
            { 
            _logger.LogError($"Couldn't fetch producer information: {ex}");
                return BadRequest();
            }
        }
    }
}
