using System.ComponentModel.DataAnnotations.Schema;

namespace GameChallengeAPI.Models
{
    public class Game
    {
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Title { get; set; }
        public string Platform { get; set; }
    }
}