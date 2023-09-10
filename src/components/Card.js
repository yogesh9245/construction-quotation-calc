import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
    return (
    
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "200px", "maxWidth": "600px" }}>
                <img src="https://source.unsplash.com/random?600x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title" > <Link to={props.serviceName} > {props.serviceName} </Link></h2>
                    <p className="card-text"> {props.desc} </p>
                </div>
            </div>

 
    )
}
