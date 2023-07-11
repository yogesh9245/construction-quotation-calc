const express = require('express')
const router = express.Router()

router.post('/quotationData',(req,res)=>{
    try {
        res.send([global.quotations,global.HouseCategory,global.Services,global.Contractors])
        console.log(global.quotations, global.HouseCategory)
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

module.exports = router