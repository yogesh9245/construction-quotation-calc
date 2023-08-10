import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
export default function CostCalculation(props) {
  const [total, setTotal] = useState(0);
    const [costData, setCostData] = useState([{}]);
    const location = useLocation();
  const { state } = location;
  const { selectedType, city } = state;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/getcosts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                type: selectedType,
                city: city,
              }),
            });
    
            if (response.ok) {
              const data = await response.json();
              console.log(data)
              setCostData(data.costData);
            } else {
              // Handle error if needed
              console.error('Error fetching data:', response.status);
            }
          } catch (error) {
            // Handle error if needed
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [selectedType, city]);

const calculateTotal = async()=>{
  let labour = costData[0].labour
  let equipment = costData[0].equipment
  let electricity = costData[0].electricity
  let watersupply = costData[0].watersupply
  let rawMaterial = costData[0].rawMaterial
  let days = 30;
  let totalcost = 0;
  if(selectedType === "Duplex" && city === "Nagpur"){
    days = 400;
    console.log(days)
    totalcost =  days*(labour + equipment + electricity + watersupply+rawMaterial);
    setTotal(totalcost);
  }
}      
  return (
    <>
    <div>
      Welcome to the page
    </div>
    <div className='container'>
      <div>Here is the estimated costs of various parameters included in the quotation</div>
      <div>City: {city}</div>
      <div>Type of house to be built: {selectedType} </div>
      <div>Labour cost per day: {costData[0].labour} </div>
      <div>Equipment cost per day: {costData[0].equipment}</div>
      <div>Electricity cost per day: {costData[0].electricity}</div>
      <div>Water Supply cost per day: {costData[0].watersupply}</div>
      <div>Raw Material cost per day: {costData[0].rawMaterial}</div>
      <div>Total cost for the entire construction: {total}</div>
    </div>
    <button onClick={calculateTotal}>Get the total cost</button>
    </>
  )
}
