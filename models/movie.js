var mongoose = require("mongoose");
var movieSchema = new mongoose.Schema({
    Title:         String,
    Plot:          String,
    Poster:        String,
    Rating:        Number,
    Year:          Date,
    imdbID:        String
 });
 module.exports = mongoose.model("Movie", movieSchema);
