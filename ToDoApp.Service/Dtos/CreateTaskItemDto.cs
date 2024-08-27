using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Shared;


namespace ToDoApp.Service.Dtos
{
    public class CreateTaskItemDto : EntityDto<int>
    {
        public int UserId { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public DateTime DateToRemind { get; set; }
        public Priority Priority { get; set; }
    }
}

