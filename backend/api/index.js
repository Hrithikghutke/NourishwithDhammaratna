const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();


mongoose.connect(process.env.MONGO_URL,{
    
}).then(console.log("Connected To MongoDB"))
  .catch(err=>{
    console.log(err)
  });

app.use("/",(req,res)=>{
    console.log("hey this is main url")
})

app.listen("3000", ()=>{
    console.log("Backend is Running")
})