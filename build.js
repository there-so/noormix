// const envFilePlugin = require("esbuild-envfile-plugin")

require("esbuild")
  .build({
    entryPoints: ["app/index.ts"],
    bundle: true,
    platform: "node",
    external: ["dotenv"],
    outfile: "build/index.js",
    watch: process.env.NODE_ENV === "development",
  })
  .catch(() => process.exit(1))
