import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";


export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "postInstallCommand": "npm i --no-save @stackbit/types",
contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          // Static URL path derived from the "slug" field
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]
        },
        // ...
      ],
    })
  ],
   modelExtensions: [
    { name: "page", type: "page", urlPath: "/{slug}" },
    { name: "post", type: "page", urlPath: "/blog/{slug}" }
  ]
});
