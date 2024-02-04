const mongoose = require('mongoose')

// route handler
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model("Comment", commentSchema)