const express             = require('express'),
      axios               = require('axios').default;


const app = express();

app.use(express.static(__dirname + "/public")); 

app.get("/",function(req,res){
    // axios.get("http://www.omdbapi.com/?apikey=thewdb&p=1").then(function(Movies){
    //     console.log(Movies.data);
    // });
    res.render("index.ejs");
});
app.listen(3000,function(){
	console.log("Alright, we are on!!!")
});
