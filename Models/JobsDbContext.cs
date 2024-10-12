using Microsoft.EntityFrameworkCore;
using Pgvector;
using Pgvector.EntityFrameworkCore;

namespace hackathon_backend.Models
{
    public class JobsDbContext(DbContextOptions<JobsDbContext> options) : DbContext(options)
    {
        public DbSet<Job> Jobs { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasPostgresExtension("vector");
        }


        public async Task<List<Job>> SearchAsync(Vector queryEmbedding, int page)
        {
            // this threshold is kinda like the accuracy of the search.
            // I would recommend to start with 0.5, which shoud
            // give you something. Normally 0.5 gives you too
            // much info. Tweaking it to the sweet spot is a fun experience.
            // it is different for any data.
            const double threshold = 0.7;

            // find neighbors in vector space and only take 5.
            // it also orders based on title embedding to show relevance of the order
            var offers = await Jobs
                .Where(job => job.RequirementsEmbedding!.L2Distance(queryEmbedding) < threshold || job.TitleEmbedding!.L2Distance(queryEmbedding) < threshold)
                .OrderBy(job => job.RequirementsEmbedding!.L2Distance(queryEmbedding))
                .Skip(page * 20)
                .Take(20)
                .ToListAsync();

            return offers;
        }
    }
}
