const express = require("express");
const app = express();
app.get("/",(req,res)=> res.send("Welcome to Docker Hub Image Registry"))

app.listen(3000, ()=>{
    console.log("my port run in 3000")
})