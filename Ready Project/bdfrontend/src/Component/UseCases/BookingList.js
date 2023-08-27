import React, { useState } from "react";

export default function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const serviceCenterId = localStorage.getItem("serid"); // Replace with the actual service center ID

  const handleFetchBookings = () => {
    fetch(`http://localhost:8080/getBookingsByScId?scid=${serviceCenterId}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => setBookings(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
      });
  };

  return (
    <div>
      <h1>Appointment List for Service Center {serviceCenterId}</h1>
      <button onClick={handleFetchBookings}>Fetch Bookings</button>
      {error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <div>
          {bookings.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Booking Date</th>
                  <th>Appointment Date</th>
                  <th>Customer Phone</th>
                  <th>Bike Number</th>
                 
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.booking_date}</td>
                    <td>{booking.appointment_date}</td>
                    <td>{booking.customer.phone}</td>
                    <td>{booking.bike_reg_no}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No bookings available.</div>
          )}
        </div>
      )}
    </div>
  );
}
