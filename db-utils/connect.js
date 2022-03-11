const mongoose = require("mongoose");

//DEFINES DB VARIABLE
const db = mongoose.connection;

//CONNECTS TO MONGO
//!!!NOTE- Must have your database uri in your own .env file. (MONGO_URI = <YOUR URI HERE>)
mongoose.connect(process.env.MONGO_URI);

//LOGS MESSAGES ON DATABASE ERRORS / SUCCESSES
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.MONGO_URI));
db.on('disconnected', () => console.log('mongo disconnected'));