const UserController = require("../controllers/user");

module.exports = {
  sendHelloRoute: {
    method: "get",
    path: "/hello",
    middleware: [
      (req, res, next) => UserController.sendHelloController(req, res, next),
    ],
  },

  fakeLoginRoute: {
    method: "post",
    path: "/login",
    middleware: [
      (req, res, next) => UserController.fakeLoginController(req, res, next),
    ],
  },
};
