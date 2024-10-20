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
using To_Do.Service.Dtos;
using To_Do.Service.Helpers;
using ToDoApp.Service.Helpers;

namespace ToDoApp.Service.Services
{
    public class AccountService : IAccountService
    {
        private readonly ToDoDbContext _context;
        private readonly IMapper _mapper;
        private readonly IJwtUtilities _jwtUtilities;

        public AccountService(
            ToDoDbContext context,
            IMapper mapper,
            IJwtUtilities jwtUtilities)
        {
            _context = context;
            _mapper = mapper;
            _jwtUtilities = jwtUtilities;
        }

        public async Task<ServiceResponse<AuthenticationResponseDto>> Authenticate(AuthenticationRequestDto accountDto)
        {
            try
            {
                //check for email
                var account = await _context.Accounts.FirstOrDefaultAsync(a => a.Email == accountDto.Email);
                if (account != null)
                {
                    //verify password
                    var verification = BCrypt.Net.BCrypt.Verify(accountDto.Password, account.Password);

                    if (verification)
                    {
                        var jwtToken = _jwtUtilities.GenerateJwtToken(account);
                        var response = _mapper.Map<AuthenticationResponseDto>(account);
                        response.JwtToken = jwtToken;
                        return new ServiceResponse<AuthenticationResponseDto>(response, "Authentication successful");
                    }
                    else
                    {
                        return new ServiceResponse<AuthenticationResponseDto>(null, "Incorrect email/password");
                    }
                }
                else
                {
                    return new ServiceResponse<AuthenticationResponseDto>(null, "Email doesn't exist");

                }

            }
            catch(Exception ex)
            {
                throw new AppErrors("eror authenticating user: " + ex.Message);

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
