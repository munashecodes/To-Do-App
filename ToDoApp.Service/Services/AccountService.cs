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

        public Task<ServiceResponse<bool>> Authenticate(CreateAccountDto accountDto, Account account)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<bool>> Create(CreateAccountDto accountDto, Account account)
        {
            try
            {
                //map dto to model
                var newAccount = _mapper.Map<Account>(accountDto);

                //prepare for create
                newAccount.PrepareEntityForCreate(account);

                //add and save
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
