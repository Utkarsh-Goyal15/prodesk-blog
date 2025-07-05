import mongoose from 'mongoose';

const commentSchema=new mongoose.Schema({
    comment:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    postedOn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    }
},{timestamps:true})

export const Comment = mongoose.model("Comment",commentSchema)