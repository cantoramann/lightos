const path = require("path");

exports.getRoutes = () => {
  const router = require("express").Router();

  // path to the routes/ directory
  const normalizedPaths = path.join(__dirname, "../routes");

  require("fs")
    .readdirSync(normalizedPaths)
    .forEach((filename) => {
      // no check needed to see if there is index.js

      filename = filename.replace(".js", "");
      const routeFile = require(path.join(__dirname, "../routes", filename));
      for (const [_, route] of Object.entries(routeFile)) {
        // value itself is the route
        const middleware = route.middleware || [];
        router[route.method](`${route.path}`, middleware);
      }
    });

  return router;
};
