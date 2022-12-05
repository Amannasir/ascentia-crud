using ascentia_crud.Model;

namespace ascentia_crud.Bussiness
{
    public interface IReservationDetailManager
    {
        Task<RDetails> GetByIdAsync(Guid id);
        Task<List<RDetails>> GetListAsync();

        Task UpdateAsync(RDetails resDetails);
        Task DeleteAsync(Guid id);
        Task<RDetails> CreateAsync(RDetails resDetails);
    }
}
