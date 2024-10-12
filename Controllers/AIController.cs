using hackathon_backend.Models;
using hackathon_backend.Services;
using Microsoft.AspNetCore.Mvc;
using OpenAI.Chat;
using OpenAI;
using Pgvector;
using Microsoft.EntityFrameworkCore;

namespace hackathon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AIController : ControllerBase
{
    private readonly ILogger<AIController> _logger;
    private readonly ChatClient _client;
    private readonly JobsDbContext _context;
    private readonly EmbeddingService _embeddingService;
    private readonly IConfiguration _config;
    public AIController(ILogger<AIController> logger, IConfiguration config, JobsDbContext context, EmbeddingService embeddingService)
    {
        _logger = logger;
        _client = new OpenAIClient(config!.GetValue<string>("OPENAI_KEY")).GetChatClient("gpt-4o-mini");
        _context = context;
        _config = config;
        _embeddingService = embeddingService;
    }

    [HttpPost("GetAiResponse")]
    public async Task<IActionResult> Get([FromBody] ChatRequest request)
    {
        ChatCompletionOptions options = new();
        options.MaxOutputTokenCount = 10;
        ChatMessage message = new UserChatMessage(request.Prompt);
        ChatCompletion completion = _client.CompleteChat([message], options);

        Console.WriteLine($"[ASSISTANT]: {completion.Content[0].Text}");

        return Ok(completion.Content[0].Text);
    }

    public class ChatRequest
    {
        public required string Prompt { get; set; }
    }

    [HttpPost("SearchJobs")]
    public async Task<IActionResult> SearchJobs([FromBody] ChatRequest searchRequest) // currently using ChatRequest as it also has 1 string field
    {
        Vector queryEmbedding = await _embeddingService.GetSearchEmbedding(searchRequest.Prompt);
        var jobs = await _context.SearchAsync(queryEmbedding, 0, searchRequest.Prompt.Length);

        // i think it would not work for other portals than pracuj.pl 
        var jobs_results = jobs.Select(job => new { job.Key.Title, job.Key.Requirements, link = _config.GetValue<string>("Portals_start_url:" + job.Key.Portal.ToFriendlyString()) + job.Key.PortalId, accuracy = job.Value});

        //Dictionary<Job, int> job_suitability = [];
        //foreach (var job in jobs)
        //{
        //    job_suitability.Add(job, (int)job.DescriptionEmbedding!.L2Distance(queryEmbedding));
        //}

        return Ok(jobs_results);
    }

    [HttpGet("GetShorten{(id)}")]
    public async Task<IActionResult> GetShorten(int id)
    {
        Job job = await _context.Jobs.FirstAsync(job => job.Id == id) ?? throw new Exception("Job cannot be found.");
        ChatCompletion response = await _client.CompleteChatAsync("shorten this: " + job.Title + " " + job.Requirements);
        return Ok(response.Content[0].Text);
    }

}

