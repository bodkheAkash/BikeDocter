// import React, { useState } from "react";

// export default function UpdatePrice() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);
//   const serviceCenterId = 3; // Replace with the actual service center ID

//   const handleFetchBookings = () => {
//     fetch(`http://localhost:8080/getBookingsByScId?scid=${serviceCenterId}`)
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return resp.json();
//       })
//       .then((data) => setBookings(data))
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         setError(error);
//       });
//   };


// import React, { useState, useEffect } from "react";

// export default function UpdatePrice() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);
//   const [extraPrice, setExtraPrice] = useState(0);
//   const serviceCenterId = 3; // Replace with the actual service center ID

//   useEffect(() => {
//     fetch(`http://localhost:8080/getBookingsByScId?scid=${serviceCenterId}`)
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return resp.json();
//       })
//       .then((data) => setBookings(data))
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         setError(error);
//       });
//   }, [serviceCenterId]);

//     const handleFetchBookings = () => {
//     fetch(`http://localhost:8080/getBookingsByScId?scid=${serviceCenterId}`)
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return resp.json();
//       })
//       .then((data) => setBookings(data))
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         setError(error);
//       });
//   };

//   const handleUpdateExtraPrice = (bookingId) => {
//     fetch(`http://localhost:8080/updateExtraPrice/${bookingId}?extra_price=${extraPrice}`, {
//       method: "PUT",
//     })
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return resp.json();
//       })
//       .then((updatedBooking) => {
//         // Update the bookings with the updated booking
//         const updatedBookings = bookings.map((booking) =>
//           booking.id === updatedBooking.id ? updatedBooking : booking
//         );
//         setBookings(updatedBookings);
//         setExtraPrice(0); // Reset the extraPrice input
//       })
//       .catch((error) => {
//         console.error("Update error:", error);
//       });
//   };

import React, { useState, useEffect } from "react";

export default function UpdatePrice() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [extraPrice, setExtraPrice] = useState([]); // Array to hold extraPrice values for each row
  const serviceCenterId = localStorage.getItem("serid"); // Replace with the actual service center ID

  useEffect(() => {
    fetch(`http://localhost:8080/getBookingsByScId?scid=${serviceCenterId}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setBookings(data);
        setExtraPrice(new Array(data.length).fill(0)); // Initialize extraPrice for each row
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
      });
  }, [serviceCenterId]);
  const handleFetchBookings = () => {
    fetch(`http://localhost:8080/getBookingsByScId?scid=${serviceCenterId}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setBookings(data);
        setExtraPrice(new Array(data.length).fill(0)); // Initialize extraPrice values
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
      });
  };

  const handleUpdateExtraPrice = (bookingId, rowIndex) => {
    fetch(`http://localhost:8080/updateExtraPrice/${bookingId}?extra_price=${extraPrice[rowIndex]}`, {
      method: "PUT",
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((updatedBooking) => {
        // Update the bookings with the updated booking
        const updatedBookings = bookings.map((booking) =>
          booking.id === updatedBooking.id ? updatedBooking : booking
        );
        setBookings(updatedBookings);
        const newExtraPrice = [...extraPrice];
        newExtraPrice[rowIndex] = 0; // Reset the extraPrice for the specific row
        setExtraPrice(newExtraPrice);
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
                  <th>Customer ID</th>
                  <th>Package Name</th>
                  <th>Bike Name</th>
                  <th>Bike Number</th>
                  <th>Base Charges</th>
                  <th>Extra Charges</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
              {bookings.map((booking, rowIndex) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customer.id}</td>
                    <td>{booking.packages.name}</td>
                    <td>{booking.bike.model}</td>
                    <td>{booking.bike_reg_no}</td>
                    <td>{booking.packages.cost}</td> 
                  <td>
                    <input
                      type="number"
                      value={extraPrice[rowIndex]} // Use extraPrice[rowIndex]
                      onChange={(e) => {
                        const newExtraPrice = [...extraPrice];
                        newExtraPrice[rowIndex] = e.target.value; // Update the corresponding row's extraPrice
                        setExtraPrice(newExtraPrice);
                      }}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleUpdateExtraPrice(booking.id, rowIndex)}>Update</button>
                  </td>
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
