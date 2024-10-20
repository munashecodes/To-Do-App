using Microsoft.EntityFrameworkCore;
using ToDoApp.Data.AggegateRoots;
using ToDoApp.Data.Entity_Models;

namespace ToDoApp.Data.DbContexts
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options)
        {

        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<TaskItem> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TaskItem>()
                .HasOne(ti => ti.User)
                .WithMany(u => u.TaskItems)
                .HasForeignKey(ti => ti.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            ConfigureAuditedEntity<TaskItem>(modelBuilder);
            ConfigureAuditedEntity<Account>(modelBuilder);
        }

        private static void ConfigureAuditedEntity<TEntity>(ModelBuilder modelBuilder) where TEntity : AuditedAggregateRoot<int>
        {
            modelBuilder.Entity<TEntity>(entity =>
            {
                //configure relationship for creator
                entity.HasOne<Account>("Creator")
                      .WithMany()
                      .HasForeignKey("CreatorId")
                      .OnDelete(DeleteBehavior.Restrict);

                //configure relationship for deleter
                entity.HasOne<Account>("Deleter")
                      .WithMany()
                      .HasForeignKey("DeleterId")
                      .OnDelete(DeleteBehavior.Restrict);

                //if an entity if fully audited

                if (typeof(FullAuditedAggregateRoot<int>).IsAssignableFrom(typeof(TEntity)))
                {
                    entity.HasOne<Account>("LastModifier")
                      .WithMany()
                      .HasForeignKey("LastModifierId")
                      .OnDelete(DeleteBehavior.Restrict);

                }

            });
        }
    }
}
