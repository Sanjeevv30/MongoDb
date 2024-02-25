const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sanjeevsrivastava107:rnjFm6wSScK6ZeXh@cluster0.g8m0xkj.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
