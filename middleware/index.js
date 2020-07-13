let middlewareObj = {},
    Review        = require("../models/review");

middlewareObj.checkReviewOwnership = function(req,res,next){
    if(req.isAuthenticated()){
        if(Review.review.username.equals(req.user.username)){
            next()
        }
        else
        {
            req.flash("error","You don't have permission to do that");
            res.redirect("back");
        }
    }
    else{
        req.flash("error","You need to be logged in to do that");
        res.redirect("back");
    }
}
    
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
	req.flash("error","You need to be logged in first to do that");
    res.redirect("/movies");
}

module.exports = middlewareObj;