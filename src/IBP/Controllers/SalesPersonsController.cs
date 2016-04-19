using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/SalesPersons")]
    public class SalesPersonsController : Controller
    {
        private ApplicationDbContext _context;

        public SalesPersonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SalesPersons
        [HttpGet]
        public IEnumerable<SalesPerson> GetSalesPerson()
        {
            return _context.SalesPerson;
        }

        // GET: api/SalesPersons/5
        [HttpGet("{id}", Name = "GetSalesPerson")]
        public IActionResult GetSalesPerson([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            SalesPerson salesPerson = _context.SalesPerson.Single(m => m.SalesPersonId == id);

            if (salesPerson == null)
            {
                return HttpNotFound();
            }

            return Ok(salesPerson);
        }

        // PUT: api/SalesPersons/5
        [HttpPut("{id}")]
        public IActionResult PutSalesPerson(int id, [FromBody] SalesPerson salesPerson)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != salesPerson.SalesPersonId)
            {
                return HttpBadRequest();
            }

            _context.Entry(salesPerson).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesPersonExists(id))
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

        // POST: api/SalesPersons
        [HttpPost]
        public IActionResult PostSalesPerson([FromBody] SalesPerson salesPerson)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.SalesPerson.Add(salesPerson);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (SalesPersonExists(salesPerson.SalesPersonId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetSalesPerson", new { id = salesPerson.SalesPersonId }, salesPerson);
        }

        // DELETE: api/SalesPersons/5
        [HttpDelete("{id}")]
        public IActionResult DeleteSalesPerson(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            SalesPerson salesPerson = _context.SalesPerson.Single(m => m.SalesPersonId == id);
            if (salesPerson == null)
            {
                return HttpNotFound();
            }

            _context.SalesPerson.Remove(salesPerson);
            _context.SaveChanges();

            return Ok(salesPerson);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SalesPersonExists(int id)
        {
            return _context.SalesPerson.Count(e => e.SalesPersonId == id) > 0;
        }
    }
}