using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.AggegateRoots;

namespace ToDoApp.Data.Entity_Models
{
    public class TaskItem : FullAuditedAggregateRoot<int>
    {
        public int? UserId { get; set; }
        public Account? User { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public DateTime DateToRemind { get; set; }
        public Priority Priority { get; set; }
    }

    public enum Priority
    {
        High,
        Medium,
        Low
        
    }
}
