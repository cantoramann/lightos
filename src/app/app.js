const { getRoutes } = require("./launch-util");
const { sendPostHandler } = require("../middleware/posthandlers/send");
const { errorsPostHandler } = require("../middleware/posthandlers/errors");
const { cookiesPostHandler } = require("../middleware/posthandlers/cookies");
require("express-async-errors");
const express = require("express");

class App {
  #app;
  routes;

  constructor() {
    this.#app = express();
    this.applyPreHandlers();
    this.applyRoutes();
    this.applyPostHandlers();
    this.run();
  }

  applyPreHandlers() {
    this.#app.use(require("helmet")());
    this.#app.use(require("hpp")());
    this.#app.use(express.json());
  }

  applyRoutes() {
    this.#app.use(getRoutes()); // all routes are applied here
    this.routes = getRoutes();
    this.#app.use("/api", this.routes, cookiesPostHandler, sendPostHandler);
  }

  applyPostHandlers() {
    this.#app.use(errorsPostHandler);
  }

  run() {
    this.#app.listen(8000, () => {});
  }
}

module.exports = App;
