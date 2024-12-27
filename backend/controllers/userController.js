// import jwt from "jsonwebtoken";
import bcrypt, { genSalt } from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

//-----------user registration----------//
const userRegister = async (req, res) => {
  try {
      const { name, email, password } = req.body;
      console.log(req.body)
    if (!email || !password) {
      return res.json({ success: false, message: "email & password required" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "email is not valid" });
      }
      
      const userExists = await userModel.find({ email })
      if (userExists) {
          return res.json({success:false ,message:"User alredy registered please login "})
      }

    if (password.length < 6) {
      return res.json({
        success: false,
        message: "password must be 6 characters",
      });
    }

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

      const dataOfUser = { name, email, password:hashedPassword }

      const newUser = new userModel(dataOfUser)
      const user = await newUser.save();
      //console.log(user)
      return res.json({success:true,message:'user registration successfull'})

    //   //TOKEN gen
    //   const token= jwt.sign({id:user._id},process.env.JWT_SECRET)
    //   console.log("token::-" + token)      
    //   return res.json({success:true,token})



  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default userRegister