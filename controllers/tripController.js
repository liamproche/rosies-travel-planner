const User = require('../models/user')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Trip = require('../models/trip');


//TRENDING FUNCTION - CALLED IN TRIP INDEX ROUTE TO POPULATE PAGE WITH TRENDING TRIPS
//3 TRENDING MAX NUMER
async function findTrendingTrips(){
    const trendingTripArr = []
    const trips = await Trip.find()
    let highestHitTrip = trips[0]
    let secondHighestTrip = trips[0]
    let thirdHighest = trips[0]
    for(let i = 0; i < trips.length; i++){
        let trip = trips[i]
        if(trip.hitcount > highestHitTrip.hitcount){
            highestHitTrip = trip
        }
    }
    trendingTripArr.push(highestHitTrip)
    for(let i = 0; i < trips.length; i++){
        let trip = trips[i]
        if(trip.hitcount > secondHighestTrip.hitcount && trip._id !== highestHitTrip._id){
            secondHighestTrip = trip
        }
    }
    trendingTripArr.push(secondHighestTrip)
    for(let i = 0; i < trips.length; i++){
        let trip = trips[i]
        if(trip.hitcount > thirdHighest.hitcount && trip._id !== highestHitTrip._id && trip._id !== secondHighestTrip._id){
            thirdHighest = trip
        }
    }
    trendingTripArr.push(thirdHighest)
    return(trendingTripArr)
}


// ROUTES
// TRIP INDEX PAGE [1/7]
//     -World map showing user destinations
router.get('/', async (req, res) => {
    const trips = await Trip.find();
    const trendingTrips = await findTrendingTrips();
    const userId = (req.session.userId)
    res.render('../views/trips/index.ejs', {
        isLoggedIn: req.session.isLoggedIn,
        trips: trips,
        userId: userId,
        trendingTrips: trendingTrips
    })
})


//TEMP GOOGLE MAP ROUTE
router.get('/googlemaps', async (req, res) => {
    const trips = await Trip.find();
    const userId = (req.session.userId)
    res.render('../views/trips/tempGoogle.ejs', {
    })
})


// TRIP SHOW FORM TO CREATE [2/7]
//     -Renders form to create trip
//     -Re-directs back to user show page
router.get('/new/:userID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userID)
        res.render('../views/trips/new.ejs', {
            user: user
        })
    } catch (err) {
        res.send("something with router . get")
    }
})


// TRIP CREATE ROUTE(POST) [3/7]
//     -Create the actual trip  
router.post('/:id/:UserID', async (req, res) => {
    //TRY BLOCK FOR DB QUERY
    try {
        // sets the user of the trip ot be the current user's id
        // res.locals.userId is from your app.js when you created the middleware -- you can use it anywhere (it's global)
        req.body.user = res.locals.userId
        //QUERIES DB TO FIND SPECIFIC USER BY ID
        const trip = await Trip.create(req.body);
        // you technically don't need to do a query find on the user becuase `res.locals` is the current user
        const user = await User.findById(req.session.userId)
        // req.body.user = user
        user.trips.push(trip)
        user.save()
        console.log("Trip created!")
        // console.log(user.trips.length)
        res.redirect(`/users/${user._id}`)
        //DB OOPSIES
    } catch (err) {
        res.send("something with router . post")
        console.log(err)
    }
})


// TRIP SHOW PAGE [4/7]
//     -Lists price of current trip
//     -Possible addition of more information
router.get('/:id', async (req, res) => {
    const trip = await Trip.findById(req.params.id).populate('user') // now you can well actually you would still have the user id without .populate but you didn't have it before because you weren't adding it when you posted a trip
    //THIS WILL INCREMENT THE HITCOUNT STORED IN THE TRIP MODEL WHETHER USER WHO CLICKS IS LOGGED IN OR NOT
    trip.hitcount++
    trip.save()
    console.log(trip.hitcount)
    if (req.session.isLoggedIn) {

        console.log("logged in")

        let tripOwner = trip.user._id + ""
        let currUser = req.session.userId + ""
        let tripOwnerName = trip.user.username
        // console.log(`key :${user.keys}`)
        // if (res.locals.userId == trip.user ) --> not sure if user would just give you the id, that's something you would want to console log so you can see that actual obj in your terminal and if it doesn't if you the id then you could use .populate
            res.render("../views/trips/show.ejs", {
                trip: trip,
                tripOwner: tripOwner,
                currUser :currUser,
                tripOwnerName :tripOwnerName
            })
    } 
    else {
        res.redirect('/users')
        console.log("not logged in")
    }
})


// TRIP SHOW FORM TO EDIT PAGE [5/7]
//     -Show form to edit trip
router.get('/:id/edit', async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id)
        res.render('../views/trips/edit.ejs', {
            trip: trip
        })
    } catch (err) {
        res.sendStatus(500)

    }
})


// TRIP EDIT ROUTE [6/7]
//     -Edits the trip, dates, layovers
router.put('/:id', async (req, res) => {
    try {   
        //UPDATES TRIP IN DB
        await Trip.findByIdAndUpdate(req.params.id, req.body)
        //FINDS UPDATED TRIP IN DB
        const trip = await Trip.findById(req.params.id)
        //FINDS USER OF TRIP
        const user = await User.findById(req.session.userId)
        //GOES THROUGH TRIPS ARR IN USER MODEL
        for(let i = 0; i < user.trips.length; i++){
            //IF REQUEST ID MATCHES THE TRIP ID
            if(req.params.id == trip._id){
                //SPLICE THE USER ARRAY WITH THE TRIP 
                user.trips.splice(i, 1, trip)
                //SAVE THE NEW USER IN THE DB
                user.save();
            }
            console.log('edited')
        }  
        //SEND THEM BACK TO THE SHOW PAGE (OR MY TRIPS PAGE???)
        res.redirect(`/trips/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})


// TRIP DELETE ROUTE [7/7]
//     -Deletes the trip
router.delete('/:id', async (req, res) => {
    //TRY BLOCK FOR DB QUERY
    try {
        //QUERIES THE DB TO FIND THE TRIP
        const trip = await Trip.findById(req.params.id)
        //QUERIES THE DB TO FIND THE USER
        const user = await User.findById(trip.user)
        
        
        //LOOPS THROUGH ARRAY OF TRIPS STORED IN USER MODEL
        for (let i = 0; i < user.trips.length; i++){
            //STRING CONVERSION TO MATCH IDs
            if(String(user.trips[i]._id) === String(trip._id)){
                //SPLICE THAT ARRAY!!!!
                user.trips.splice(i, 1)
                user.save()
            }
        }
        //DELETES TRIP FROM DB
        await Trip.findByIdAndDelete(req.params.id)
        //SENDS USER TO USER SHOW PAGE
        res.redirect(`/users/${user._id}`)
        //DB FUCK-UPS
    } catch (err) {
        res.sendStatus(500)
    }
})


module.exports = router