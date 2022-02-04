const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
        minlength: 4
    },
    body:{
        type:String,
        required: true
    },
    img:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{type:String,
        author:{type:ObjectId,ref:"User"}}],
    author:{
        type:ObjectId,
        ref:"User",
    },
},
{
    timestamps:true
}
)

const Blog = mongoose.model("blog",blogSchema);

module.exports = Blog;