const UserService = require("../services/user");

module.exports = {
  sendHelloController: (req, res, next) => {
    const { username } = req.query;
    const message = UserService.sendHelloService(username);

    res.data = message;
    next();
  },

  fakeLoginController: (req, res, next) => {
    const message = UserService.fakeLoginService();

    res.data = message;
    next();
  },
};
