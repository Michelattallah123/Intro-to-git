var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");
    userSchema = new mongoose.Schema({
       name       : String,
       username   : String,
       password   : String,
       email      : String,
       favorites  : {},
       reviews: [
         {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Review"
         }
       ]
    });

 userSchema.plugin(passportLocalMongoose);
 module.exports = mongoose.model("User", userSchema);
