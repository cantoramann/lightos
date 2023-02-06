const loggerReq = (() => "log_service.com")();
const format = ["en-US", "America/Los_Angeles"];
const axios = require("axios");

const LOG_TYPES = Object.freeze({
  REGULAR: {
    BUG: "Bug",
    ANALYTICS: "Analytics",
    ERROR: "Error",
    WARNING: "Warning",
    INFO: "Info",
    DEBUG: "Debug",
  },
  LOGGING_ERROR: "LoggingError",
});

class Logger {
  #connection;

  #region;
  #timezone;

  constructor() {
    this.#connection = loggerReq;
    this.#region = format[0];
    this.#timezone = format[1];
  }

  async log(type, severity = 0, ...args) {
    const date = new Date().getDate();

    if (!type || typeof type != "string" || !LOG_TYPES.REGULAR[type]) {
      await axios({
        method: "post",
        url: this.#connection,
        data: {
          type: LOG_TYPES.LOGGING_ERROR,
          message: `Invalid log type: ${type}`,
          date,
        },
      });
    } else {
      await axios({
        method: "post",
        url: this.#connection,
        data: {
          type,
          severity,
          message: args,
          date,
        },
      });
    }
  }
}

module.exports = new Logger();
