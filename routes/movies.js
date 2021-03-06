const express             = require("express"),
      router              = express.Router({mergeParams:true}),
      axios               = require('axios').default; 
let   Movie               = require("../models/movie.js"),
      Review              = require("../models/review.js"),
      User                = require("../models/user.js");

router.get("/",function(req,res){
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Movie.find({Title:regex},function(err,movies){
            res.render("index.ejs",{movies:movies});
            });
    }
    else
    {
    Movie.find({},function(err,movies){
    res.render("index.ejs",{movies:movies});
    });
    }
});

router.get("/:id",function(req,res){
    Movie.findOne({imdbID:req.params.id}).populate('Reviews').exec(function(err,movie){
        res.render("./movies/show.ejs",{movie:movie});
    });});

       
    
    function escapeRegex(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };

module.exports= router;