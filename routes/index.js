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
//=========
//LOGIN
//=========
 
router.get("/login",function(req,res){
    res.render("login.ejs");
});

router.post("/login",passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true 
}) ,function(req, res){
});

//========
//LOGOUT
//========

    router.get("/logout", function(req, res){
        req.logout();
        req.flash("success","You Successfuly Logged Out!");
        res.redirect("/movies");
    });         



module.exports= router;