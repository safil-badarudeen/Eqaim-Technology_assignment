const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("project is on")
})

app.listen(port,(()=>{
    console.log(`server listening on ${port}`);
}))