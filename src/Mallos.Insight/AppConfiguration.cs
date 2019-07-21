namespace Mallos.Insight
{
    public enum LogLevel
    {
    }

    public class Logging
    {
        public LogLevel LogLevel { get; set; }
    }

    public class AppConfiguration : IAppConfiguration
    {
        public Logging Logging { get; set; }
    }
}