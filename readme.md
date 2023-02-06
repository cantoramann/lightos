# Ligthos

Lightos is a Node.js template for building small microservice architectures fast. I provide you only the source, and so that you can flexibly customize it with your own preferences.

## Features

#### Configure routes like in Hapi.js

```javascript
sendHelloRoute: {
  method: "get",
  path: "/hello",
  middleware: [
    (req, res, next) => UserController.sendHelloController(req, res, next),
  ],
}
```

#### Global error handling

```javascript
// ...
Object.entries(cookies).forEach(([key, value]) => {
  res.cookie(key, value, {
    expires: value.expires ? value.expires : new Date(Date.now() + 900000),
    httpOnly: value.httpOnly ? value.httpOnly : true,
    signed: value.signed ? value.signed : true,
  });
});
```

#### App-level route flow

```javascript
// ...
applyRoutes() {
  this.#app.use(getRoutes()); // all routes are applied here
  this.routes = getRoutes();
  this.#app.use("/api", this.routes, cookiesPostHandler, sendPostHandler);
}

applyPostHandlers() {
  this.#app.use(errorsPostHandler);
}
// ...
```

#### And more

## Installation

```bash
git clone ...
```

## Usage

```bash
cd lightos/src/
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
