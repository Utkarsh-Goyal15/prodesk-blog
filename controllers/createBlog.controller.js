import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model.js';
import { Blog } from '../models/blog.model.js';
import { ApiError } from '../utils/ApiError.js';
const createBlog= asyncHandler( async (req,res)=>{
    let {user_id,category,tag,title,slug,content}=req.body;
    const image=req.file?.filename;

    if(category==='' || tag==='' || title==='' || slug==='' || content===''){
        throw new ApiError(401,'All fields are necessary');
    }

    const user =await User.findOne({_id:user_id});
    if(!user){
        throw new ApiError(404,'user not found');
    }
    const blog= await Blog.create({
        user_id:user._id,
        category:category,
        tag:tag,
        title:title,
        slug:slug,
        content:content,
        publicationDate:Date.now()
    })
    if(image){
        blog.image=image;
        blog.save();
    }
    if(blog){
        res.status(200).json(
            {
                message:'blog created successfully',
                blog:blog
            }
        )
    }
} )

export {createBlog}