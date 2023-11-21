const express = require('express');
const multer = require('multer')
const cookieParser = require('cookie-parser')
const router = express.Router();


const {registerUser, loginUser, getProfile, logout} = require('./controller/handleUser.js')
const { addPhotosByLink, uploadPhoto, addPlaces}= require('./controller/handelplaces.js')

router.post('/register',registerUser)
router.post('/login', cookieParser(), loginUser)
router.get('/profile',getProfile)
router.post('/logout', logout)
router.post('/places', addPlaces)
router.post('/upload-by-link', addPhotosByLink)



const photosMiddleware = multer({dest:'controller/uploads/'})
router.post('/uploads',photosMiddleware.array('photos',100),  uploadPhoto)



module.exports = router