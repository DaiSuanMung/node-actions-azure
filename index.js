const express = require("express");
const app = express();
app.get("/",(req,res)=> res.send("Welcome from Azure Node Docker with Actions"))

app.listen(3000, ()=>{
    console.log("my port run in 3000")
})