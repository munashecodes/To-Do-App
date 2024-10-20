using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Data.DbContexts;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Dtos;
using ToDoApp.Service.Shared;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace ToDoApp.Service.Services
{
    public class AccountService : IAccountService
    {
        private readonly ToDoDbContext _context;
        private readonly IMapper _mapper;

        public AccountService(
            ToDoDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<bool>> Authenticate(AuthenticationRequestDto accountDto)
        {
            try
            {
                //check for email
                var email = await _context.Accounts.FirstOrDefaultAsync(a => a.Email == accountDto.Email);
                if (email != null)
                {
                    //verify password
                    var verification = BCrypt.Net.BCrypt.Verify(accountDto.Password, email.Password);
                    if (verification)
                    {
                        return new ServiceResponse<bool>(true, "Authentication successful");
                    }
                    else
                    {
                        return new ServiceResponse<bool>(false, "Incorrect email/password");
                    }
                }
                else
                {
                    return new ServiceResponse<bool>(false, "Email doesn't exist");

                }

            }
            catch(Exception ex)
            {
                return new ServiceResponse<bool>(false, ex.Message);

            }
            
        }

        public async Task<ServiceResponse<bool>> Create(CreateAccountDto accountDto)
        {
            try
            {
                
                var newAccount = _mapper.Map<Account>(accountDto);

                newAccount.Password = BCrypt.Net.BCrypt.HashPassword(accountDto.Password);

                _context.Accounts.Add(newAccount);
                await _context.SaveChangesAsync();

                return new ServiceResponse<bool>(true, "Account successfully created!");

            }
            catch(Exception ex)
            {
                return new ServiceResponse<bool>(true, ex.Message);

            }
        }

        public Task<ServiceResponse<bool>> Delete(int id, Account account)
        {
            throw new NotImplementedException();
        }

        public Task<ServiceResponse<bool>> Update(CreateAccountDto accountDto, Account account)
        {
            throw new NotImplementedException();
        }
    }
}
