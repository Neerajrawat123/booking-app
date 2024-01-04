const Booking = require("../model/bookingModel.js");
const User = require("../model/userModel.js");
const { getUserDataFromReq } = require("./handleUser");

const makeBooking = async (req, res) => {
  try {
    const { place, checkIn, checkOut, numberOfGuests, name, phone, price } =
      req.body;
    const userData = await getUserDataFromReq(req);   

    Booking.create({
      place,
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      price,
      user: userData.id,
    })
      .then((doc) => {
        res.json(doc);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getBooking = async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    res.json(await Booking.find({ user: userData.id }).populate("place"));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { makeBooking, getBooking };
