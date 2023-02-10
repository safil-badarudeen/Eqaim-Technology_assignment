const express = require('express')
const router=express.Router()
const {response}=require('../controllers/responseController')


router.route('/response').get(response)



module.exports = router