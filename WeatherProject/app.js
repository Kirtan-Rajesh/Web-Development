const express= require("express");
const app=express();
const https=require("https");

app.get("/",function(req,res){
    https.get()
    res.send("Server is up and running.")
})

app.listen(3000,function(){
    console.log("Server");
})