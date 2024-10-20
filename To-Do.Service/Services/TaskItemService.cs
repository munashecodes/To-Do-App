using AutoMapper;
using Microsoft.EntityFrameworkCore;
using To_Do.Service.Dtos;
using ToDoApp.Data.DbContexts;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Dtos;
using ToDoApp.Service.Shared;

namespace ToDoApp.Service.Services
{
    public class TaskItemService : ITaskItemService
    {
        private readonly ToDoDbContext _context;
        private readonly IMapper _mapper;
        
        public TaskItemService(
           ToDoDbContext context,
           IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<bool>> Create(CreateTaskItemDto createTask, Account account)
        {
            try
            {
                
                var taskItem = _mapper.Map<TaskItem>(createTask);

                taskItem.PrepareEntityForCreate(account);
                taskItem.UserId = account.Id;

                _context.Tasks.Add(taskItem);
                await _context.SaveChangesAsync();

                return new ServiceResponse<bool>(true, "task added successfully");

            }
            catch(Exception ex)
            {
                return new ServiceResponse<bool>(false, ex.Message);

            }
        }

        public Task<ServiceResponse<bool>> Delete(int id, Account account)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<List<GetTaskItemsDto>>> GetAll()
        {
            try
            {

                var taskItems = await _context.Tasks.ToListAsync();

                var data = _mapper.Map<List<TaskItem>, List<GetTaskItemsDto>>(taskItems);

                return new ServiceResponse<List<GetTaskItemsDto>> (data, "task added successfully");

            }
            catch (Exception ex)
            {
                return new ServiceResponse<List<GetTaskItemsDto>>(null, ex.Message);

            }
        }

        public Task<ServiceResponse<bool>> Update(CreateTaskItemDto createTask, Account account)
        {
            throw new NotImplementedException();
        }
    }
}
