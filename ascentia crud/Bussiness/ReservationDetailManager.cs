using ascentia_crud.Model;
using ascentia_crud.Providers;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace ascentia_crud.Bussiness
{
    public class ReservationDetailManager : IReservationDetailManager
    {
        readonly ServiceClient client;
        readonly IDataverseProvider dataverseProvider;
        public ReservationDetailManager(IDataverseProvider dataverseProvider)
        {
            this.dataverseProvider = dataverseProvider;
            this.client = this.dataverseProvider.GetServiceClient();
        }


        private static RDetails MapToLead(Entity entity)
        {
            var result = new RDetails();

            result.Id = entity.GetAttributeValue<Guid>("cr297_reservationdetailsid");
            result.Name = entity.GetAttributeValue<string>("cr297_name");
            result.Email = entity.GetAttributeValue<string>("cr297_email");
            result.PhoneNumber = entity.GetAttributeValue<string>("cr297_phone");



            return result;
        }
        public async Task<RDetails> CreateAsync(RDetails detail)
        {

            var entity = new Entity("cr297_reservationdetails");
            // var bookAuthorLookup = entity.GetAttributeValue<EntityReference>("mgt_author");

            entity["cr297_name"] = detail.Name;
            entity["cr297_email"] = detail.Email;
            entity["cr297_phone"] = detail.PhoneNumber;


            detail.Id = await client.CreateAsync(entity);
            return detail;
        }

        public async Task DeleteAsync(Guid id)
        {
            await client.DeleteAsync("cr297_reservationdetails", id);
        }

        public async Task<RDetails> GetByIdAsync(Guid id)
        {
            var entity = await client.RetrieveAsync("cr297_reservationdetails", id, new ColumnSet(true));
            var record = MapToLead(entity);

            return record;
        }

        public async Task<List<RDetails>> GetListAsync()
        {
            var query = new QueryExpression
            {
                EntityName = "cr297_reservationdetails",
                ColumnSet = new ColumnSet(true),
               
            };

            var entityCollection = await client.RetrieveMultipleAsync(query);
            var list = entityCollection.Entities.Select(entity => MapToLead(entity)).ToList();
            return list;
        }

        public async Task UpdateAsync(RDetails detail)
        {
            Entity lookupvalue = new Entity("cr297_reservationdetails");


            lookupvalue["cr297_name"] = detail.Name;
            lookupvalue["cr297_email"] = detail.Email;
            lookupvalue["cr297_phone"] = detail.PhoneNumber;
           
            try
            {

                await client.UpdateAsync(lookupvalue);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
