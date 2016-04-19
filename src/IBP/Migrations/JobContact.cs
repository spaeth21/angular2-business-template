using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IBP.Migrations
{
    public class JobContact
    {
        public int JobContactId { get; set; }
        public int JobId { get; set; }
        [MaxLength(300)]
        [Required]
        public string FirstName { get; set; }
        [MaxLength(300)]
        [Required]
        public string LastName { get; set; }
        public bool DefaultContact { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public int CreatedBy { get; set; }
        public int ModifiedBy { get; set; }


    }
}
