const { getRoutes } = require("./launch-util");

class App {
  #app;
  routes;

  constructor() {
    this.#app = require("express")();
    this.applyPreHandlers();
    this.applyRoutes();
  }

  applyPreHandlers() {
    this.#app.use(require("helmet"));
    this.#app.use(require("hpp"));
  }

  applyRoutes() {
    this.#app.use(getRoutes()); // all routes are applied here

    this.routes = getRoutes();
    console.log(this.routes);
    this.#app.use(this.routes);
  }

  applyPostHandlers() {}
}

module.exports = App;
