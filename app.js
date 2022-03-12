const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();
require('./db-utils/connect');
const app = express();
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'userSessions'
});
const userController = require('./controllers/userController');
const port = process.env.PORT || 3000


app.use(express.urlencoded({extended: true}));
app.use('/users', userController)

app.listen(port, ()=>{
    console.log('App is running')
})