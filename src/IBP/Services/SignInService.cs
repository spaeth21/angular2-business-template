using IBP.Models;
using IBP.ViewModels.Account;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IBP.Services
{
    public class SignInService
    {
        public SignInService(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILoggerFactory loggerFactory)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<SignInService>();
        }

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        //private readonly IEmailSender _emailSender;
        //private readonly ISmsSender _smsSender;
        private readonly ILogger _logger;

        //public LoginViewModel GetUser(string userName)
        //{
        //    return userRepo.GetUser(userName);
        //}

        public async Task<SignInResult> Login(string email, string password, bool remeberMe = false, bool lockoutOnFailure = false)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, remeberMe, lockoutOnFailure: lockoutOnFailure);

            if (result.Succeeded)
                _logger.LogInformation(1, "User logged in.");

            //if (result.RequiresTwoFactor)
            //{
            //   Log two factor use.
            //}

            if (result.IsLockedOut)
                _logger.LogWarning(2, "User account locked out.");
            else
                _logger.LogError("Login error.");

            return result;
        }

        //public bool ValidatePassword(SimpleAuthUser authUser, string providedPassword)
        //{
        //    bool result = false;
        //    if (authUser.PasswordIsHashed)
        //    {
        //        var hashResult = passwordHasher.VerifyHashedPassword(authUser, authUser.Password, providedPassword);
        //        result = (hashResult == PasswordVerificationResult.Success);

        //    }
        //    else {
        //        result = authUser.Password == providedPassword;
        //    }

        //    return result;
        //}

        public ClaimsPrincipal GetClaimsPrincipal(ApplicationUser authUser)
        {
            var identity = new ClaimsIdentity("Forms");
            //identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, "1"));
            //identity.AddClaim(new Claim(ClaimTypes.Name, authUser.UserName));

            //foreach (SimpleAuthClaim c in authUser.Claims)
            //{
            //    if (c.ClaimType == "Role")
            //    {
            //        identity.AddClaim(new Claim(ClaimTypes.Role, c.ClaimValue));
            //    }
            //    else {
            //        identity.AddClaim(new Claim(c.ClaimType, c.ClaimValue));
            //    }
            //}

            var principal = new ClaimsPrincipal(identity);

            return principal;
        }

        public string HashPassword(string inputPassword)
        {
            //var fakeUser = new SimpleAuthUser();
            //return passwordHasher.HashPassword(fakeUser, inputPassword);
            return string.Empty;
        }
    }
}
