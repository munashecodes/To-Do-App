
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;
using To_Do.Service.Authentication;
using To_Do.Service.Helpers;
using ToDoApp.Data.DbContexts;
using ToDoApp.Service.Helpers;
using ToDoApp.Service.Services;

namespace ToDoApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.AddDbContext<ToDoDbContext>(options => options.UseSqlServer(connectionString, o => o.UseCompatibilityLevel(120)));

          
            // Add services to the container.
            builder.Services.AddCors();
            builder.Services.AddControllers().AddJsonOptions(jsonOptions =>
            {
                jsonOptions.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });
            #region App Services
            builder.Services.AddTransient<ITaskItemService, TaskItemService>();
            builder.Services.AddTransient<IAccountService, AccountService>();


            #endregion

            #region Auth Services
            builder.Services.AddScoped<IJwtUtilities, JwtUtilities>();
            builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            #endregion

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors(x => x
                .SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseMiddleware<ErrorMiddleware>();
            app.UseMiddleware<JwtMiddleware>();

            app.UseAuthentication();
            app.UseAuthorization();



            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
