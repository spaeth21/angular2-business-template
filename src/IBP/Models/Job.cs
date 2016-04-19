using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using IBP.Core;

namespace IBP.Models
{
    public class Job : EntityBase
    {
        public int JobId { get; set; }
        [MaxLength(300)]
        [Required]
        public string Name { get; set; }
        [MaxLength(300)]
        [Required]
        public string Address { get; set; }
        [MaxLength(300)]
        [Required]
        public string City { get; set; }
        [MaxLength(50)]
        [Required]
        public string State { get; set; }
        [MaxLength(15)]
        [Required]
        public string Zip { get; set; }
        public int YearBuilt { get; set; }
        [MaxLength(2500)]
        public string JobNotes { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public int CreatedBy { get; set; }
        public int ModifiedBy { get; set; }
    }
}
