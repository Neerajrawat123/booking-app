const Place = require('../model/placesModel.js');
const imageDownloader= require('image-downloader')
const fs = require('fs')

const addPhotosByLink = async (req,res) =>{
    const { link }  = req.body;
    const newName = 'phote' + Date.now() + '.jpg'
    try {
        
        await imageDownloader.image({
            url:link,
            dest:__dirname + '/uploads/' +  newName
        })

        res.status(200).json(newName)
    } catch (error) {
        console.log('error' , error)
        
    }
    
}

const uploadPhoto = async (req,res) =>{
    const uploadFiles = []
    for (let i = 0; i < req.files.length; i++) {
        const {path, originalname} = req.files[i];
        const parts = originalname.split('.')
        const ext = parts[parts.length-1]
        let newPath = path + '.' + ext
        fs.renameSync(path,newPath)
        newPath = newPath.replace('controller\\uploads\\', '')
        uploadFiles.push(newPath)
        
    }

    res.status(201).json(uploadFiles)

}
const addPlaces = async (req,res) => {
    const {token}= req.cookies;
    const {title, address, description, extraInfo, checkIn, checkOut, maxGuests, price} = req.body;
    console.log(token)

    // const placeDoc = new Place({
    //     title:ti
    // })
}

module.exports ={ addPhotosByLink, uploadPhoto,addPlaces}