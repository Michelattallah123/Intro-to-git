const express             = require("express"),
      router              = express.Router({mergeParams:true});
let   Movie               = require("../models/movie.js");

router.get("/",function(req,res){
    Movie.find({},function(err,movies){
    res.render("index.ejs",{movies:movies});
    });
});

router.get("/:id",function(req,res){
    Movie.findOne({imdbID:req.params.id},function(err,movie){
        res.render("./movies/show.ejs",{movie:movie});
    });});

       
    


module.exports= router;