using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/CustomerContacts")]
    public class CustomerContactsController : Controller
    {
        private ApplicationDbContext _context;

        public CustomerContactsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CustomerContacts
        [HttpGet]
        public IEnumerable<CustomerContact> GetCustomerContact()
        {
            return _context.CustomerContact;
        }

        // GET: api/CustomerContacts/5
        [HttpGet("{id}", Name = "GetCustomerContact")]
        public IActionResult GetCustomerContact([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            CustomerContact customerContact = _context.CustomerContact.Single(m => m.CustomerContactId == id);

            if (customerContact == null)
            {
                return HttpNotFound();
            }

            return Ok(customerContact);
        }

        // PUT: api/CustomerContacts/5
        [HttpPut("{id}")]
        public IActionResult PutCustomerContact(int id, [FromBody] CustomerContact customerContact)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != customerContact.CustomerContactId)
            {
                return HttpBadRequest();
            }

            _context.Entry(customerContact).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerContactExists(id))
                {
                    return HttpNotFound();
                }
                else
                {
                    throw;
                }
            }

            return new HttpStatusCodeResult(StatusCodes.Status204NoContent);
        }

        // POST: api/CustomerContacts
        [HttpPost]
        public IActionResult PostCustomerContact([FromBody] CustomerContact customerContact)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.CustomerContact.Add(customerContact);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CustomerContactExists(customerContact.CustomerContactId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetCustomerContact", new { id = customerContact.CustomerContactId }, customerContact);
        }

        // DELETE: api/CustomerContacts/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCustomerContact(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            CustomerContact customerContact = _context.CustomerContact.Single(m => m.CustomerContactId == id);
            if (customerContact == null)
            {
                return HttpNotFound();
            }

            _context.CustomerContact.Remove(customerContact);
            _context.SaveChanges();

            return Ok(customerContact);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerContactExists(int id)
        {
            return _context.CustomerContact.Count(e => e.CustomerContactId == id) > 0;
        }
    }
}