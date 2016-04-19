using IBP.Models;
using IBP.Services;
using Microsoft.AspNet.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace IBP.Tests
{

    public class ServiceTests
    {
        //private readonly UserManager<ApplicationUser> _userManager = new UserManager<ApplicationUser>();
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;


        [Fact]
        public void CanInstanceSigninService()
        {
            //var signinService = new SignInService()
        }
    }
}
