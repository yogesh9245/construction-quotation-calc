import React, { useEffect, useState } from 'react'

export default function MyBooking() {
    const [bookData, setbookData] = useState([])
    const fetchData = async () => {
        // console.log(localStorage.getItem("userEmail"))
        try {
            const response = await fetch("http://localhost:5000/api/mybookings", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setbookData(data.bookData);
            } else {
                // Handle error if needed
                console.error('Error fetching data:', response.status);
            }
        } catch (error) {
            // Handle error if needed
            console.error('Error fetching data:', error);
        }

        console.log(bookData)
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <p>Email: {localStorage.getItem('userEmail')} </p>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ContractorName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bookData.length !== 0 ?
                        bookData.map((data, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{data.ContractorName}</td>
                                    <td> {data.email} </td>
                                    <td> {data.phone} </td>
                                    <td>{data.address}</td>
                                    <td>{data.date}</td>
                                </tr>
                            )
                        }) : ""
                    }:

                </tbody>
            </table>
        </div>
    )
}
