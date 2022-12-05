namespace ascentia_crud.Providers
{
    using Microsoft.PowerPlatform.Dataverse.Client;

    public interface IDataverseProvider
    {
        ServiceClient GetServiceClient();
    }
}