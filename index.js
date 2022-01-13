const express = require("express");
const app = express();
app.get("/",(req,res)=> res.send("Welcome from Azure Node Docker with Actions Container"))

app.listen(3000, ()=>{
    console.log("my port run in 3000")
})