using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System.Collections;
using Microsoft.AspNet.Mvc;
using System.Threading;
using Microsoft.AspNet.Antiforgery;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Primitives;

namespace IBP
{
    public class AntiForgeryValidate : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            string cookieToken = "";
            string formToken = "";

            string[] tokenHeaders;
            tokenHeaders = context.HttpContext.Request.Headers["__RequestVerificationToken"];
                string[] tokens = tokenHeaders.First().Split(':');
       
                    cookieToken = tokens[0].Trim();
                    formToken = tokens[0].Trim();

            var token = new Microsoft.AspNet.Antiforgery.AntiforgeryOptions();

            base.OnActionExecuting(context);
        }
    }
}
