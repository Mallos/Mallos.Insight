namespace Mallos.Insight.Nancy
{
    using System.Collections.Generic;
    using System.IO;
    using global::Nancy;

    // FIXME: use Nancy.Responses.Negotiation instead
    static class ResponseHelper
    {
        private static readonly Dictionary<string, string> ContentTypes = new Dictionary<string, string>()
        {
            { "html", "text/html; charset=utf-8" },
            { "txt", "text/plain" },

            // Assets
            { "xml", "application/xml" },
            { "json", "application/json" },
            { "pdf", "application/pdf" },
            { "ttf", "font/ttf" },

            // Images
            { "jpg", "image/jpeg" },
            { "jpeg", "image/jpeg" },
            { "png", "image/png" },
            { "ico", "image/vnd.microsoft.icon" },

            // JavaScript
            { "js", "text/javascript" },
        };

        public static Response FromFile(string filename, string content)
        {
            var filenameSplit = filename.Split('.');
            var filenameExtension = filenameSplit[filenameSplit.Length - 1].ToLower();

            if (!ContentTypes.ContainsKey(filenameExtension))
            {
                return Response.NoBody;
            }

            return CreateSimple(ContentTypes[filenameExtension], content);
        }

        private static Response CreateSimple(string contentType, string contents)
        {
            return new Response()
            {
                StatusCode = HttpStatusCode.OK,
                ContentType = contentType,
                Contents = stream => AppendStream(ref stream, contents),
                Headers = new Dictionary<string, string>()
            };
        }

        private static void AppendStream(ref Stream stream, string s)
        {
            var writer = new StreamWriter(stream);
            writer.Write(s);
            writer.Flush();
        }
    }
}
