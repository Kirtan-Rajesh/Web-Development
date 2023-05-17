//jshint esversioin:6
const express = require("express");

const app= express();
app.get("/",function(req, res){
    response.send("HELLO");
});

app.get("/contact",function(req, res){
    response.send("Contact me at 9422102188");
});

app.listen(3000,function(){
    console.log("Server has started on port 3000")
});