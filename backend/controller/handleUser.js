const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel.js')

const salt = bcryptjs.genSaltSync(10)
const jwtSecret = 'skdjfaksdjfkd223jdkf3jj'


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
    const user = await userModel.find({
        email:req.body.email,
    })
    if(user){
        const password = user[0].password
        const isPasswordRight = bcryptjs.compareSync(req.body.password,password )
        if(isPasswordRight){
            jwt.sign({
                email:user.email,
        id:user._id
            },jwtSecret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
           

    
    }else{
            res.status(402).json('password is wrong')
        }
    }else{
        res.status(404).json('user not found')
    }
}

const getProfile =  (req,res) => {
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
  };
  
  const logout = (req,res) => {
    res.cookie('token', '').json(true);
  };
  


module.exports = { registerUser, loginUser,getProfile,logout }