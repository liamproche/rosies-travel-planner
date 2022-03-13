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


//MUST BE PLACED BEFORE USER CONTROLLER
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//TELLS APP TO USE EXPRESS SESSION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))


//METHOD OVERRIDE FOR PUT & DELETE REQUESTS
app.use(methodOverride('_method'))


//USER CONTROLLER
app.use('/users', userController)


app.listen(port, ()=>{
    console.log('App is running')
})