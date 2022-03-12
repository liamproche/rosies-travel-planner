const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {type:String, required: true, unique: true, minlength: 1, maxlength: 50},
    name: {type:String, minlength: 1, maxlength: 50},
    password: {type:String, minlength: 8, maxlength: 500, required: true},
    departureCity: String,
    departureDate: Date,
    returnDate: Date,
},{timestamps: true})

const User = mongoose.model('User', userSchema);

module.exports = User;