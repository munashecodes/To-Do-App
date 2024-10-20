using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace ToDoApp.Service.Shared
{
    public class AuditedEntityDto<T> : EntityDto<int>
    {
        public DateTime? CreationTime { get; set; }
        public DateTime? DeletionTime { get; set; }
        public int? DeleterId { get; set; }
        public int? CreatorId { get; set; }

    }
    
}
