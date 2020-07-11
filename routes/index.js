const express             = require("express"),
      router              = express.Router({mergeParams:true});
let   Movie               = require("../models/movie.js"),
      User                = require("../models/user.js");


      router.get("/register",function(req,res){
          res.render("register.ejs");
      });


module.exports= router;