exports.sendPostHandler = (req, res, next) => {
  const { data } = res;
  if (typeof data !== "object") {
    data = { message: data };
  }

  res.setHeader("Access-Control-Allow-Headers", "Set-Cookie");
  return res.json(data || { data: true, empty: true });
};
