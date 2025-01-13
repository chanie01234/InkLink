import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
        basename: "/",
        buildDirectory: "build",
        future: {
            v3_fetcherPersist: true,
            v3_relativeSplatPath: true,
            v3_throwAbortReason: true,
            v3_singleFetch: true,
            v3_lazyRouteDiscovery: true,
        },
        ignoredRouteFiles: ["**/*.css"],
/*        routes(defineRoutes) {
            return defineRoutes((route) => {
                route("/", "_index.tsx", { index: true });
                route("about", "about.tsx");
                route("artist", "artist.tsx", () => {
                    route("", "artist/$userid.tsx", { index: true });
                    route(":userid/following", "artist.$userid.following.tsx");
                    route(":userid/followers", "artist.$userid.followers.tsx");
                    route(":userid/tagged", "artist.$userid.tagged.tsx");
                    route(":userid/saved", "artist.$userid.saved.tsx");
                });
            });
        },*/
        serverBuildFile: "index.js",
    }),
    tsconfigPaths(),
  ],
});
