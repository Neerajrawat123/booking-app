const bcryptjs = require('bcryptjs');
const userModel = require('../model/userModel.js')

const salt = bcryptjs.genSaltSync(10)


const registerUser = async (req,res) =>{
    const newUser = await userModel.create({
        username:req.body.username,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password, salt)
    })
    if (newUser) {
        res.send('user created successfully')
        
    } else {
        throw new Error
        
    }
}
const loginUser = async (req,res) =>{
    console.log(req.body.password)
    const user = await userModel.find({
        email:req.body.email,
    })
    if(user){
        const password = user[0].password
        const isPasswordRight = bcryptjs.compareSync(password,req.body.password )
        if(isPasswordRight){
            res.send({status:'success',
        user:user})}else{
            res.send({status:'error',})
        }
    }
}

module.exports = {registerUser, loginUser}