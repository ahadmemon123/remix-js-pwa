/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */

module.exports = {
  serverBuildTarget: "vercel",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
};
