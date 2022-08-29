exports.errorsPostHandler = (err, req, res) => {
  // if (err instanceof GeneralError) {
  //   return res.status(err.getCode()).json({
  //     status: "error",
  //     message: err.message,
  //   });
  // } else {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
  // }
};
