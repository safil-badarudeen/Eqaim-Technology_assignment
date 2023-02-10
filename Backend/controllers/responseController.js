const { StatusCodes } = require('http-status-codes');
const customError=require('../errors')


const response = async(req,res)=>{
    let {numberOne,numberTwo} = req.body;
     res.json({numberOne , numberTwo})
  }

module.exports = {response}