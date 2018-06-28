using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameChallengeAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace GameChallengeAPI.Controllers
{

    [Route("api/[controller]")]
    [EnableCors("ReactApp")]
    public class GameController : Controller
    {
        private readonly GameContext _context;

        public GameController(GameContext context) => _context = context;

        // GET api/game
        [HttpGet]
        public IEnumerable<Game> Get() => _context.Game;

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Game data)
        {
            _context.Game.Add(data);
            _context.SaveChanges();
            return Ok();
        }
    }
}
