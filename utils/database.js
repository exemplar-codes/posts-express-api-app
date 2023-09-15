const mongoose = require("mongoose");
const ENV = require("./getEnv");
const database_password = ENV["MONGODB_PASSWORD"];

// connection + pooling inspired by https://github.com/exemplar-codes/online-shop-with-nosql-mongoose/blob/843745fbe8dc144b492257ac130b1a1cb72bed75/util/database.js

let _db = null;

/**
 * Establishes connection to the database.
 * Updates connection pool even if it exists.
 */
async function connectToDB() {
  try {
    const mongooseObject = await mongoose.connect(
      `mongodb+srv://sanjarcode-nodejscompleteguide:${database_password}@cluster-nodejscompleteg.nuohpop.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB Atlas");
    // console.log({ success: mongooseObject });

    const mongoDbClient = mongooseObject.connection.getClient();
    _db = mongoDbClient.db();
  } catch (error) {
    console.log("Mongo DB connection failed");
    //   console.log({ err: error });
    throw error;
  }

  return _db;
}
// connectToDB();

/**
 * Gets a 'connection' from existing pool.
 * Throws an error if pool is empty.
 *
 * @param {Boolean} retry, retry a connection if pool is empty
 */
async function getDB(retry = false) {
  if (_db) {
    return _db;
  }

  if (retry) {
    await connectToDB();
    return db;
  }

  throw "No database connection found!";
}

module.exports = { connect: connectToDB, get: getDB };
