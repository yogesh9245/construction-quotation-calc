const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Appointments = require('../models/Appointments')
const { body, validationResult } = require('express-validator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "YOGESHMANGHRNAICQCPROJECT"
router.post('/createuser', [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt);


        try {
            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            })

            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

router.post('/loginuser', [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Not a valid email id or password" })
            }

            let comparePassword = await bcrypt.compare(req.body.password, userData.password)
            if (!comparePassword) {
                return res.status(400).json({ errors: "Not a valid email id or password" })
            }

            const data = {
                user: {
                    id: userData._id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)
            return res.json({ success: true, authToken: authToken })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

router.post('/appointments', [
    body('email').isEmail()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await Appointments.create({
                name: req.body.name,
                email: req.body.email,
                phone:req.body.phone,
                address:req.body.address,
                date:req.body.date,
                ContractorName: req.body.ContractorName
            })

            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

router.post('/mybookings',async(req,res)=>{
    try {
        let myData = await Appointments.find({'email':req.body.email})
        res.json({bookData: myData})
    } catch (error) {
        res.send("Server Error",error.message)
    }
})

module.exports = router