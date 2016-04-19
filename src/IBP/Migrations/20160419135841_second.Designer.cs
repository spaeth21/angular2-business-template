using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using IBP.Models;

namespace IBP.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20160419135841_second")]
    partial class second
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("IBP.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id");

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("AntiForgeryToken");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<string>("NormalizedUserName")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasAnnotation("MaxLength", 256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasAnnotation("Relational:Name", "EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .HasAnnotation("Relational:Name", "UserNameIndex");

                    b.HasAnnotation("Relational:TableName", "AspNetUsers");
                });

            modelBuilder.Entity("IBP.Models.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.HasKey("CompanyId");
                });

            modelBuilder.Entity("IBP.Models.ContactType", b =>
                {
                    b.Property<int>("ContactTypeId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.HasKey("ContactTypeId");
                });

            modelBuilder.Entity("IBP.Models.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("BillingAddress");

                    b.Property<string>("BillingCity")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 400);

                    b.Property<string>("BillingState")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 80);

                    b.Property<string>("BillingZipCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 15);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 400);

                    b.Property<int>("CompanyId");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<byte>("CustomerTypeId");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 400);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 400);

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<int>("SalesPersonId");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 80);

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 15);

                    b.HasKey("CustomerId");
                });

            modelBuilder.Entity("IBP.Models.CustomerContact", b =>
                {
                    b.Property<int>("CustomerContactId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("CustomerId");

                    b.Property<bool>("DefaultContact");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 300);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 300);

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.HasKey("CustomerContactId");
                });

            modelBuilder.Entity("IBP.Models.Job", b =>
                {
                    b.Property<int>("JobId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 300);

                    b.Property<string>("AntiForgeryToken");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 300);

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("JobNotes")
                        .HasAnnotation("MaxLength", 2500);

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 300);

                    b.Property<string>("State")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.Property<int>("YearBuilt");

                    b.Property<string>("Zip")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 15);

                    b.HasKey("JobId");
                });

            modelBuilder.Entity("IBP.Models.JobContactType", b =>
                {
                    b.Property<int>("JobContactTypeId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ContactTypeId");

                    b.Property<int>("JobContactId");

                    b.Property<string>("Value")
                        .IsRequired();

                    b.HasKey("JobContactTypeId");
                });

            modelBuilder.Entity("IBP.Models.SalesPerson", b =>
                {
                    b.Property<int>("SalesPersonId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<string>("LastName")
                        .IsRequired();

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Phone");

                    b.HasKey("SalesPersonId");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityRole", b =>
                {
                    b.Property<string>("Id");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<string>("NormalizedName")
                        .HasAnnotation("MaxLength", 256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .HasAnnotation("Relational:Name", "RoleNameIndex");

                    b.HasAnnotation("Relational:TableName", "AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasAnnotation("Relational:TableName", "AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasAnnotation("Relational:TableName", "AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasAnnotation("Relational:TableName", "AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasAnnotation("Relational:TableName", "AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNet.Identity.EntityFramework.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("IBP.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("IBP.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNet.Identity.EntityFramework.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId");

                    b.HasOne("IBP.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId");
                });
        }
    }
}
