const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const Razorpay = require("razorpay");

router.post('/order',async(req,res)=>{
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_g5Unq2KbUR4wwp",
      key_secret: "iRb8VrR8idNf71k3NhsscIan",
  });
  
  const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };
  
  instance.orders.create(options,(error,order)=>{
    if(error){
      console.log(error);
      return res.status(500).json({success: false});
    }
    res.status(200).json({data: order});
  })

  } catch (error) {
    console.log(error);
    res.status(500).json({success: false});
  }
});
  

router.post('/verify',async(req,res)=>{
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature} = req.body;
     const sign = razorpay_order_id + "|" + razorpay_payment_id;
     const expectedSign = crypto
     .createHmac("sha256","iRb8VrR8idNf71k3NhsscIan")
     .update(sign.toString())
     .digest("hex");

     if(razorpay_signature === expectedSign){
      return res.status(200).json({success: true})
     }
     else{
      return res.status(400).json({success: false});
     }
    }
   catch (error) {
    console.log(error);
    res.status(500).json({success: false});
  }
});

module.exports = router