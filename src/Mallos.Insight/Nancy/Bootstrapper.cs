namespace Mallos.Insight.Nancy
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using global::Nancy;
    using global::Nancy.Bootstrapper;
    using global::Nancy.Conventions;
    using global::Nancy.TinyIoc;

    class Bootstrapper : DefaultNancyBootstrapper
    {
        private readonly IAppConfiguration appConfig;
        private readonly EmbeddedResourceReader embeddedResourceReader;

        public Bootstrapper(IAppConfiguration appConfig)
        {
            this.appConfig = appConfig;
            this.embeddedResourceReader = new EmbeddedResourceReader(Assembly.GetExecutingAssembly());
        }

        protected override IEnumerable<ModuleRegistration> Modules
        {
            get
            {
                return base.Modules.Concat(new[]
                {
                    // Register our API Controllers manually
                    new ModuleRegistration(typeof(Api.MallosModule))
                });
            }
        }

        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);
            container.Register(appConfig);
        }

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);

            conventions.StaticContentsConventions.Add((context, rootPath) =>
            {
                // '/api' is resereved for API calls only.
                if (context.Request.Path.StartsWith("/api"))
                {
                    return null;
                }

                var filename = ScopeRequestedFilename(context.Request.Path);
                if (!embeddedResourceReader.Exist(filename))
                {
                    filename = "Mallos.Insight.Content.app.html";
                }

                // return the requested embedded file.
                var filedata = embeddedResourceReader.ReadFile(filename);
                return ResponseHelper.FromFile(filename, filedata);
            });
        }

        private string ScopeRequestedFilename(string path)
        {
            if (path == "/")
            {
                // Redirect to index
                return "Mallos.Insight.Content.app.html";
            }

            return $"Mallos.Insight.Content{path.Replace('/', '.')}";
        }
    }
}