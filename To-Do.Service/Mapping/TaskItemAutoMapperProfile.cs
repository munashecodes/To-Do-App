using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using To_Do.Service.Dtos;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Dtos;

namespace ToDoApp.Service.Mapping
{
    public class TaskItemAutoMapperProfile : Profile
    {
        public TaskItemAutoMapperProfile()
        {
            CreateMap<CreateTaskItemDto, TaskItem>();
            CreateMap<TaskItem, GetTaskItemsDto>();
                
        }
    }
}
