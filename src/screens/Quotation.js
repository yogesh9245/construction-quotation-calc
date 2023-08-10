import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Quotation() {
    const [selectedType, setSelectedType] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const dataToPass = {
          selectedType,
          city,
        };
        console.log(selectedType);
        navigate('/cost-calculation', { state: dataToPass });
      };
    return (
        <div className='container'>
            <div>
                Welcome to the Quotation Calculation Services
            </div>
            <form method='POST' onSubmit={handleFormSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPlotSize" class="form-label">Enter the Plot Size(in sq. feet)</label>
                    <input type="number" class="form-control" id="exampleInputPlotSize" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputCity" class="form-label">Select your city</label>
                    <select name="city" id="city" className='m-3' value={city} onChange={(e)=>{
                        setCity(e.target.value);
                    }}>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Gondia">Gondia</option>
                    </select>
                    <div>Your selected {city}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputRooms" class="form-label">Number of rooms</label>
                    <input type="number" class="form-control" id="rooms" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputAddress" class="form-label">Enter the address</label>
                    <input type="number" class="form-control" id="address" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPincode" class="form-label">Enter the Pincode</label>
                    <input type="number" class="form-control" id="pincode" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputType" class="form-label">Select the type of the house</label>
                    <select name="type" id="type" className='m-3' value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="Duplex">Duplex</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Simple">Simple</option>
                        <option value="Flat">Flat</option>
                    </select>
                    <div>Your selected {selectedType}</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
