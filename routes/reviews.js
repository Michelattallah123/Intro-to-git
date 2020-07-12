const express             = require("express"),
      router              = express.Router({mergeParams:true});
let   Movie               = require("../models/movie.js"),
      Review              = require("../models/review.js"),
      User                = require("../models/user.js");


router.get("/",function(req,res){
    Movie.findOne({'imdbID': req.params.id},function(err,movie){
        res.render("reviews/show.ejs",{movie:movie})
    })
});

router.post("/",function(req,res){
    Movie.findOne({'imdbID': req.params.id},function(err,movie){
        User.findOne({username:req.user.username},function(err,user){
            
        if(err)
        {
          
        }
        else{
                 
            Review.create({text:req.body.review},function(err,review){
                if(err){
console.log(err);
                }
                else{
                    movie.Reviews.push(review);
                    movie.save();
                    review.movie=movie;
                    review.author.username=req.user.username;
                    review.author.id=req.user;
                    review.save();
                    user.reviews.push(review);
                    user.save();
                    req.flash("success","Successfully added comment");
                    res.redirect('/movies/'+movie.imdbID);
                }
            });
        }
        });
        
    })
});

module.exports= router;