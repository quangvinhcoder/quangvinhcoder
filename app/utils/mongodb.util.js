const e = require("express");
const { MongoClient } = require("mongodb");

class MongoDB {
  static connect = async (url) => {
    if (this.client) {
      console.warn("Already connected to MongoDB");
      return this.client;
    }
  };
}

module.exports = MongoDB;
