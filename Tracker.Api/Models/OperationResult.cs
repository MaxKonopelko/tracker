using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Api.Models
{
    public class OperationResult<T>
    {
        public bool Success { get; set; }
        public T Object { get; set; }
        public string Message { get; set; }

        public OperationResult()
        {
            Success = true;
        }
    }
}