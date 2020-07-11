const axios                    = require('axios').default,
      express                  = require('express'),
      mongoose                 = require("mongoose"),
      passport                 = require("passport"),
      LocalStrategy            = require("passport-local"),
      passportLocalMongoose    = require("passport-local-mongoose");

let   ejs                      = require('ejs'),
      Movie                    = require("./models/movie.js"),
      User                     = require("./models/user.js"),
      seedDB                   = require("./public/scripts/seed.js"),
      randomNum                = require("./public/scripts/randomNum.js"),
      movieRoutes              = require("./routes/movies.js"),
      authRoutes               = require("./routes/index.js");

//=============
//CONFIGURATION
//=============
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/movie_app', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.static(__dirname + "/public")); 

//=============
//PASSPORT
//=============
app.use(require("express-session")({
	secret: "my dirty secret",
	resave: false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// seedDB();

//=============
//ROUTES
//=============

//INDEX
app.get("/",function(req,res){
    res.redirect("/movies");
});

//MOVIES
app.use("/movies",movieRoutes);

//AUTH 
app.use(authRoutes);




app.listen(3000,function(){
	console.log("Alright, we are on!!!")
});
