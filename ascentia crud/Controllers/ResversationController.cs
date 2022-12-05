using ascentia_crud.Bussiness;
using ascentia_crud.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ascentia_crud.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class ResversationController : ControllerBase
    {

        readonly IReservationDetailManager reservationManager;

        public ResversationController(IReservationDetailManager reservationManager)
        {
            this.reservationManager = reservationManager;

        }

        //// GET: api/<ResversationController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<ResversationController>/5
        [HttpGet("{id}")]
        public async Task<RDetails> GetByIdAsync([FromRoute] Guid id)
        {
            return await this.reservationManager.GetByIdAsync(id);
        }

        //getAll data
        [HttpGet]
        public async Task<List<RDetails>> GetListAsync() => await this.reservationManager.GetListAsync();

        // POST api/<ResversationController>
        [HttpPut("updateReq")]
        public async Task UpdateAsync([FromBody] RDetails detail) => await this.reservationManager.UpdateAsync(detail);

        [HttpDelete("{id}")]
        public async Task Deleteasync([FromRoute] Guid id) => await this.reservationManager.DeleteAsync(id);

        [HttpPost("AddNewDetail")]
        public async Task<RDetails> CreateAsync([FromBody] RDetails detail)
        {

            return await this.reservationManager.CreateAsync(detail);
        }
    }
}
