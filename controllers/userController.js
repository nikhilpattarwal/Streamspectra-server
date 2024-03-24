const User = require("../models/userModel");
const asyncHandler = require('express-async-handler');
const generateToken =require('../utils/generateToken');

const registerUser = asyncHandler (async (req,res)=>{
    console.log(req.body);
    const {name, email, password} = req.body.userData;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(404);  
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if(user){
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
        })
    }else{
        res.status(400);
        throw new Error("Error Occured!");
    }

    
})

const authUser = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {email, password} =req.body.userData;
    const user = await User.findOne({email});
    console.log("user",user);
    if(user && ( await user.matchPassword(password))){
      res.json({
         id : user._id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id)
      })
    }else{
      res.status(400);
      throw new Error("Invalid email or password!");
  }
  }); 

module.exports={registerUser,authUser};