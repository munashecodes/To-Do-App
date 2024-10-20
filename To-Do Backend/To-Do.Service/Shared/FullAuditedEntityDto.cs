using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoApp.Service.Shared
{
    public class FullAuditedEntityDto<T> : AuditedEntityDto<int>
    {
        public int? LastModifierId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
