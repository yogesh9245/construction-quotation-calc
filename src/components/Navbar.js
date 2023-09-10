import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {

    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem('authToken')
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CQC</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/pricing">Pricing</Link>
                            </li>

                            {(localStorage.getItem("authToken")) ?
                                <li className='nav-item'>
                                    <Link className='nav-link active fs-5' aria-current='page' to='/mybookings'>My Orders</Link>
                                </li>
                                : ""
                            }
                        </ul>

                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>

                                <Link className="btn bg-white text-suceess mx-1" to="/login">Login</Link>


                                <Link className="btn bg-white text-suceess mx-1" to="/createuser">SignUp</Link>

                            </div>
                            : 
                            <div>
                                <div className='btn btn-white text-success mx-2'>
                                    My Cart
                                </div>

                                <div className='btn btn-white text-success mx-2' onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>

                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}
