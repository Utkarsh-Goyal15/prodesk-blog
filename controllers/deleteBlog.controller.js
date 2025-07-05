import { ApiError } from '../utils/ApiError.js';
import asyncHandler from 'express-async-handler';
import { Blog } from '../models/blog.model.js';

const deleteBlog= asyncHandler(async (req,res)=>{
    let {blog_id} = req.body;

    if(blog_id===''){
        throw new ApiError(401,'Blog id is neccesary')
    }
    const blog=await Blog.findById(blog_id);
    if(!blog){
        throw new ApiError(404,'Blog is not available with this id')
    }
    const result = await Blog.deleteOne({_id:blog_id})
    res.status(200).json({
        message:'blog deleted successfully',
        result:result
    })
})

export {deleteBlog}