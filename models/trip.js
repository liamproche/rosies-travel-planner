const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    tripName: {type:String},
    destinationCity: {type:String, required: true},
    activities: Array,
    destinationCountry: {type:String},
    hitcount: {type:Number, default:0},
    //NOTE- TO BE ADDED AFTER MVP
    // price: {type:Number, required:true},
    
    //TO TIE TRIP TO SPECIFIC USER
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})




const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;