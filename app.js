const express             = require('express'),
      axios               = require('axios').default;
      mongoose            = require("mongoose");
let   ejs                 = require('ejs'),
      Movie               = require("./models/movie.js"),
      seedDB              = require("./public/scripts/seed.js");

      
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/movie_app', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.static(__dirname + "/public")); 
// seedDB();
app.get("/",function(req,res){
    res.render("index.ejs");
});
app.listen(3000,function(){
	console.log("Alright, we are on!!!")
});
