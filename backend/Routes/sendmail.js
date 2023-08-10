const nodemailer = require('nodemailer');
const express = require('express')
const router = express.Router()

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yogeshmanghrani.9245@gmail.com',
    pass: 'yog92458242',
  },
});

// Email data


// Send email

router.post('/sendmail',async (req,res)=>{
    const mailOptions = {
        from: 'yogeshmanghrani.9245@gmail.com',
        to: req.body.email,
        subject: 'Test Email from Node.js',
        text: 'Hello, this is a test email sent from Node.js using Nodemailer.',
      };
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Error occurred:', error.message);
            } else {
              console.log('Email sent successfully!');
              console.log('Message ID:', info.messageId);
            }
          });
        res.send("<h1>Mail has been sent successfully</h1>")
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})
module.exports = router