using ascentia_crud.Bussiness;
using ascentia_crud.Model;
using ascentia_crud.Providers;

var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration;
// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.Configure<DataverseConfig>(config.GetSection(nameof(DataverseConfig)));
builder.Services.AddSingleton<IDataverseProvider, DataverseProvider>();
builder.Services.AddTransient<IReservationDetailManager,ReservationDetailManager>();
builder.Services.Configure<DataverseConfig>(builder.Configuration.GetSection("PowerPlatformConfig"));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthorization();
AddBusinessManagers(builder.Services);
void AddBusinessManagers(IServiceCollection services)
{

   
}
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
