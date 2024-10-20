using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApp.Service.Shared;

namespace To_Do.Service.Dtos
{
    public class AuthenticationResponseDto : EntityDto<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string JwtToken { get; set; }
    }
}
