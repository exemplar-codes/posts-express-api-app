const mongoose = require("mongoose");
const ENV = require("./getEnv");
const database_password = ENV["MONGODB_PASSWORD"];

function connectToDBAndRun(cb = () => {}) {
  mongoose
    .connect(
      `mongodb+srv://sanjarcode-nodejscompleteguide:${database_password}@cluster-nodejscompleteg.nuohpop.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((success) => {
      console.log("Connected to MongoDB Atlas");
      //   console.log({ success });
      cb();
    })
    .catch((error) => {
      console.log("Mongo DB connection failed");
      //   console.log({ err: error });
    });
}
// connectToDBAndRun();

module.exports = connectToDBAndRun;
