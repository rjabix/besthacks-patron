using Microsoft.EntityFrameworkCore;
using Npgsql;
using Pgvector;
using Pgvector.EntityFrameworkCore;
using System.Numerics;

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


        public async Task<Dictionary<Job, double>> SearchAsync(Pgvector.Vector queryEmbedding, int page)
        {
            // this threshold is kinda like the accuracy of the search.
            // I would recommend to start with 0.5, which shoud
            // give you something. Normally 0.5 gives you too
            // much info. Tweaking it to the sweet spot is a fun experience.
            // it is different for any data.
            double threshold = 1.05;

            // find neighbors in vector space and only take 5.
            // it also orders based on title embedding to show relevance of the order
            var offers = await Jobs
                .Where(job => job.RequirementsEmbedding!.L2Distance(queryEmbedding) < threshold || job.TitleEmbedding!.L2Distance(queryEmbedding) < threshold)
                .OrderBy(job => job.RequirementsEmbedding!.L2Distance(queryEmbedding))
                .Skip(page * 27)
                .Take(27)
                .ToListAsync();
            Console.WriteLine($"[SEARCH] {offers.Count} offers found.");

            Dictionary<Job, double> results = [];
            foreach (var offer in offers)
            {
                var distance = await Jobs.Where(job => job.Id == offer.Id).Select(job => job.RequirementsEmbedding!.L2Distance(queryEmbedding)).FirstAsync();
                results.Add(offer, (double)distance);
            }

            return results;
        }
    }
}
