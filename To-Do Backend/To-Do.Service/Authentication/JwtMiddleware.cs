using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using To_Do.Service.Helpers;
using ToDoApp.Data.DbContexts;
using ToDoApp.Service.Helpers;

namespace To_Do.Service.Authentication
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly AppSettings _appSettings;

        public JwtMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings)
        {
            _next = next;
            _appSettings = appSettings.Value;
        }

        public async Task Invoke (HttpContext context, ToDoDbContext dbContext, IJwtUtilities jwtUtilities)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var user = await jwtUtilities.ValidateJwtToken(token);
            if (user != null)
            {
                context.Items["Account"] = user;
            }

            await _next(context);
        }
    }
}
