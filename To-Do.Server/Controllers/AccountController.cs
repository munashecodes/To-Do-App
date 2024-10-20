using Microsoft.AspNetCore.Authorization;
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
        private readonly IConfiguration _config;

        public AccountController(IAccountService accountService, IConfiguration config)
        {
            _accountService = accountService;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost("create")]
        public async Task<ActionResult<ServiceResponse<bool>>> Create(CreateAccountDto accountDto)
        {
            return Ok(await _accountService.Create(accountDto));
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult<ServiceResponse<bool>>> Authenticate(AuthenticationRequestDto accountDto)
        {
            return Ok(await _accountService.Authenticate(accountDto));
        }
    }
}
