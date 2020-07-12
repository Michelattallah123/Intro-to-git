var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");
    userSchema = new mongoose.Schema({
       name       : String,
       username   : String,
       password   : String,
       email      : String,
       favorites  : {}
    });

 userSchema.plugin(passportLocalMongoose);
 module.exports = mongoose.model("User", userSchema);
