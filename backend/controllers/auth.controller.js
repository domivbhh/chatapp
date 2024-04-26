import User from "../models/user.models.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const loginUser = async(req, res) => {
  
};
export const logoutUser = (req, res) => {
  res.send("logout route");
};




//signup controller
export const signUp = async(req, res) => {
  try {
    const{fullname,username,password,confirmPassword,gender}= req.body

    if(password!==confirmPassword){
      return res.status(400).json({"error":"Passwords do not match"})
    }

    const user=await User.findOne({username})

    if(user){
      res.status(400).json({error:"username already exists"})
    }

    //hash password here
     const hashedPassword=await bcrypt.hash(password,12);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser=new User({
      fullname,
      username,
      password:hashedPassword,
      gender,
      profilePic:gender==='male' ? boyProfilePic : girlProfilePic  
    })
    
    if(newUser){
      //generate JWT token
      generateTokenAndSetCookie(newUser._id,res)
      await newUser.save();
      res.status(201).json({
          _id: newUser._id,
          fullname: newUser.fullname,
          username: newUser.username,
          profilePic: newUser.profilePic,
        });

    }
    else{
      res.status(400).json({error:'Invalid user data'})
    }
  } 

  catch (error) {
    console.log('Error in signup controller',error.message)
    res.status(500).json({error:'Internal server error'})
  }
};

