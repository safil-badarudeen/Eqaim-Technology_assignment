//.env , async-error-handler
require("dotenv").config();
require("express-async-errors");

//express
const express = require('express');
const app = express();
const port = 3000;


//database(mongoDB)
const {dbConnection} = require('./db/db')

//router


//other
const morgan = require('morgan')

const notFoundMiddleware = require('./middleware/not-found')


//bodyParse middleware
app.use(express.json())

app.use(morgan('tiny'))



app.get('/',(req,res)=>{
    res.send("project is on")
})


app.use(notFoundMiddleware)







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
  

