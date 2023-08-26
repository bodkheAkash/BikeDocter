import React, { useState, useEffect } from "react";

export default function UpdateStatus() {
  const [bookings, setBookings] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]); // State to store all available statuses
  const [error, setError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});
  const serviceCenterId = localStorage.getItem("serid"); // Replace with the actual service center ID

  useEffect(() => {
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
  }, [serviceCenterId]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllStatuses")
      .then((resp) => resp.json())
      .then((statuses) => setAllStatuses(statuses))
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
      });
  }, []);

  const handleFetchBookings = () => {
    // Fetch bookings and update state
  };

  const handleStatusChange = (event, bookingId) => {
    setSelectedStatus((prevSelectedStatus) => ({
      ...prevSelectedStatus,
      [bookingId]: event.target.value,
    }));
  };
  

  const handleUpdateStatus = (bookingId) => {
    const statusId = selectedStatus[bookingId];
    if (!statusId) {
      // Handle error, status not selected
      return;
    }
  
    fetch(`http://localhost:8080/updateBookingStatus/${bookingId}?statusId=${statusId}`, {
      method: "PUT",
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((updatedBooking) => {
        // Handle updated booking response
      })
      .catch((error) => {
        console.error("Update error:", error);
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
                  <th>Customer ID</th>
                  <th>Bike Number</th>
                  <th>Service Status</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
              {bookings.map((booking) => (
                  <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.booking_date}</td>
                        <td>{booking.appointment_date}</td>
                        <td>{booking.customer.id}</td>
                        <td>{booking.bike_reg_no}</td>
                      <td> <select
                          value={selectedStatus[booking.id] || ""}
                          onChange={(event) => handleStatusChange(event, booking.id)}
                      >
                          <option value="">Select Status</option>
                          {allStatuses.map((status) => (
                              <option key={status.id} value={status.id}>
                                  {status.status}
                              </option>
                          ))}
                      </select></td>
                        <td><button onClick={() => handleUpdateStatus(booking.id)}>Update Status</button></td>
                        {/* Add more table cells as needed */}
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
