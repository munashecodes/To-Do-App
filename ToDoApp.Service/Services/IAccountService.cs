using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Dtos;
using ToDoApp.Service.Shared;

namespace ToDoApp.Service.Services
{
    public interface IAccountService
    {
        Task<ServiceResponse<bool>> Create(CreateAccountDto accountDto, Account account);
        Task<ServiceResponse<bool>> Authenticate(CreateAccountDto accountDto, Account account);
        Task<ServiceResponse<bool>> Delete(int id, Account account);
        Task<ServiceResponse<bool>> Update(CreateAccountDto accountDto, Account account);
    }
}
