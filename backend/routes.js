const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const multer = require('multer');


const {registerUser, loginUser, getProfile, logout} = require('./controller/handleUser.js');
const { addPhotosByLink, uploadPhoto, addPlaces, getPlaces, getPlace}= require('./controller/handelplaces.js');
const { makeBooking, getBooking } = require('./controller/handleBooking.js');

router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/profile',getProfile);
router.post('/logout', logout);
router.post('/places', addPlaces);
router.get('/places',getPlaces);
router.get('/place/:id' ,getPlace);
router.post('/upload-by-link', addPhotosByLink);

router.post('/booking', express.json(), makeBooking);
router.get('/bookings', getBooking)




const photosMiddleware = multer({dest:'controller/uploads/'});
router.post('/uploads',photosMiddleware.array('photos',100),  uploadPhoto);



module.exports = router ;