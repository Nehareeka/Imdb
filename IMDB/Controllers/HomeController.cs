using System.Linq;
using IMDB.Data;
using IMDB.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMDB.Controllers
{
    public class HomeController : Controller
    {
        private readonly IImdbRepository _repo;

        public HomeController(IImdbRepository repo)
        {
            _repo = repo;
        }
        public IActionResult Index()
        {
           // throw new InvalidOperationException("Oops!  ");
            var result = _repo.GetAllMovies();
            return View(result);
        }

        [HttpPost]
        public IActionResult Add(MovieViewModel input)
        {
            return null;
            // throw new InvalidOperationException("Oops!  ");
            //var result = _repo.GetAllMovies();
            //return View(result);
        }

    }
}
