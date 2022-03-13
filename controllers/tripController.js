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

    // res.redirect('/users')
})


// TRIP CREATE ROUTE(POST) [3/7]
//     -Create the actual trip  
router.post('/:id/:UserID', async (req, res) => {
    //TRY BLOCK FOR DB QUERY
    try {
        //QUERIES DB TO FIND SPECIFIC USER BY ID
        const trip = await Trip.create(req.body);
        console.log(`req.session.UserID: ${req.session.userId}`)
        const user = await User.findById(req.session.userId)
        user.trips.push(trip)
        user.save()
        console.log("Trip created!")
        console.log(user.trips.length)
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
// router.get('user/:id', async (req,res)=>{
//         const trips = await Trip.findById(req.params.id)
//         res.render("")
// })
router.get('/show/:id', async (req, res) => {
    const trip = await Trip.findById(req.params.id)
    res.render("trips/show.ejs", {
        trip: trip
    })
})


// TRIP SHOW FORM TO EDIT PAGE [5/7]
//     -Show form to edit trip

// TRIP EDIT ROUTE [6/7]
//     -Edits the trip, dates, layovers

// TRIP DELETE ROUTE [7/7]
//     -Deletes the trip
router.delete('/:id', async (req, res) => {
    //TRY BLOCK FOR DB QUERY
    try {
        //QUERIES DB TO FIND SPECIFIC USER AND DELETES THEM
        await Trip.findByIdAndDelete(req.params.id)
        //SENDS USER TO LOGIN PAGE?
        //NOT SURE WHRERE TO REDIRECT AFTER A TRIP DELETE
        res.redirect('/trips')
        //DB FUCK-UPS
    } catch (err) {
        res.sendStatus(500)
    }
})

module.exports = router


