const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const User = require('./models/user');
const MongoDBStore = require('connect-mongodb-session')(session);
const isLoggedIn = require('./middleware/isLoggedIn')
require('dotenv').config();
require('./db-utils/connect');
const app = express();
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'userSessions'
});
const userController = require('./controllers/userController');
const tripController = require('./controllers/tripController');
const activityController = require('./controllers/activityController');
const port = process.env.PORT || 3000

//MUST BE PLACED BEFORE USER CONTROLLER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//TELLS APP TO USE EXPRESS SESSION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))


//REF STATIC FILES
app.use(express.static('public'));



//SENDS SESSION INFO TO TEMPLATES
app.use(async (req, res, next) => {
    // This will send info from session to templates
    res.locals.isLoggedIn = req.session.isLoggedIn
    if (req.session.isLoggedIn) {
        const currentUser = req.session.userId
        // console.log(currentUser)
        res.locals.username = currentUser.username
        res.locals.userId = req.session.userId.toString()
    }
    next()
})


//METHOD OVERRIDE FOR PUT & DELETE REQUESTS
app.use(methodOverride('_method'))



//USER CONTROLLER
app.use('/users', userController)
app.use('/trips', tripController)
app.use('/trips', activityController)


//FOR EMERGENCY LOGOUTS DURING BUILD PHASE REMOVE FOR PRODUCTION
app.get('/e', (req, res)=>{
    res.redirect('/users/logout')
})


//POINTS USER TO HOME PAGE
app.get('/', (req, res)=>{
    res.redirect('/trips')
})


app.listen(port, () => {
    console.log('App is running')
})