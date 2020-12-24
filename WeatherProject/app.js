const express = require("express");
const https = require("https");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
 
   const query = "Bagalkote";
   const apikey ="5376343f5e90fc3143f9567e5bd696d5";
   const unit="metric"

   //const url="https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid=" +apikey+ "&units=" +unit;

      //https.get(url,function(response){
       //console.log(response.statusCode);

    //    response.on("data", function(data){
    //        const weatherData = JSON.parse(data);
    //        const temp = weatherData.main.temp;
    //        const weatherDescription= weatherData.weather[0].description;
    //        const icon = weatherData.weather[0].icon;
    //        const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
     
    //        res.write("<h1>The temperature in "+query+ " is "+temp+ "degreee celsius</h1>");
    //        res.write("<p>The weather is currently "+ weatherDescription+"</p>");
    //        res.write("<img src="+imageURL+">")
    //        res.send();
   
//}); 
//});
const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=5376343f5e90fc3143f9567e5bd696d5&units=metric";
https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
           const weatherData = JSON.parse(data);
           const temp = weatherData.main.temp;
           const weatherDescription= weatherData.weather[0].description;
           const icon = weatherData.weather[0].icon;
           const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
           res.write("<h1>The temperature in bagalkot is"+ temp+ "degreee celsius</h1>");
           res.write("<p>The weather is currently "+ weatherDescription+"</p>");
           res.write("<img src="+imageURL+">")
           res.send();
    
})
})
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})
