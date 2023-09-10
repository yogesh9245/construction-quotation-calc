const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');

router.post('/sendmail',async(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yogeshmanghrani.9207@gmail.com',
          pass: 'iogs txkr wrcw xrzg'
        }
      });
      
      const mailOptions = {
        from: 'yogeshmanghrani.9207@gmail.com',
        to: req.body.email,
        subject: 'Subject',
        text: 'Email content'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
       res.json({ success: false })
        } else {
          console.log('Email sent: ' + info.response);
          res.json({ success: true })
        }
      });
})

module.exports = router