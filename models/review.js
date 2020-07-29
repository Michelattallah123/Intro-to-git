var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    review:
        {
            rating: {
            type: Number,
            default:0
            },
            text: String,
            author: {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                username: String,
                name:     String
            },
            date:Date

                     
        }
    ,
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }
})

module.exports = mongoose.model("Review", reviewSchema);