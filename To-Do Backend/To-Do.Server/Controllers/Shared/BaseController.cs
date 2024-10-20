using Microsoft.AspNetCore.Mvc;
using ToDoApp.Data.Entity_Models;

namespace ToDoApp.Api.Controllers.Shared
{
    [Controller]
    public abstract class BaseController : ControllerBase
    {
        public Account Account => (Account)HttpContext.Items["Account"]!;

    }
}
