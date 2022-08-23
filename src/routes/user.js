module.exports = {
  createGuideRoute: {
    method: "post",
    path: "/guides/new",
    middleware: [
      (req, res, next) => {
        next();
      },
    ],
  },
};
