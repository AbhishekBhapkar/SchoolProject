using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo2.Model
{
    public class ServiceResponse<T>
    {
        public T? Data { get; set; }
       // public bool Success { get; set; } = true;
        //public string Message { get; set; } = string.Empty;
    }
}