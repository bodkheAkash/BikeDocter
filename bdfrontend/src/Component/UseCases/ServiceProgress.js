import React, { useEffect, useState } from "react";

export default function ServiceProgress() {
    const custmerid = JSON.parse(localStorage.getItem("custmerid"))/* JSON.parse(localStorage.getItem("loggedUser")).id; */
    const [allbookings, setAllbookings] = useState([]);
    let index = 0;

    useEffect(() => {
        fetch("http://localhost:8080/getBookingByCustomerId?id=" + custmerid)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Failed to fetch data");
                }
                return resp.json();
            })
            .then((c) => setAllbookings(c))
            .catch((error) => {
                console.error("Error fetching data:", error);
                setAllbookings([]); // Set an empty array to handle the error
            });
    }, []);

    return (
        <div>
            <h4 style={{ textAlign: 'center' }}>Service Progress</h4>
            {allbookings.length === 0 ? (
                <p style={{ color: 'blue', textAlign: 'center' }}>No Booking Appointments</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="id">No</th>
                            <th scope="col">Booking Id</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Bike Model</th>
                            <th scope="col">Bike Name</th>
                            <th scope="col">Registration No</th>
                            <th scope="col">Status</th>
                            <th scope="col">Package Charges</th>
                            <th scope="col">Extra Charges</th>
                            <th scope="col">Total Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allbookings.map((bookings) => (
                            <tr key={bookings.id}>
                                <td scope="row">{++index}</td>
                                <td scope="row">{bookings.id}</td>
                                <td scope="row">{bookings.booking_date}</td>
                                <td scope="row">{bookings.appointment_date}</td>
                                <td scope="row">{bookings.bike.make.brand}</td>
                                <td scope="row">{bookings.bike.model}</td>
                                <td scope="row">{bookings.bike_reg_no}</td>
                                <td scope="row">{bookings.statuses.status}</td>
                                <td scope="row">{bookings.packages.cost}</td>
                                <td scope="row">{bookings.extra_price}</td>
                                <td scope="row">{bookings.estimated_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}