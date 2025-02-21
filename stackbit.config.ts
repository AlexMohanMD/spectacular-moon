import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          // Define the model as a page model
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]]})],
    "postInstallCommand": "npm i --no-save @stackbit/types"
})
