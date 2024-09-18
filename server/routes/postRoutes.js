// For sharing posts to the community
import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


/////////////////////


// Get All Posts route
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ sucess: true, data: posts }); // return all posts found to front-end
  } catch (error) {
    res.status(500).json({ sucess: false, data: error });
  }
});


// Create A Post route
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body; // req.body: the data sent from the front-end

    // upload image data to Cloudinary to store on the cloud, helping reduce the load on the local server
    const photoUrl = await cloudinary.uploader.upload(photo);

    // create and store a new post in the MongoDB database's Post collection
    const newPost = await Post.create({name, prompt, photo: photoUrl.url});

    res.status(201).json({ success: true, data: newPost }); // return  the created post data to front-end
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;