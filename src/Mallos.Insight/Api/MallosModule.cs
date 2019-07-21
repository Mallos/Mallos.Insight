namespace Mallos.Insight.Api
{
    using global::Nancy;

    class MallosModule : NancyModule
    {
        public MallosModule(IAppConfiguration appConfig)
        {
            Post("/api", PostInformation);
            Post("/api/version", PostInformation);
        }

        private object PostInformation(dynamic args)
        {
            return new
            {
                Name="Mallos.Insight",
                Version=GetType().Assembly.GetName().Version.ToString(),
            };
        }
    }
}
