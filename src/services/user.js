module.exports = {
  sendHelloService: (username) => {
    return {
      message: username ? `Hello ${username}` : "Hello, anonymous user",
    };
  },

  fakeLoginService: () => {
    return {
      message: "You are logged in",
      cookies: {
        "session-id": "this is a mock session.",
      },
    };
  },
};
