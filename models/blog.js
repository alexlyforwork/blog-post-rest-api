const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
},
    {timestamps: true}
)

module.exports = mongoose.model("Blog",BlogSchema)