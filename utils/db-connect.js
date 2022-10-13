const mongoose = require('mongoose');
const config = require('../config/index');

// const uri = "mongodb+srv://root:root@cluster0.coantny.mongodb.net/TodoDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("Todo").collection("todo");
//   // perform actions on the collection object
//   client.close();
// });
const connect = async () => {
    try {
        await mongoose.connect(config.DB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = connect;
