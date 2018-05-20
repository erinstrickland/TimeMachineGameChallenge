using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameChallengeAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GameChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        private readonly GameContext _context;

        public GameController(GameContext context)
        {
            _context = context;
        }

        // GET api/game
        [HttpGet]
        public IEnumerable<Game> Get()
        {
            return new Game[] 
            { 
                new Game {Id=1, Title="Super Mario Bros", Platform="NES"}, 
                new Game {Id=2, Title="The Legend of Zelda", Platform="NES"}            
        };
        }

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
