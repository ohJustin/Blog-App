using Microsoft.AspNetCore.Mvc;
using Firestore.Services;

namespace Firestore.Controllers
{
    [Route("api/firestore")]
    [ApiController]
    public class FirestoreController : ControllerBase
    {
        private readonly FirestoreService _firestoreService;

        public FirestoreController(FirestoreService firestoreService)
        {
            _firestoreService = firestoreService;
        }

        [HttpGet("posts")]
        public async Task<IActionResult> GetPostsAsync()
        {
            try
            {
                var posts = await _firestoreService.GetPostsAsync("posts");
                return Ok(posts);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("profile")]
        public async Task<IActionResult> SaveProfileAsync([FromBody] int userId, string nickName)
        {
            try
            {
                var result = await _firestoreService.SaveProfileAsync(userId, nickName);
                return Ok(result);
            }

            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}