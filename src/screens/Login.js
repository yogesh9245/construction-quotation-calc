import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
export default function Login() {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    const json = await response.json()
    console.log(json)

    if (!json.success) {
      alert("Enter valid credentials")
    }

    if (json.success) {
      localStorage.setItem("userEmail",credentials.email)
      console.log("Email", localStorage.getItem("userEmail"))
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/')
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={handleChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to='/createuser' className='m-3 btn bt-primary'>New User</Link>
        </form>
      </div>
    </>
  )
}
