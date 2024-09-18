import mongoose from "mongoose";

// The Post schema is defined using Mongoose
// When the Post.create() method is called, Mongoose inserts a new document in the Post collection with the provided values.
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;