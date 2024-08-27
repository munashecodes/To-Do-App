using Microsoft.AspNetCore.Mvc;
using ToDoApp.Api.Controllers.Shared;
using ToDoApp.Service.Dtos;
using ToDoApp.Service.Services;
using ToDoApp.Service.Shared;

namespace ToDoApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : BaseController
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("create")]
        public async Task<ActionResult<ServiceResponse<bool>>> Create(CreateAccountDto accountDto)
        {
            return Ok(await _accountService.Create(accountDto, Account));
        }
    }
}
