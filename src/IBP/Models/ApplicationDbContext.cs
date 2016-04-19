using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
        public DbSet<Company> Company { get; set; }
        public DbSet<ContactType> ContactType { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<CustomerContact> CustomerContact { get; set; }
        public DbSet<Job> Job { get; set; }
        public DbSet<JobContactType> JobContactType { get; set; }
        public DbSet<SalesPerson> SalesPerson { get; set; }

    }
}
