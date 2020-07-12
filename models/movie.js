var mongoose = require("mongoose");
var movieSchema = new mongoose.Schema({
    Title:         String,
    Plot:          String,
    Poster:        String,
    Reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    Rating: {
        type: Number,
        default: 0
    },
    Year:          Date,
    imdbID:        String
 });
 module.exports = mongoose.model("Movie", movieSchema);
