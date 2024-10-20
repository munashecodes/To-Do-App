using Microsoft.AspNetCore.Mvc;
using To_Do.Service.Dtos;
using ToDoApp.Api.Controllers.Shared;
using ToDoApp.Service.Dtos;
using ToDoApp.Service.Services;
using ToDoApp.Service.Shared;

namespace ToDoApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskItemController : BaseController
    {
        private readonly ITaskItemService _taskItemService;

        public TaskItemController(ITaskItemService taskItemService)
        {
            _taskItemService = taskItemService;
        }

        [HttpPost("create")]

        public async Task<ActionResult<ServiceResponse<bool>>> Create(CreateTaskItemDto createTask)
        {
            return Ok(await _taskItemService.Create(createTask, Account));
        }

        [HttpGet("getAll")]

        public async Task<ActionResult<ServiceResponse<List<GetTaskItemsDto>>>> GetAll()
        {
            return Ok(await _taskItemService.GetAll());
        }
    }
}
