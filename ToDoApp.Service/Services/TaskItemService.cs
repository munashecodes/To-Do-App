using AutoMapper;
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
                //map dto to model
                var taskItem = _mapper.Map<TaskItem>(createTask);

                //prepare for create
                taskItem.PrepareEntityForCreate(account);

                //add to database and save
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

        public Task<ServiceResponse<bool>> Update(CreateTaskItemDto createTask, Account account)
        {
            throw new NotImplementedException();
        }
    }
}
