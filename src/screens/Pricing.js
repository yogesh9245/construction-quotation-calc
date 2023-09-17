import React from 'react'
import './PricingComponent.css'
import Navbar from '../components/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Pricing() {

  const initPayment = (data)=>{
    const options = {
      key: "rzp_test_g5Unq2KbUR4wwp",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      handler:async(response)=>{
        try {
          const verifyUrl = "http://localhost:5000/api/verify";
          const {data} = await fetch(verifyUrl,response);
          console.log(data);
        } catch (error) {
          
        }
      }
    }
  }
  const handlePayment = async()=>{
    try {
      const orderUrl = "http://localhost:5000/api/order";
      const data = await fetch(orderUrl,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({amount: 100})
      })
      const response = await data.json();
      console.log(response);
      // initPayment(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card pricing-card">
            <div className="card-header pricing-card-header">
              <h3>Basic</h3>
            </div>
            <div className="card-body pricing-card-body">
              <h2>$19/month</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card pricing-card">
            <div className="card-header pricing-card-header">
              <h3>Pro</h3>
            </div>
            <div className="card-body pricing-card-body">
              <h2>$49/month</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card pricing-card">
            <div className="card-header pricing-card-header">
              <h3>Premium</h3>
            </div>
            <div className="card-body pricing-card-body">
              <h2>$99/month</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <button className="btn btn-info" onClick={handlePayment}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


