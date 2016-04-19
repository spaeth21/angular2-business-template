using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/JobContactTypes")]
    public class JobContactTypesController : Controller
    {
        private ApplicationDbContext _context;

        public JobContactTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/JobContactTypes
        [HttpGet]
        public IEnumerable<JobContactType> GetJobContactType()
        {
            return _context.JobContactType;
        }

        // GET: api/JobContactTypes/5
        [HttpGet("{id}", Name = "GetJobContactType")]
        public IActionResult GetJobContactType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            JobContactType jobContactType = _context.JobContactType.Single(m => m.JobContactTypeId == id);

            if (jobContactType == null)
            {
                return HttpNotFound();
            }

            return Ok(jobContactType);
        }

        // PUT: api/JobContactTypes/5
        [HttpPut("{id}")]
        public IActionResult PutJobContactType(int id, [FromBody] JobContactType jobContactType)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != jobContactType.JobContactTypeId)
            {
                return HttpBadRequest();
            }

            _context.Entry(jobContactType).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobContactTypeExists(id))
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

        // POST: api/JobContactTypes
        [HttpPost]
        public IActionResult PostJobContactType([FromBody] JobContactType jobContactType)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.JobContactType.Add(jobContactType);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (JobContactTypeExists(jobContactType.JobContactTypeId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetJobContactType", new { id = jobContactType.JobContactTypeId }, jobContactType);
        }

        // DELETE: api/JobContactTypes/5
        [HttpDelete("{id}")]
        public IActionResult DeleteJobContactType(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            JobContactType jobContactType = _context.JobContactType.Single(m => m.JobContactTypeId == id);
            if (jobContactType == null)
            {
                return HttpNotFound();
            }

            _context.JobContactType.Remove(jobContactType);
            _context.SaveChanges();

            return Ok(jobContactType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobContactTypeExists(int id)
        {
            return _context.JobContactType.Count(e => e.JobContactTypeId == id) > 0;
        }
    }
}