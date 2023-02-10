require("dotenv").config();
require("express-async-errors");

const express = require('express');
const app = express();
const port = 3000;


//database
const {dbConnection} = require('./db/db')
app.get('/',(req,res)=>{
    res.send("project is on")
})


const start = async () => {
    try {
      await dbConnection(process.env.MONGO_URI);
      console.log("Database Connected")
      app.listen(port,(()=>{
        console.log(`server listening on port ${port}...`);
    }))
    } catch (error) {
     console.log({"Msg":error})
    }
  };



  start()
  

