const UserService = require("../services/user");

module.exports = {
  sendHelloController: (req, res, next) => {
    const { username } = req.query;
    const message = UserService.sendHelloService(username);
    return res.json({
      message,
    });
  },
};
