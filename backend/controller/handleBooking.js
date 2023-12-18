const Booking = require('../model/bookingModel.js');
const User = require('../model/userModel.js')
const { getUserDataFromReq } = require('./handleUser');


const makeBooking =  async (req,res) => {
    const {
        place,checkIn,checkOut,numberOfGuests,name,phone,price,
      } = req.body;  
      const userData =await getUserDataFromReq(req)
    
      Booking.create({
        place,checkIn,checkOut,numberOfGuests,name,phone,price,
        user:userData.id,
      }).then((doc) => {
        res.json(doc);
      }).catch((err) => {
        throw err;
      });
    }

    const getBooking = async (req, res) => {

    
      
      const userData = await getUserDataFromReq(req);
        res.json( await Booking.find({user:userData.id}).populate('place') );
    }

module.exports = { makeBooking, getBooking }