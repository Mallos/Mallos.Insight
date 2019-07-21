namespace Mallos.Insight
{
    using System.IO;
    using Mallos.Insight.Nancy;
    using Microsoft.AspNetCore.Hosting;

    public class Server : IServer
    {
        public Server(AppConfiguration configuration)
        {

        }

        public void Start(string address = "localhost", int port = 5001)
        {
            var uri = $"http://{address}:{port}/";

            var host = new WebHostBuilder()
                .UseUrls(uri)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
