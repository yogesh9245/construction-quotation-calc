import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import TypingEffect from '../components/TypingEffect'
import './BackgroundAnimation.css'
export default function Home() {
    const text = "WELCOME TO OUR SERVICES";
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
    }, [])
    return (
        <>
        <div>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 20 }}>
                <Navbar />
            </div>
            <div>
                <Carousel />
            </div>
            <div>
                <div className='d-flex flex-row justify-content-center fs-2'>
                    <TypingEffect text={text} />
                </div>
                {(!localStorage.getItem("authToken")) ? (
                    <div>Please login into the system first</div>
                ) : (
                    <div className="row justify-content-center m-3">
                        {Services.map((data) => (
                            <div key={data._id} className='col-12 col-md-6 col-lg-4 mb-3'>
                                {data.serviceName}
                                <Card serviceName={data.serviceName} desc={data.description} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}
