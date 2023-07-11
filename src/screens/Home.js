import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {

    // const [HouseCategory, setHouseCategory] = useState([])
    // const [Quotations, setQuotations] = useState([])
    const [Services, setServices] = useState([])


    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/quotationdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        // console.log(response[0],response[1]);
        // setQuotations(response[0]);
        // setHouseCategory(response[1]);
        setServices(response[2]);
    }

    useEffect(() => {
        loadData()
    },[])
    return (
        <div>
            <div> <Navbar /> </div>
            <div> <Carousel /> </div>
            <div >
                <div>
                    Welcome to our Services
                </div>
                {
                    Services !== []
                    ? Services.map((data)=>{
                        return(
                            <div className='d-inline-flex row mb-3'>
                            <div key={data._id} className='fs-3 m-3 col-12 col-md-6 col-lg-3'> {data.serviceName} 
                            <Card serviceName = {data.serviceName} desc = {data.description}/>
                            </div>
                            </div>
                        )
                    })
                    : ""
                }
            </div>
        </div>
    )
}
