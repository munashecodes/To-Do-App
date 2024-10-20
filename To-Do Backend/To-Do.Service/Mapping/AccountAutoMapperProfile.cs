using AutoMapper;
using To_Do.Service.Dtos;
using ToDoApp.Data.Entity_Models;
using ToDoApp.Service.Dtos;

namespace ToDoApp.Service.Mapping
{
    public class AccountAutoMapperProfile : Profile
    {
        public AccountAutoMapperProfile()
        {
            CreateMap<CreateAccountDto, Account>();
            CreateMap<Account, AuthenticationResponseDto>();
        }
    }
}
