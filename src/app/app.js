const { getRoutes } = require("./launch-util");
const { sendPostHandler } = require("../middleware/posthandlers/send");
const { errorsPostHandler } = require("../middleware/posthandlers/errors");
const { cookiesPostHandler } = require("../middleware/posthandlers/cookies");
// const { errorsPostHandler } = require("./posthandlers/errors");
// const { sendHelloController } = require("../controllers/user");

class App {
  #app;
  routes;

  constructor() {
    this.#app = require("express")();
    this.applyPreHandlers();
    this.applyRoutes();
    this.applyPostHandlers();
    this.run();
  }

  applyPreHandlers() {
    this.#app.use(require("helmet")());
    this.#app.use(require("hpp")());
  }

  applyRoutes() {
    this.#app.use(getRoutes()); // all routes are applied here
    this.routes = getRoutes();
    this.#app.use(this.routes);
  }

  applyPostHandlers() {
    this.#app.use(sendPostHandler);
    this.#app.use(errorsPostHandler);
    this.#app.use(cookiesPostHandler);
  }

  run() {
    this.#app.listen(8000, () => {});
  }
}

module.exports = App;
