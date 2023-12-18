const { Place } = require("../model/placesModel.js");
const imageDownloader = require("image-downloader");
const fs = require("fs");
const cloudinary = require('cloudinary').v2
const jwt = require("jsonwebtoken");
const jwtSecret = "skdjfaksdjfkd223jdkf3jj";

cloudinary.config({ 
    cloud_name: 'duqznmwqf', 
    api_key: '595911866396944', 
    api_secret: 'QWm3x3mxsTIC879Z9h317_otUVY',
    secure: true 
  });

const uploadCloudinary = async (imageUrl) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      };

      try {
        const result =await  cloudinary.uploader.upload(imageUrl,options)
        return result?.url
      } catch (error) {
        console.log(error)
        
      }
};

const addPhotosByLink = async (req, res) => {
  const { link } = req.body;
  const newName = "phote" + Date.now() + ".jpg";
  try {
    await imageDownloader.image({
      url: link,
      dest: __dirname + "/uploads/" + newName,
    });
    const imgUrl = await uploadCloudinary( __dirname + "/uploads/" + newName )
    res.status(200).json({url:imgUrl})

  } catch (error) {
    console.log("error", error);
  }
};

const uploadPhoto = async (req, res) => {
  const uploadFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    let newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    newPath = newPath.replace("controller\\uploads\\", "");
    const imgUrl= uploadCloudinary(newPath)
    uploadFiles.push(newPath);
  }

  res.status(201).json(uploadFiles);
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
  res.json(await Place.find());
};

const getPlace = async (req, res) => {
  const { id } = req.params;

  res.json(await Place.findById(id));
};

module.exports = {
  addPhotosByLink,
  uploadPhoto,
  addPlaces,
  getPlaces,
  getPlace,
};
