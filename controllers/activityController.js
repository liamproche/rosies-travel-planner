const User = require('../models/user')
const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const { findById } = require('../models/user');


//ADD ACTIVITY ROUTE
router.put('/:id/activity', async (req, res)=>{
     await Trip.findByIdAndUpdate(
           {_id: req.params.id},    
           {$push:{activities:req.body.activity}})
           res.redirect(`/trips/${req.params.id}`)
   })


//DELETE ACTIVITY ROUTE
router.put('/:id/deleteActivity', async(req, res)=>{
    const trip = await Trip.findById(req.params.id)
    const tripActivities = trip.activities
    tripActivities.splice(-1)
    trip.save()  
    res.redirect(`/trips/${req.params.id}`)
})


module.exports = router
