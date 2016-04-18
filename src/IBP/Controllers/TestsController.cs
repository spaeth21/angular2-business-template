using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using IBP.Models;

namespace IBP.Controllers
{
    [Produces("application/json")]
    [Route("api/Tests")]
    public class TestsController : Controller
    {
        private ApplicationDbContext _context;

        public TestsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Tests
        [HttpGet]
        public IEnumerable<Test> GetTest()
        {
            return _context.Test;
        }

        // GET: api/Tests/5
        [HttpGet("{id}", Name = "GetTest")]
        public IActionResult GetTest([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Test test = _context.Test.Single(m => m.TestId == id);

            if (test == null)
            {
                return HttpNotFound();
            }

            return Ok(test);
        }

        // PUT: api/Tests/5
        [HttpPut("{id}")]
        public IActionResult PutTest(int id, [FromBody] Test test)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != test.TestId)
            {
                return HttpBadRequest();
            }

            _context.Entry(test).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestExists(id))
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

        // POST: api/Tests
        [HttpPost]
        public IActionResult PostTest([FromBody]Test test)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.Test.Add(test);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (TestExists(test.TestId))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetTest", new { id = test.TestId }, test);
        }

        // DELETE: api/Tests/5
        [HttpDelete("{id}")]
        public IActionResult DeleteTest(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Test test = _context.Test.Single(m => m.TestId == id);
            if (test == null)
            {
                return HttpNotFound();
            }

            _context.Test.Remove(test);
            _context.SaveChanges();

            return Ok(test);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TestExists(int id)
        {
            return _context.Test.Count(e => e.TestId == id) > 0;
        }
    }
}