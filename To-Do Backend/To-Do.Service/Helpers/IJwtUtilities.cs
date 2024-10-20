using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.Entity_Models;

namespace ToDoApp.Service.Helpers
{
    public interface IJwtUtilities
    {

        public string GenerateJwtToken(Account account);
        public Task<Account>? ValidateJwtToken(string token);


    }
}
