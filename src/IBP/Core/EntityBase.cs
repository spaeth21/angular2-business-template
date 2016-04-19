using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IBP.Core
{
    public abstract class EntityBase : IEntityBase
    {
        public string __RequestVerificationToken { get; set; }

    }
}
