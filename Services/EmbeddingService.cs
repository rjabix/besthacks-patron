using hackathon_backend.Models;
using OpenAI.Chat;
using OpenAI.Embeddings;
using Pgvector;

namespace hackathon_backend.Services
{
    public class EmbeddingService
    {
        private readonly ILogger<EmbeddingService> _logger;
        private readonly JobsDbContext _context;
        private readonly EmbeddingClient _client;
        private readonly ChatClient _chat_client;

        public EmbeddingService(JobsDbContext context, ILogger<EmbeddingService> logger, IConfiguration config)
        {
            _logger = logger;
            _context = context;
            _client = new EmbeddingClient("text-embedding-3-small", config.GetValue<string>("OPENAI_KEY"));
            _chat_client = new ChatClient("gpt-4o-mini", config.GetValue<string>("OPENAI_KEY"));
        }

        public async Task<Vector> GetEmbeddingAsync(string text)
        {
            OpenAIEmbedding embedding = await _client.GenerateEmbeddingAsync(text) ?? throw new Exception("Failed to generate embedding");
            ReadOnlyMemory<float> vector = embedding.ToFloats();
            Console.WriteLine($"Embedding: {vector}");
            return new Vector(vector);
        }

        public async Task<Vector> GetRequirmentsEmbeddingAsync(string text)
        {
            const string admin_message = "only generate key value pairs of type <skill_required> = <level_required> of following text: ";
            ChatCompletion response = await _chat_client.CompleteChatAsync(admin_message + text);
            var key_value_pairs = response.Content[0].Text;

            OpenAIEmbedding embedding = await _client.GenerateEmbeddingAsync(key_value_pairs) ?? throw new Exception("Failed to generate embedding");
            ReadOnlyMemory<float> vector = embedding.ToFloats();
            Console.WriteLine($"Embedding: {vector}");
            return new Vector(vector);
        }

        public async Task<Vector> GetSearchEmbedding(string text)
        {
            const string admin_message = "only generate key value pairs of type <skill_name> = <skill_level> of following text: ";
            ChatCompletion response = await _chat_client.CompleteChatAsync(admin_message + text);
            var key_value_pairs = response.Content[0].Text;

            OpenAIEmbedding embedding = await _client.GenerateEmbeddingAsync(key_value_pairs) ?? throw new Exception("Failed to generate embedding");
            ReadOnlyMemory<float> vector = embedding.ToFloats();
            Console.WriteLine($"Embedding: {vector}");
            return new Vector(vector);
        }
    }
}
