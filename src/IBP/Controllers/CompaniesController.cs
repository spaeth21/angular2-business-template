using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompaniesController : Controller
    {
        private ApplicationDbContext _context;

        public CompaniesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Companies
        [HttpGet]
        public IEnumerable<Company> GetCompany()
        {
            return _context.Company;
        }

        // GET: api/Companies/5
        [HttpGet("{id}", Name = "GetCompany")]
        public IActionResult GetCompany([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Company company = _context.Company.Single(m => m.CompanyId == id);

            if (company == null)
            {
                return HttpNotFound();
            }

            return Ok(company);
        }

        // PUT: api/Companies/5
        [HttpPut("{id}")]
        public IActionResult PutCompany(int id, [FromBody] Company company)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != company.CompanyId)
            {
                return HttpBadRequest();
            }

            _context.Entry(company).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(id))
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

        // POST: api/Companies
        [HttpPost]
        public IActionResult PostCompany([FromBody] Company company)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.Company.Add(company);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CompanyExists(company.CompanyId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetCompany", new { id = company.CompanyId }, company);
        }

        // DELETE: api/Companies/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCompany(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Company company = _context.Company.Single(m => m.CompanyId == id);
            if (company == null)
            {
                return HttpNotFound();
            }

            _context.Company.Remove(company);
            _context.SaveChanges();

            return Ok(company);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CompanyExists(int id)
        {
            return _context.Company.Count(e => e.CompanyId == id) > 0;
        }
    }
}