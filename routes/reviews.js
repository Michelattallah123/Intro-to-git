const express             = require("express"),
      router              = express.Router({mergeParams:true}),
      middleware          = require("../middleware");
let   Movie               = require("../models/movie.js"),
      Review              = require("../models/review.js"),
      User                = require("../models/user.js");
      


router.get("/",function(req,res){
    Movie.findOne({'imdbID': req.params.id},function(err,movie){
        res.render("reviews/show.ejs",{movie:movie})
    })
});

router.post("/",middleware.isLoggedIn,function(req,res){
    Movie.findOne({'imdbID': req.params.id},function(err,movie){
        User.findOne({username:req.user.username},function(err,user){
            
            if(err)
            {
              
            }
            else{
                    Review.create({},function(err,review){
                    if(err){
                        console.log(err);
                    }
                    else{
                            const newReview = {
                                text:req.body.review,
                                author:{
                                    id:         req.user,
                                    username:   req.user.username,
                                    name:       req.user.name
                                },
                                rating:req.body.rating
                            }
                            review.movie=movie;
                            review.review = newReview;
                            review.save();
                            movie.Reviews.push(review);
                            movie.save();
                            user.reviews.push(review);
                            user.save();
                            req.flash("success","Successfully added comment");
                            res.redirect('/movies/'+movie.imdbID);
                    }
                });
            }
        });
    });
});

router.put("/:id_review",middleware.checkReviewOwnership,function(req,res){
    Movie.findOne({imdbID:req.params.id},function(err,movie){
        if(err){
            req.flash("error","Movie not found");
		   return res.redirect("/");
        }
        else{
            Review.findById(req.params.id_review,function(err,review){
                if(err){
                    req.flash("error","Review not found");
		   return res.redirect("/");
                }
                else{
                    review.review.text=req.body.edit;
                    review.save();
                    res.redirect('/movies/'+movie.imdbID);
                }
            });
        }
    });
});

router.delete("/:id_review",middleware.checkReviewOwnership,function(req,res){
    Review.findByIdAndDelete(req.params.id_review,function(err,review){
        if(err){
           req.flash("error","Error occured while trying to delete the review");
		   return res.redirect("/");
        }
        else{

           User.findById(req.user._id,function(err,foundUser){
           let i = foundUser.reviews.indexOf(req.params.id_review);
           if (i> -1) {
            foundUser.reviews.splice(i, 1);
           }
           foundUser.save();

           Movie.findOne({imdbID:req.params.id},function(err,foundMovie){
               console.log(foundMovie);
           i = foundMovie.Reviews.indexOf(req.params.id_review);
            if (i> -1) {
             foundMovie.Reviews.splice(i, 1);
            }
            foundMovie.save();

           req.flash("success","Review successfully deleted");
           res.redirect("/movies/" + req.params.id);
            });
           });
           
        }
    });
});

module.exports= router;