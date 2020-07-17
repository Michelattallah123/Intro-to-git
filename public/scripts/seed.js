const  mongoose     = require("mongoose"),
       axios        = require('axios').default,
       Movie        = require("../../models/movie"),
       User         = require("../../models/user"),
       Review        = require("../../models/review");

function seedDb()
{

    
                
                
    Movie.deleteMany({},function(err,success){});
    
        axios.get("http://www.omdbapi.com/?apikey=thewdb&t=star&plot=full").then(function(Movies){  
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+Movies.data.Title+'-trailer&key=AIzaSyCvnDc6m3-r4B_xb9wAeZyOFR-Cj1MGo2I').then(function(Trailer){
                var data = {
                    Title:         Movies.data.Title,
                    Plot:          Movies.data.Plot,
                    Poster:        Movies.data.Poster,
                    Year:          Movies.data.Year,
                    imdbID:        Movies.data.imdbID,
                    Released:      Movies.data.Released,
                    Runtime:       Movies.data.Runtime,
                    Genre:         Movies.data.Genre,
                    Director:      Movies.data.Director,
                    Writers:       Movies.data.Writer,
                    Actors:        Movies.data.Actors,
                    Trailer:       "http://www.youtube.com/embed/" + Trailer.data.items[0].id.videoId
                }

                Movie.create(data,function(err,addMovie)
                {   
                });
            });
        });
        axios.get("http://www.omdbapi.com/?apikey=thewdb&t=matrix&plot=full").then(function(Movies){  
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+Movies.data.Title+'-trailer&key=AIzaSyCvnDc6m3-r4B_xb9wAeZyOFR-Cj1MGo2I').then(function(Trailer){
                var data = {
                    Title:         Movies.data.Title,
                    Plot:          Movies.data.Plot,
                    Poster:        Movies.data.Poster,
                    Year:          Movies.data.Year,
                    imdbID:        Movies.data.imdbID,
                    Released:      Movies.data.Released,
                    Runtime:       Movies.data.Runtime,
                    Genre:         Movies.data.Genre,
                    Director:      Movies.data.Director,
                    Writers:       Movies.data.Writer,
                    Actors:        Movies.data.Actors,
                    Trailer:       "http://www.youtube.com/embed/" + Trailer.data.items[0].id.videoId
                }

                Movie.create(data,function(err,addMovie)
                {   
                });
            });
        });
        axios.get("http://www.omdbapi.com/?apikey=thewdb&t=spider-man&plot=full").then(function(Movies){  
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+Movies.data.Title+'-trailer&key=AIzaSyCvnDc6m3-r4B_xb9wAeZyOFR-Cj1MGo2I').then(function(Trailer){
                var data = {
                    Title:         Movies.data.Title,
                    Plot:          Movies.data.Plot,
                    Poster:        Movies.data.Poster,
                    Year:          Movies.data.Year,
                    imdbID:        Movies.data.imdbID,
                    Released:      Movies.data.Released,
                    Runtime:       Movies.data.Runtime,
                    Genre:         Movies.data.Genre,
                    Director:      Movies.data.Director,
                    Writers:       Movies.data.Writer,
                    Actors:        Movies.data.Actors,
                    Trailer:       "http://www.youtube.com/embed/" + Trailer.data.items[0].id.videoId
                }

                Movie.create(data,function(err,addMovie)
                {   
                });
            });
        });
    
    
   

    User.deleteMany({},function(err,success){});
    Review.deleteMany({},function(err,success){});

}
module.exports = seedDb;