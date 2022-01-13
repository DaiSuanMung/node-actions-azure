const express = require("express");
const app = express();
app.get("/",(req,res)=> res.send("Welcome to Node Actions in Azure"))

app.listen(3000, ()=>{
    console.log("my port run in 3000")
})