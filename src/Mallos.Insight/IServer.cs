namespace Mallos.Insight
{
    public interface IServer
    {
        void Start(string address = "localhost", int port = 5001);
    }
}
