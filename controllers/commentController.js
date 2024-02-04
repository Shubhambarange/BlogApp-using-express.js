// import models
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

// business logic
exports.createComment = async (req, res) => {
    try {
        // fetch date of chrome request body?
        const { post, user, body } = req.body
        // Create a comment object
        const comment = new Comment({
            post, user, body
        })
        // Save the new comment into the database
        const savedComment = await comment.save()

        // Find the post by ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments") // Populates the comments array with comments documents
            .exec()

        res.json({
            post: updatedPost
        })
    }
    catch (err) {
        return res.status(500).json({
            error: "Error while creating comment"
        })
    }
}