const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sanjeevsrivastava107:rnjFm6wSScK6ZeXh@cluster0.g8m0xkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = MongoConnect;
