import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';

const registerUser= asyncHandler(async (req,res)=>{
    const {username,name,email,password}=req.body;
    const image=req.file?.filename;

    if(username==='' || name==='' || email==='' || password===''){
        throw new ApiError(401,'All fields are necessary');
    }
    const user=await User.findOne({ username,email });
    if(user){
        throw new ApiError('402','user with this credential already exist')
    }
    const newUser=await User.create({
        username:username,
        name:name,
        email:email,
        password:password
    });
    if(!newUser){
        throw new ApiError(500,'User not created')
    }
    res.status(200).json({
        message:"user is created",
        user:newUser
    })
})

export {registerUser}