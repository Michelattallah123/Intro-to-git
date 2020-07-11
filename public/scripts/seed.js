const  mongoose     = require("mongoose"),
       axios        = require('axios').default,
       Movie        = require("../../models/movie"),
       User         = require("../../models/user");

function seedDb()
{
	Movie.deleteMany({},function(err,success){
        axios.get("http://www.omdbapi.com/?apikey=thewdb&t=star").then(function(Movies){  
                var data = {
                    Title:         Movies.data.Title,
                    Plot:          Movies.data.Plot,
                    Poster:        Movies.data.Poster,
                    Year:          Movies.data.Year,
                    imdbID:        Movies.data.imdbID
                }
                Movie.create(data,function(err,addMovie)
                {
                 console.log(addMovie);    
                });
        });
        axios.get("http://www.omdbapi.com/?apikey=thewdb&t=chungking-express").then(function(Movies){  
                var data = {
                    Title:         Movies.data.Title,
                    Plot:          Movies.data.Plot,
                    Poster:        Movies.data.Poster,
                    Year:          Movies.data.Year,
                    imdbID:        Movies.data.imdbID
                }
                Movie.create(data,function(err,addMovie)
                {
                 console.log(addMovie);    
                });
        });
        axios.get("http://www.omdbapi.com/?apikey=thewdb&t=the-shining").then(function(Movies){  
                var data = {
                    Title:         Movies.data.Title,
                    Plot:          Movies.data.Plot,
                    Poster:        Movies.data.Poster,
                    Year:          Movies.data.Year,
                    imdbID:        Movies.data.imdbID
                }
                Movie.create(data,function(err,addMovie)
                {
                 console.log(addMovie);    
                });
        });
    })
    User.deleteMany({},function(err,success){});
}
module.exports = seedDb;