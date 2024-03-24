
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    console.log("url",process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);

    // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}


const db = mongoose.connection;

db.on('error', console.error.bind(console, "error in connnection DB"));

db.once('open', function () {
    console.log("successfully connected to database");
})

module.exports = db;