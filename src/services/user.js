module.exports = {
  sendHelloService: (username) => {
    return {
      message: username ? `Hello ${username}` : "Hello, you anonymous user",
    };
  },
};
