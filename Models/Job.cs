using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Pgvector;
using hackathon_backend.Services;

namespace hackathon_backend.Models
{
    public class Job
    {

        public int Id { get; set; }

        [Required]
        [Column("portal")]
        public Portal Portal { get; set; }

        [Required]
        public int PortalId { get; set; }

        [Required]
        [Column("title")]
        public string Title { get; set; }

        [Required]
        [Column("company")]
        public string Company { get; set; }

        [Required]
        public string Requirements { get; set; }

        [Required]
        public string ValidUntil { get; set; }

        [Column("title_embedding", TypeName = "vector(1536)")]
        [Required]
        public Vector? TitleEmbedding { get; set; }

        [Column("requirements_embedding", TypeName = "vector(1536)")]
        [Required]
        public Vector? RequirementsEmbedding { get; set; }

        public static async Task<Job>? CreateJobAsync(EmbeddingService service, string company,string title, string description, Portal portal, int portalId, DateTime validUntil)
        {
            if (DateTime.Now.AddDays(14) > validUntil)
            {
                Console.WriteLine($"[JOB_SKIPPED] [{portal.ToFriendlyString()} / {portalId}]");
                return null;
            }
            var titleEmbedding = await service.GetEmbeddingAsync(title);

            var descriptionEmbedding = await service.GetRequirmentsEmbeddingAsync(description);
            return new Job
            {
                Company = company,
                Title = title,
                TitleEmbedding = titleEmbedding,
                Requirements = description,
                RequirementsEmbedding = descriptionEmbedding,
                Portal = portal,
                PortalId = portalId,
                ValidUntil = validUntil.ToString("MM/dd/yy")
            };
        }
    }
}

