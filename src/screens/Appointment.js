import React, { useState, useEffect } from 'react'
import CardContractor from '../components/CardContractor';
import Navbar from '../components/Navbar';
export default function Appointment() {

  const [Contractors, setContractors] = useState([])


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
    setContractors(response[3]);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
    <Navbar/>
    <div>
      {
        Contractors !== []
          ? Contractors.map((data) => {
            return (
              <div className='d-inline-flex row mb-3'>
                <div key={data._id} className='fs-3 m-5 col-12 col-md-6 col-lg-3'> {data.serviceName}
                  <CardContractor Name={data.Name} Phone={data.Phone} Ratings={data.Ratings} Experience = {data.Experience} />
                </div>
              </div>
            )
          })
          : ""
      }
    </div>
    </>
  )
}
