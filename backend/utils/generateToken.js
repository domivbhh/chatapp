import jwt from 'jsonwebtoken'
import dotenv from "dotenv";


dotenv.config();


const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

res.cookie("jwt", token, {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  httpOnly: true, //to prevent xss attacks cross-site scripting attacks
  sameSite: "strict",       //to prevent csrf attacks cross-site request forgery attacks
  secure:process.env.NODE_ENV||"development"
});
}

export default generateTokenAndSetCookie