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


//MIDDLEWARE FOR USER LOG-IN
// app.use((req, res, next)=>{
//     if(req.session.isLoggedIn){
//         next()
//     }
//     else{
//         res.send("User is not logged in")
//     }
// })


//TELLS APP TO USE EXPRESS SESSION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))


//USER CONTROLLER
app.use('/users', userController)


//FOR USER LOGIN POST REQUEST
//NOTE- REQUIRES "SESSION_SECRET = <string>" IN dotENV file
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))





app.listen(port, ()=>{
    console.log('App is running')
})