using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.AggegateRoots;

namespace ToDoApp.Data.Entity_Models
{
    public class Account : FullAuditedAggregateRoot<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }

        public ICollection<TaskItem>? TaskItems { get; set; }
    }
}
