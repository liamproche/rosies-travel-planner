const User = require('../models/user')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Trip = require('../models/trip');


//SHOW USER LOGIN FORM ROUTE(GET)
router.get('/', async (req, res)=>{
    // NOTE- COMMENT IN BELOW TO RENDER LOGIN FORM
    res.render('users/login.ejs', {
    })
})


//LOG USER IN ROUTE(POST)
router.post("/login", async (req, res)=>{
    try{
        //GRABS USERNAME FROM THE BODY OF THE FORM AND QUERIES THE DATABASE
        const possibleUser = await User.findOne({username: req.body.username})
        if(possibleUser){
            //IF IT FINDS A USER
            //COMPARES ENCRYPTED PASSWORDS LOOKING FOR A MATCH
            if(bcrypt.compareSync(req.body.password, possibleUser.password)){
                //IF PASSWORDS MATCH USER IS LOGGED IN
                req.session.isLoggedIn = true;
                console.log(possibleUser)
                //SETS THE USER ID FOR THE SESSION
                req.session.userId = possibleUser._id;
                //REDIRECTS LOGGED-IN USER TO USER SHOW PAGE
                res.redirect(`/users/${possibleUser._id}`)
                console.log("user is logged in")
            }else{
                //IF PASSWORDS DONT MATCH REDERICT TO LOG-IN PAGE
                res.redirect("/users")
            }
        }else{
            //IF USERNAME DOESNT EXIST IN DB REDIRECT TO LOGIN PAGE
            res.redirect("/users")
        }
    //DB FUCK-UPS
    }catch(err){
        console.log(err);
        res.send(500)
    }
})


//CREATE A NEW USER ROUTE(POST)
router.post('/new', async (req, res)=>{
    //CHECKS THAT INFORMATION WAS ADDED INTO THE FORM
    console.log(req.body)
    //CREATES AND STORES ENCRYPTED PASSWORD
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    //CONSOLE LOG TO ENSURE ENCRYPTED PASSWORD CREATED
    console.log(hashedPassword)
    //CHANGES USER PASSWORD TO ENCRYPTED PASSWORD
    req.body.password = hashedPassword
    //CREATES USER IN DB
    const newUser = await User.create(req.body);
    //TO ENSURE NEW USER WAS CREATED
    console.log(newUser)
    //SENDS USER TO USER SHOW PAGE
    res.redirect(`/users`)
})


//SHOW FORM TO CREATE NEW USER ROUTE(GET)
router.get('/new', (req, res)=>{
    res.render('../views/users/new.ejs')
})


//SHOW FORM TO EDIT USER ROUTE(GET)
router.get('/:id/edit', async (req, res)=>{
    //SINCE IT QUERIES THE DATABASE
    try{
        console.log(req.session.userId)
        console.log(req.params.id)
        //MAKES SURE LOGGED IN USER MATCHES USER IN DATABASE (LOOSE EQUALITY- TYPE ERROR WITH STRICT)
        if(req.session.userId == req.params.id){
            //QUERIES THE DATABASE
            const user = await User.findById(req.params.id)
            console.log("checking the db")
            res.send("Showing the form to edit a user")
            //NOTE- ADD IN BELOW TO RENDER FORM
            // res.render('users/edit.ejs', {
            //     user: user
            // })
        }
        //IF USER IS NOT LOGGED IN AS USER REQUESTED TO EDIT
        else{    
            throw new Error("You're NOT THAT USER!")
        }
    //DB FUCK-UPS
    }catch(err){
        res.sendStatus(500)
    }
})


//EDIT USER ROUTE(PUT)
router.put('/:id', async (req, res)=>{
    //TRY BLOCK FOR DB QUERY
    try{
        //QUERIES DB AND UPDATES ENTRY AS PER FORM BODY 
        await User.findByIdAndUpdate(req.params.id, req.body)
        //REDIRECTS USER TO THEIR SPECIFIC SHOW PAGE 
        res.redirect(`/users/${req.params.id}`)
    //DB FUCK-UPS
    }catch(err){
         res.sendStatus(500)
    }
})


//LOGOUT ROUTE(GET)
router.get('/logout', (req, res)=>{
    //KILLS THE SESSION
    req.session.destroy(()=>{
        //REDIRECTS TO LOGIN PAGE
        res.redirect("/users")
    })
})


//SHOW ROUTE
router.get('/:id', async (req, res)=>{
    //TRY BLOCK FOR DB QUERY
    try{
        //QUERIES DB TO FIND SPECIFIC USER BY ID
        const user = await User.findById(req.params.id)
        const userTrips = await Trip.find(user)
        res.render("users/show.ejs", {
            user: user,
            trips: userTrips
        })
    //DB FUCK-UPS
    }catch(err){
        res.sendStatus(500)
    }
})


//DELETE ROUTE
router.delete('/:id', async (req, res)=>{
    //TRY BLOCK FOR DB QUERY
    try{
        //QUERIES DB TO FIND SPECIFIC USER AND DELETES THEM
        await User.findByIdAndDelete(req.params.id)
        //SENDS USER TO LOGIN PAGE?
        res.redirect('/users')
    //DB FUCK-UPS
    }catch(err){
        res.sendStatus(500)
    }
})


module.exports = router