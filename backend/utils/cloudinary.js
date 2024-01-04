const cloudinary = require('cloudinary').v2
const fs = require("fs");


cloudinary.config({
  cloud_name: "duqznmwqf",
  api_key: "595911866396944",
  api_secret: "QWm3x3mxsTIC879Z9h317_otUVY",
  secure: true,
});


const uploadCloudinary = async (imageUrl) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
    if (!imageUrl) {
      return null;
    }
    const response = await cloudinary.uploader.upload(imageUrl, options);
    fs.unlinkSync(imageUrl);
    return response;
  } catch (error) {
    fs.unlinkSync(imageUrl);
    return null;
    console.log(error);
  }
};

module.exports = uploadCloudinary
