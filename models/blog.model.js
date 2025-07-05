import mongoose from 'mongoose';

const blogSchema=new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    tag:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    publicationDate:{
        type:Date,
        required:true
    },
    image:{
        type:String,
    },
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    like:{
        type:Number,
        default:0
    },
    share:{
        type:Number,
        default:0
    }
},{timestamps:true});

export const Blog=mongoose.model('Blog',blogSchema)