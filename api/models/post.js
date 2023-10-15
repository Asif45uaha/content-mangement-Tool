import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    BlogName: {
        type: String
    },
    AuthorName: {
        type: String
    },
    PostDate: {
        type: Date,
        default: Date.now()
    },
    thumbnail: {
        type: String
    },
    content: {
        type: String,
    }
})

const postModel = mongoose.model("Posts", postSchema);
export default postModel;