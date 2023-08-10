const express = require('express')
const router = express.Router()
const Costs = require('../models/Costs')

router.post('/getcosts',async (req,res)=>{
    try {
        let myData = await Costs.find({type:req.body.type, city:req.body.city});
        res.json({costData: myData})
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

module.exports = router