using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BikeDoctorApp.Models;

namespace BikeDoctorApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceCentresController : ControllerBase
    {
        private readonly BikedoctorContext _context;

        public ServiceCentresController(BikedoctorContext context)
        {
            _context = context;
        }

        // GET: api/ServiceCentres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceCentre>>> GetServiceCentres()
        {
          if (_context.ServiceCentres == null)
          {
              return NotFound();
          }
            return await _context.ServiceCentres.ToListAsync();
        }

        // GET: api/ServiceCentres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceCentre>> GetServiceCentre(int id)
        {
          if (_context.ServiceCentres == null)
          {
              return NotFound();
          }
            var serviceCentre = await _context.ServiceCentres.FindAsync(id);

            if (serviceCentre == null)
            {
                return NotFound();
            }

            return serviceCentre;
        }

        // PUT: api/ServiceCentres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServiceCentre(int id, ServiceCentre serviceCentre)
        {
            if (id != serviceCentre.Id)
            {
                return BadRequest();
            }

            _context.Entry(serviceCentre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceCentreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ServiceCentres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServiceCentre>> PostServiceCentre(ServiceCentre serviceCentre)
        {
          if (_context.ServiceCentres == null)
          {
              return Problem("Entity set 'BikedoctorContext.ServiceCentres'  is null.");
          }
            _context.ServiceCentres.Add(serviceCentre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServiceCentre", new { id = serviceCentre.Id }, serviceCentre);
        }

        // DELETE: api/ServiceCentres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServiceCentre(int id)
        {
            if (_context.ServiceCentres == null)
            {
                return NotFound();
            }
            var serviceCentre = await _context.ServiceCentres.FindAsync(id);
            if (serviceCentre == null)
            {
                return NotFound();
            }

            _context.ServiceCentres.Remove(serviceCentre);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServiceCentreExists(int id)
        {
            return (_context.ServiceCentres?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
