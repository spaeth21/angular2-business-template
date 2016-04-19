using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IBP.Models
{
    public class JobContactType
    {
        public int JobContactTypeId { get; set; }
        public int JobContactId { get; set; }
        [Required]
        public int ContactTypeId { get; set; }
        [Required]
        public string Value { get; set; }
    }
}
