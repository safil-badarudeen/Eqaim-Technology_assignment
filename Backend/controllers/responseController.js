const { StatusCodes } = require('http-status-codes');
const customError=require('../errors')


const response = async(req,res)=>{
    const {numberOne,numberTwo} = req.body;
    console.log(numberOne,numberTwo); 
    res.json({ numberOne, numberTwo})
}

module.exports = {response}