exports.cookiesPostHandler = (req, res, next) => {
  const { cookies } = res.data;

  if (cookies && typeof cookies === "object") {
    Object.entries(cookies).forEach(([key, value]) => {
      res.cookie(key, value, {
        expires: value.expires ? value.expires : new Date(Date.now() + 900000),
        httpOnly: value.httpOnly ? value.httpOnly : true,
        signed: value.signed ? value.signed : true,
      });
    });
  }

  res.data.cookies = cookies;
  next();
};
