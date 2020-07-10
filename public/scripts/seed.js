const  mongoose     = require("mongoose"),
       axios        = require('axios').default,
       Movie        = require("../../models/movie");

function seedDb()
{
	Movie.deleteMany({},function(err,success){
        axios.get("http://www.omdbapi.com/?apikey=thewdb&s=star").then(function(Movies){  
        for(let i=0;i<3;i++)
            {  
                Movies.data.Search[i]["Plot"]="Lucas and Anakin";     
                Movie.create(Movies.data.Search[i],function(err,addMovie){
                console.log(addMovie);
                });
            }
        });
    });
}
module.exports = seedDb;