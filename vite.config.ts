import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import react from "@vitejs/plugin-react";
import { Plugin } from "vite";

function canvasMapPlugin(): Plugin {
  let isBuild = false;

  return {
    name: "canvas-map-plugin",
    config(_, { command }) {
      isBuild = command === "build";
    },
    configureServer(server) {
      server.middlewares.use("/canvas-map", (req, res, next) => {
        const filePath = path.join(__dirname, "canvas-map", req.url ?? "");
        if (fs.existsSync(filePath)) {
          res.setHeader("Content-Type", "application/javascript");
          fs.createReadStream(filePath).pipe(res);
        } else {
          next();
        }
      });

      const canvasMapPath = path.join(__dirname, "canvas-map");
      server.watcher.add(canvasMapPath);
    },
    buildStart() {
      if (isBuild) {
        const canvasMapPath = path.resolve(__dirname, "canvas-map/index.js");
        this.emitFile({
          type: "chunk",
          id: canvasMapPath,
          fileName: "canvas-map.js",
        });
      }
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), canvasMapPlugin()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        canvasMap: path.resolve(__dirname, "canvas-map/index.js"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "canvasMap"
            ? "assets/canvas-map-[hash].js"
            : "assets/[name]-[hash].js";
        },
      },
    },
  },
});
