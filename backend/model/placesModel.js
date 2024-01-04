const mongoose = require('mongoose');
const User = require('./userModel.js')


const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
         ref:'User'
     },
     stars :{
        type:Number,
        required:true
     },
     msg:{
         type:String,
         required: true
     },
     
    

},{
    timestamps:true
})


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
    maxGuests:{
        type:Number,
        required:true
    },
    bedrooms:{
        type:Number,
        required:true
    },
    beds:{
        type:Number,
        required:true
    },
    bathrooms:{
        type:Number,
        required:true
    },
    
        price:{
        type:Number,
        required:true
    },
    reveiws : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }
    





},{ 
    timestamps:true
})

const Place = mongoose.model('PlaceModels', placeSchema)
const Review = mongoose.model('Review', reviewSchema)


module.exports = {Place, Review}