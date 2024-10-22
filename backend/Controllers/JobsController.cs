using hackathon_backend.Models;
using hackathon_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace hackathon_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobsController : ControllerBase
    {
        private readonly JobsDbContext _context;
        private readonly EmbeddingService _embeddingService;

        public JobsController(JobsDbContext context, EmbeddingService embeddingService)
        {
            _context = context;
            _embeddingService = embeddingService;
        }

        [HttpPost("CreateJob")]
        public async Task<IActionResult> CreateJob([FromBody] JobRequest jobRequest)
        {
            try
            {
                var job = await _context.Jobs.FirstOrDefaultAsync(job => job.Portal == jobRequest.Portal.FromString() && job.PortalId == jobRequest.PortalId);
                if (job != null)
                {
                    return BadRequest("Job already exists.");
                }
                job = await Job.CreateJobAsync(_embeddingService, jobRequest.Company, jobRequest.Title, jobRequest.Requirements, jobRequest.Portal.FromString(), jobRequest.PortalId, DateTime.Parse(jobRequest.ValidUntil));
                if (job == null)
                {
                    return Accepted("Too soon to expire, adding omitted.");
                }

                _context.Jobs.Add(job);
                await _context.SaveChangesAsync();
                return Ok("Added successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        public class JobRequest
        {
            public string Company { get; set; }
            public string Title { get; set; }
            public string Requirements { get; set; }
            public string Portal { get; set; }
            public int PortalId { get; set; }
            public string ValidUntil { get; set; }
        }

        [HttpGet("GetJob")]
        public async Task<IActionResult> GetJob([FromQuery] string portal, [FromQuery] int id)
        {
            Job job = await _context.Jobs.FirstAsync(job => job.Portal == portal.FromString() && job.PortalId == id) ?? throw new Exception("Job cannot be found.");
            return Ok(job);
        }
    }
}
