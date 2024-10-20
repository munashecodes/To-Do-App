using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Shared;

namespace To_Do.Service.Dtos
{
    public class GetTaskItemsDto : EntityDto<int>
    {
        public string TaskName { get; set; }
        public string Description { get; set; }
        public DateTime DateToRemind { get; set; }
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Priority Priority { get; set; }
    }
}
