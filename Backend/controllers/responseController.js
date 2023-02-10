const { StatusCodes } = require('http-status-codes');
const customError=require('../errors')


const addition = async(req,res)=>{
    let {numberOne,numberTwo} = req.body;
    
    let carryString = "";
    let sumString = "";
    let carry = 0;
  
    numberOne = numberOne.toString().split("").reverse().join("");
    numberTwo = numberTwo.toString().split("").reverse().join("");
  
    let result = {};
    let step = 1;
    for (let i = 0; i < numberOne.length || i < numberTwo.length; i++) {
      let a = parseInt(numberOne[i] || 0);
      let b = parseInt(numberTwo[i] || 0);
      let sum = a + b + carry;
  
      if (sum >= 10) {
        carry = 1;
        carryString = "1" + carryString;
        sum = sum - 10;
      } else {
        carry = 0;
        carryString = "_" + carryString;
      }
  
      sumString = sum.toString() + sumString;
      result[`step${step}`] = {
        carryString: carryString,
        sumString: sumString,
      };
      step++;
    }
  
    if (carry) {
      carryString = "1" + carryString;
      sumString = "1" + sumString;
    }
  
    result[`step${step}`] = {
      carryString: carryString,
      sumString: sumString,
    };
     res.json(result)
  }

module.exports = {addition}