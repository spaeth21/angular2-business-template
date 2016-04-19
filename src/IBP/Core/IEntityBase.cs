using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IBP.Core
{
    public interface IEntityBase
    {
        string __RequestVerificationToken { get; set; }
    }
}
