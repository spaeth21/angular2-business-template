using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IBP.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public byte CustomerTypeId { get; set; }
        [MaxLength(400)]
        [Required]
        public string FirstName { get; set; }
        [MaxLength(400)]
        [Required]
        public string LastName { get; set; }
        public string Address { get; set; }
        [MaxLength(400)]
        [Required]
        public string City { get; set; }
        [MaxLength(80)]
        [Required]
        public string State { get; set; }
        [MaxLength(15)]
        [Required]
        public string ZipCode { get; set; }
        public string BillingAddress { get; set; }
        [MaxLength(400)]
        [Required]
        public string BillingCity { get; set; }
        [MaxLength(80)]
        [Required]
        public string BillingState { get; set; }
        [MaxLength(15)]
        [Required]
        public string BillingZipCode { get; set; }
        public int SalesPersonId { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public int CreatedBy { get; set; }
        public int ModifiedBy { get; set; }
    }
}
