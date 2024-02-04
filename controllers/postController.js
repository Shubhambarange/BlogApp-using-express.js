// import models
const Post = require("../models/postModel");

// business logic
exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        res.status(201).json({
            post: savedPost
        });
    } catch (err) {
        console.error(err);
        return res.status(400).json({
            error: "Error while creating Post"
        });
    }
};


exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("likes")
            .populate("comments")
            .exec();
        res.json({
            posts
        })
    }
    catch (err) {
        console.error(err);
        return res.status(400).json({
            error: "Error while getting Post"
        });

    }
}