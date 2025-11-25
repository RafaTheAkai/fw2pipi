
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = require('./server');
const uri = process.env.dbconn;

module.exports = (app) => {
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
  app.dbClient = client

}
