namespace Mallos.Insight.Sample
{
    class Program
    {
        static void Main(string[] args)
        {
            var serverConfig = new Mallos.Insight.AppConfiguration();
            var server = new Mallos.Insight.Server(serverConfig);
            server.Start(address: "localhost", port: 5001);

            // var monster = new Monster();
            // server.Register(monster);
        }
    }
}
