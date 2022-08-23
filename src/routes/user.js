const UserController = require("../controllers/user");

module.exports = {
  sendHelloRoute: {
    method: "get",
    path: "/hello",
    middleware: [
      (req, res, next) => UserController.sendHelloController(req, res, next),
    ],
  },
};
