using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using To_Do.Service.Dtos;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Dtos;
using ToDoApp.Service.Shared;

namespace ToDoApp.Service.Services
{
    public interface ITaskItemService
    {
        Task<ServiceResponse<bool>> Create(CreateTaskItemDto createTask, Account account);
        Task<ServiceResponse<bool>> Update(CreateTaskItemDto createTask, Account account);
        Task<ServiceResponse<List<GetTaskItemsDto>>> GetAll();
        Task<ServiceResponse<bool>> Delete(int id, Account account);

    }
}
