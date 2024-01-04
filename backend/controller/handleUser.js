const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel.js");
const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/apiError.js");

const salt = bcryptjs.genSaltSync(10);
const jwtSecret = "skdjfaksdjfkd223jdkf3jj";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (
    [username, email, password].some((field) => field.trim() === "") // check for empty fields
  ) {
    throw new ApiError(400, "All fields required to filled");
  }

  const existedUser = userModel.find({
    // check for existed  user
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(400, "user already exist");
  }

  const newUser = await userModel.create({
    username,
    email,
    password: bcryptjs.hashSync(password, salt),
  });

  const createdUser = newUser.findById(newUser._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "something went wrong with registering user");
  }

  res.status(200).json({ user: createdUser, msg: "user created succussfully" });
});



const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (
    [ email, password].some((field) => field.trim() === "") // check for empty fields
  ) {
    throw new ApiError(400, "All fields required to filled");
  }

  const user = await userModel.find({ email });

  if (!user) {
    throw new ApiError(404, "user not found");
  }

  const userPassword = user[0].password;
  const isPasswordRight = bcryptjs.compareSync(password, userPassword);
  if (isPasswordRight) {
    jwt.sign(
      {
        email: user[0].email,
        id: user[0]._id,
        username: user[0].username,
      },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw new ApiError(500, "something went wrong");
        res.cookie("token", token).json(user);
      }
    );
  } else {
    throw new ApiError(402,'password wrong')
  }
});

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      console.log("userdata", userData);
      const { username, email, _id } = await userModel.findById(userData.id);
      res.json({ username, email, _id });
    });
  } else {
    res.json(null);
  }
};

const logout = (req, res) => {
  res.cookie("token", "").json(true);
};

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  logout,
  getUserDataFromReq,
};
