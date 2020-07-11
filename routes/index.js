const express             = require("express"),
      router              = express.Router({mergeParams:true}),
      flash               = require("connect-flash");
let   Movie               = require("../models/movie.js"),
      User                = require("../models/user.js"),
      passport            = require("passport");
     
//==========
//SIGN UP
//==========

      router.get("/register",function(req,res){
          res.render("register.ejs");
      });

     
      router.post("/register",function(req,res){
        var signUpUser={
            username: req.body.username,
            name:     req.body.userData["firstName"]+" "+req.body.userData["lastName"],
            email:    req.body.userData["email"]
        };
        User.register(signUpUser,req.body.password, function(err, user){
                    passport.authenticate("local")(req, res, function(){
                        req.flash("success","Welcome "+ user.name);
                        res.redirect("/movies");
                    })
                    
                })
            });
 
           



module.exports= router;