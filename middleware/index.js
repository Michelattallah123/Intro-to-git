let middlewareObj = {},
    Review        = require("../models/review");

middlewareObj.checkReviewOwnership = function(req,res,next){
    if(req.isAuthenticated()){
        Review.findById(req.params.id_review,function(err,foundReview){
            if(err)
            {
                req.flash("error","Review not found");
                res.redirect("/movies");
            }
            else{
                if(foundReview.review.author.username=req.user.username){
                    next()
                }
                else
                {
                    req.flash("error","You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });

        
    }
    else
    {
        req.flash("error","You need to be logged in first to do that");
        res.redirect("/movies");
    }
};
    
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
	req.flash("error","You need to be logged in first to do that");
    res.redirect("/movies");
}

module.exports = middlewareObj;