import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "200px", "maxWidth":"200px" }}>
                    <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." style={{"width":"200px","height":"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title"> <Link to={props.serviceName} > {props.serviceName} </Link></h5>
                        <p className="card-text"> {props.desc} </p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
