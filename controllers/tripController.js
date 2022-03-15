const User = require('../models/user')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Trip = require('../models/trip');

// ROUTES
// TRIP INDEX PAGE [1/7]
//     -World map showing user destinations
router.get('/', async (req, res) => {
    const trips = await Trip.find();
    res.render('../views/trips/index.ejs', {
        trips: trips
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
        // console.log(`req.session.UserID: ${req.session.userId}`)

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
    const trip = await Trip.findById(req.params.id) // now you can well actually you would still have the user id without .populate but you didn't have it before because you weren't adding it when you posted a trip
    if (req.session.isLoggedIn) {
        // const tripCreator = trip.user
        // console.log(`Current user: ${currentUser.username}`)
        // console.log(`The owner of the trip should be: ${tripCreator}`)
        console.log("logged in")
        // console.log("this is trip\n", trip)
        // console.log(`trip.user: ${trip.user}`)
        // console.log(`req.session.userId: ${req.session.userId}`)
        let tripOwner = trip.user+""
        let currUser = req.session.userId + ""
        
        console.log(`match:${tripOwner===currUser}`)
        // console.log(`trip.user typeof? ${typeof(trip.user._id)}`)
        // console.log(`req.session.userId typeof? ${typeof(req.session.userId)}`)
        // if (res.locals.userId == trip.user ) --> not sure if user would just give you the id, that's something you would want to console log so you can see that actual obj in your terminal and if it doesn't if you the id then you could use .populate

            res.render("../views/trips/show.ejs", {
                trip: trip,
                tripOwner : tripOwner,
                currUser :currUser
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
        await Trip.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/trips/${req.params.id}`)
        console.log("editing trip")
    } catch (err) {
        console.log("There was an error editing this trip")
        res.sendStatus(500)
    }
})


// TRIP DELETE ROUTE [7/7]
//     -Deletes the trip
router.delete('/:id', async (req, res) => {
    //TRY BLOCK FOR DB QUERY
    try {
        //remove from user's trips array
        const trip = await Trip.findById(req.params.id)
        const user = await User.findById(trip.user)
        console.log(`trying to delete ${trip.destinationCity} from ${user.username}`)
        console.log("\nprior:[")
        for(tripz of user.trip){
            console.log(tripz)
        }
        for(let i = 0; i < user.trips.length; i++){
            if(user.trips[i]._id === trip._id)
            user.trips.splice(i,1)
        }
        console.log("]\npost: [")
        for(tripz of user.trip){
            console.log(tripz)
        }
        console.log("]")
        //QUERIES DB TO FIND SPECIFIC USER AND DELETES THEM
        await Trip.findByIdAndDelete(req.params.id)
        //SENDS USER TO LOGIN PAGE?
        //NOT SURE WHRERE TO REDIRECT AFTER A TRIP DELETE
        res.redirect(`/users/${user._id}`)
        //DB FUCK-UPS
    } catch (err) {
        res.sendStatus(500)
    }
})


module.exports = router
