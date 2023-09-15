const dotenv = require("dotenv");

const { error, parsed } = dotenv.config("../.env");
const ENV = error ? error : parsed;

module.exports = ENV;
