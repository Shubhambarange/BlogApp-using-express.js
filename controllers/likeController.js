// import models
const Post = require("../models/postModel");
const Like = require("../models/likemodel");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body
        const like = new Like({
            post, user
        })
        const savedLike = await like.save()
        // Update the post collection basis on this 
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
            .populate('likes')
            .exec()
        res.json({
            post: updatedPost
        })

    }
    catch (err) {
        console.error(err);
        return res.status(400).json({
            error: "Error while getting Post"
        });
    }
}


exports.unLikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        // Find and delete the like based on its ID
        const deletedLike = await Like.findOneAndDelete({ _id: like });

        if (!deletedLike) {
            return res.status(404).json({
                error: "Like not found"
            });
        }

        // Update the post collection by pulling the deleted like's ID from the likes array
        const updatedPost = await Post.findOneAndUpdate(
            { _id: post, likes: deletedLike._id },
            { $pull: { likes: deletedLike._id } },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                error: "Post not found or like not associated with the post"
            });
        }

        res.json({
            post: updatedPost
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};
