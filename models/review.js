var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    rating: Number,
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }
}, 
    {
        timestamps: true
    });

module.exports = mongoose.model("Review", reviewSchema);