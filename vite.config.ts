// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { resolve } from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
//   resolve: {
//     // preserveSymlinks: true,
//     extensions: [".ts", ".tsx", ".json", ".mjs", ".js", ".jsx"],
//     alias: [
//       {
//         find: /^(components|pages|configs|static|hooks|utils|games)/,
//         replacement: resolve(__dirname, "./src/$1"),
//       },
//     ],
//   },
// });

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, UserConfigExport } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const config: UserConfigExport = {
    plugins: [react()],
    build: {
      sourcemap: mode === "production",
      chunkSizeWarningLimit: 1024,
    },
    resolve: {
      // preserveSymlinks: true,
      extensions: [".ts", ".tsx", ".json", ".mjs", ".js", ".jsx"],
      alias: [
        {
          find: /^(components|pages|configs|static|hooks|utils|games)/,
          replacement: resolve(__dirname, "./src/$1"),
        },
      ],
    },
    server: {
      port: 3000,
    },
  };

  return defineConfig(config);
};
