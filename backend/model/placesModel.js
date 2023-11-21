const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    photos:{
        type:Array,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    perks:{
        type:Array,
        required:true,
    },
    extraInfo:{
        type:String,
        required:true,
    },
    maxGuest:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    





})

const PlaceModel = mongoose.model('PlaceModel', placeSchema)

module.exports = PlaceModel