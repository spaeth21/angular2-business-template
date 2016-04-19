using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/ContactTypes")]
    public class ContactTypesController : Controller
    {
        private ApplicationDbContext _context;

        public ContactTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ContactTypes
        [HttpGet]
        public IEnumerable<ContactType> GetContactType()
        {
            return _context.ContactType;
        }

        // GET: api/ContactTypes/5
        [HttpGet("{id}", Name = "GetContactType")]
        public IActionResult GetContactType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            ContactType contactType = _context.ContactType.Single(m => m.ContactTypeId == id);

            if (contactType == null)
            {
                return HttpNotFound();
            }

            return Ok(contactType);
        }

        // PUT: api/ContactTypes/5
        [HttpPut("{id}")]
        public IActionResult PutContactType(int id, [FromBody] ContactType contactType)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != contactType.ContactTypeId)
            {
                return HttpBadRequest();
            }

            _context.Entry(contactType).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactTypeExists(id))
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

        // POST: api/ContactTypes
        [HttpPost]
        public IActionResult PostContactType([FromBody] ContactType contactType)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.ContactType.Add(contactType);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ContactTypeExists(contactType.ContactTypeId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetContactType", new { id = contactType.ContactTypeId }, contactType);
        }

        // DELETE: api/ContactTypes/5
        [HttpDelete("{id}")]
        public IActionResult DeleteContactType(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            ContactType contactType = _context.ContactType.Single(m => m.ContactTypeId == id);
            if (contactType == null)
            {
                return HttpNotFound();
            }

            _context.ContactType.Remove(contactType);
            _context.SaveChanges();

            return Ok(contactType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactTypeExists(int id)
        {
            return _context.ContactType.Count(e => e.ContactTypeId == id) > 0;
        }
    }
}