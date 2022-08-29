exports.sendPostHandler = (req, res, next) => {
  const { data } = res;
  if (typeof data !== "object") data = { data };
  return res.json(data || { data: true, empty: true });
};
