import React, { useState, useEffect } from 'react';

const BookingsForServiceCenter = ({ serviceCenterId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch(`https://localhost:7169/api/Bookings/servicecenter/${serviceCenterId}/bookings`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchBookings();
  }, [serviceCenterId]);

  return (
    <div className="booking-container">
      <h2>Bookings for Service Center {serviceCenterId}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="booking-list">
          {Array.isArray(bookings) && bookings.length > 0 ? (
            bookings.map(booking => (
              <li key={booking.id} className="booking-item">
                <p>Booking ID: {booking.id}</p>
                {/* Display other booking details here */}
              </li>
            ))
          ) : (
            <p>No bookings found for this service center.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default BookingsForServiceCenter;
