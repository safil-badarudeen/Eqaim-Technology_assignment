const express = require('express')
const router=express.Router()
const {addition}=require('../controllers/responseController')


router.route('/addition').get(addition)



module.exports = router