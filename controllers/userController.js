const User = require("../models/user")
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


//INDEX ROUTE
router.get('/login', (req, res)=>{
    res.send("This is the log-in route")
})

module.exports = router