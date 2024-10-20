using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace To_Do.Service.Helpers
{
    public class AppErrors : Exception
    {
            public AppErrors() : base() { }

            public AppErrors(string message) : base(message) { }

            public AppErrors(string message, params object[] args)
                : base(string.Format(message, args)) { }
       
    }
}
