exports.errorsPostHandler = (err, req, res) => {
  console.log("here");
  console.log("here");
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
};
