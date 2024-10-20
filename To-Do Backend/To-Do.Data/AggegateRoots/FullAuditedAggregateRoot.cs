using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.Entity_Models;

namespace ToDoApp.Data.AggegateRoots
{
    public class FullAuditedAggregateRoot<T> : AuditedAggregateRoot<int>
    {
        public int? LastModifierId { get; set; }
        public Account? LastModifier { get; set; }
        public DateTime? LastModificationTime { get; set; }

        public void PrepareEntityForUpdate(Account account)
        {
            LastModificationTime = DateTime.Now;
            LastModifierId = account.Id;
        }
    }
}
