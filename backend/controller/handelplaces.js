const { Place } = require("../model/placesModel.js");
const imageDownloader = require("image-downloader");
const jwt = require("jsonwebtoken");
const uploadCloudinary = require("../utils/cloudinary.js");
const User = require("../model/userModel.js");
const jwtSecret = "skdjfaksdjfkd223jdkf3jj";

const addPhotosByLink = async (req, res) => {
  try {
    const { link } = req.body; 
    const newName = "phote" + Date.now() + ".jpg";    // rename image 
    await imageDownloader.image({
      url: link,
      dest: __dirname + "/uploads/" + newName,
    });                                              // download images here

    const data = await uploadCloudinary(__dirname + "/uploads/" + newName);  
    res.status(200).json(data);
  } catch (error) {
    console.log("error", error);
  }
};

const uploadPhoto = async (req, res) => {
  try {
    const uploadFiles = [];
    for (let i = 0; i < req.files.length; i++) {
      const { path } = req.files[i];
      const imgUrl = await uploadCloudinary(path);
      uploadFiles.push(imgUrl.secure_url);
    }

    res.status(201).json(uploadFiles);
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
const addPlaces = async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    addedPhotos,
    description,
    price,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    bedrooms,
    bathrooms,
    beds,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.create({
      owner: userData.id,
      price,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
      bedrooms,
      bathrooms,
      beds,
    });
    res.json(placeDoc);
  });
};

const getPlaces = async (req, res) => {
  try {
    res.status(200).json(await Place.find());
  } catch (error) {
    res.status(404).json(error);
  }
};

const getPlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id)
    const owner = await User.findById(place.owner)
    res.status(200).json({place,owner});
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  addPhotosByLink,
  uploadPhoto,
  addPlaces,
  getPlaces,
  getPlace
};
