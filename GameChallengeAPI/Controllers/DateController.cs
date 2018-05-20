using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GameChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    public class DateController : Controller
    {
        // GET api/date
        [HttpGet]
        public DateTime Get()
        {
            return DateTime.Today;
        }
    }
}
