const User = require('./model/user');
var bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const express = require('express');
// const cors = require('cors');

const app = express(); 
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

// app.use(cors());

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }


mongoose.connect("mongodb+srv://darshan:darsh123456@cluster0.6r0ou.mongodb.net/openauto?retryWrites=true&w=majority", {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});
app.get("/",(req,res)=>{
    res.send('Homepage');
})
app.post('/register', async(req,res)=>{
   
    const user = new User(req.body); 
    await user.save(); 
    res.send(user); 
})


const port = process.env.PORT || 5001; 
app.listen(port, ()=>{
    console.log(`Serving on port ${port}`); 
})
