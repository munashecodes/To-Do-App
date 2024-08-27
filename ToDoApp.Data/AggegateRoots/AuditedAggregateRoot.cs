using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.Entity_Models;

namespace ToDoApp.Data.AggegateRoots
{
    public class AuditedAggregateRoot<T> : BasicAggregateRoot<int>
    {
        public DateTime? CreationTime { get; set; }
        public DateTime? DeletionTime { get; set; }
        public int? DeleterId { get; set; }
        public Account? Deleter { get; set; }
        public int? CreatorId { get; set; }
        public Account? Creator { get; set; }

        public void PrepareEntityForCreate(Account account)
        {
            CreatorId = account.Id;
            CreationTime = DateTime.Now;

        }

        public void PrepareEntityForDelete(Account account)
        {
            DeleterId = account.Id;
            DeletionTime = DateTime.Now;

        }
    }
}
