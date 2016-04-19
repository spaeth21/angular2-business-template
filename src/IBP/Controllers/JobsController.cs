using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/Jobs")]
    public class JobsController : Controller
    {
        private ApplicationDbContext _context;

        public JobsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Jobs
        [HttpGet]
        public IEnumerable<Job> GetJob()
        {
            return _context.Job;
        }

        // GET: api/Jobs/5
        [HttpGet("{id}", Name = "GetJob")]
        public IActionResult GetJob([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Job job = _context.Job.Single(m => m.JobId == id);

            if (job == null)
            {
                return HttpNotFound();
            }

            return Ok(job);
        }

        // PUT: api/Jobs/5
        [HttpPut("{id}")]
        public IActionResult PutJob(int id, [FromBody] Job job)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != job.JobId)
            {
                return HttpBadRequest();
            }

            _context.Entry(job).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobExists(id))
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

        // POST: api/Jobs
        [HttpPost]
        public IActionResult PostJob([FromBody] Job job)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.Job.Add(job);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (JobExists(job.JobId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetJob", new { id = job.JobId }, job);
        }

        // DELETE: api/Jobs/5
        [HttpDelete("{id}")]
        public IActionResult DeleteJob(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Job job = _context.Job.Single(m => m.JobId == id);
            if (job == null)
            {
                return HttpNotFound();
            }

            _context.Job.Remove(job);
            _context.SaveChanges();

            return Ok(job);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobExists(int id)
        {
            return _context.Job.Count(e => e.JobId == id) > 0;
        }
    }
}