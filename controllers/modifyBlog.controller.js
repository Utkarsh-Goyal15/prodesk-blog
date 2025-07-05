import { Blog } from '../models/blog.model.js';
import { ApiError } from '../utils/ApiError.js';
import asyncHandler from 'express-async-handler';


const modifyBlog= asyncHandler(async (req,res)=>{
    let {blog_id,user_id,category,tag,title,slug,content}=req.body;

    if(blog_id===''){
        throw new ApiError(401,'provide blog id')
    }
    const updatedBlog=await Blog.updateOne(
        {
            _id:blog_id,
            user_id:user_id
        },
        {
            category:category,
            tag:tag,
            title:title,
            slug:slug,
            content:content
    
        }
    );
    if(!updatedBlog){
        throw new ApiError('500','blog is not modified');
    }
    res.status(200).json(
        {
            message:'updated successfully',
            updatedBlog:updatedBlog
        }
    )

})

export {modifyBlog}