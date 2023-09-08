import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// const nodemailer = require('nodemailer');


export default function BookApp() {
    let navigate = useNavigate()
    const location = useLocation();
    const Name = location.state?.Name;
    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", address: "" });
    const [timeChange, settimeChange] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/appointments", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                phone: credentials.phone,
                address: credentials.address,
                date: timeChange, // Update to use timeChange instead of credentials.date
                ContractorName: Name
            }),

        });
        const json = await response.json()
        console.log(json)


        if (!json.success) {
            alert("Enter valid credentials")
        }
        else{
            console.log("Entered successfully")
            navigate('/Appointment with the Contractor')
        }
    }

    

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleTimeChange = (e) => {
        const selectedDate = e.target.value;
        const selectedTimestamp = new Date(selectedDate).getTime();
        settimeChange(selectedTimestamp)
    }
    return (
        <>
            <div>
                Book Appointment
                <p>Name: {Name}</p>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputname" placeholder='Type in your name' value={credentials.name} name='name' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type in your email address' value={credentials.email} name='email' onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phone" placeholder='Type in your phone number' value={credentials.phone} name='phone' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" placeholder='Type in your address' value={credentials.address} name='address' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDate" className="form-label">Select the Date</label>
                        <input type="date" className="form-control" id="date" value={credentials.date} name='date' onChange={handleTimeChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}
