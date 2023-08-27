// import React, { useEffect, useState } from "react";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);
//   const [newExtraPrice, setNewExtraPrice] = useState('');
//   const [error, setError] = useState(null);
  

//   const fetchBookingsByServiceCenterId = (serviceCenterId) => {
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

//   const updateExtraPrice = () => {
//     const updatedBookings = bookings.map((booking) => {
//       if (booking.id === selectedBookingId) {
//         return { ...booking, extra_price: parseFloat(newExtraPrice) };
//       }
//       return booking;
//     });

//     setBookings(updatedBookings);

//     fetch(`http://localhost:8080/updateExtraPrice?id=${selectedBookingId}&extra_price=${newExtraPrice}`, {
//       method: 'PATCH',
//     })
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Network response was not ok");
//         }
//       })
//       .catch((error) => {
//         console.error("Update error:", error);
//         setError(error);
//       });
//   };


//   return (
//     <div>
//       <h1>Appointment List for Service Center</h1>
//       <button onClick={() => fetchBookingsByServiceCenterId()}>Fetch Bookings for Service Center 1</button>
//       {error ? (
//         <div>Error fetching data: {error.message}</div>
//       ) : (
//         <div>
//           {bookings.length > 0 ? (
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Booking Date</th>
//                   <th>Appointment Date</th>
//                   <th>Bike Reg No</th>
//                   <th>Base Price</th>
//                   <th>Extra Price</th>
//                   <th>Estimated Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                   {bookings.map((v) => (
//                     <tr key={v.id}>
//                       <td>{v.id}</td>
//                       <td>{v.booking_date}</td>
//                       <td>{v.appointment_date}</td>
//                       <td>{v.bike_reg_no}</td>
//                       <td>{v.base_price}</td>
//                       <td><input
//                         type="number"
//                         placeholder="Enter new Extra Price"
//                         value={newExtraPrice}
//                         onChange={(e) => setNewExtraPrice(e.target.value)}
//                       /></td>
//                       <td>{v.estimated_price}</td>
//                       <button onClick={updateExtraPrice}>Update Extra Price</button>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
            
//           ) : (
//             <div>No bookings available for the selected service center.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";

// export default function ViewBookings() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchAllBookings = () => {
//     fetch("http://localhost:8080/getAllBookings")
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

//   useEffect(() => {
//     // Fetch all bookings when the component mounts
//     fetchAllBookings();
//   }, []);

//   return (
//     <div>
//       <h1>Appointment List for Service Center</h1>
//       <button onClick={fetchAllBookings}>Fetch All Bookings</button>

//       {/* Display the bookings */}
//       {error ? (
//         <div>Error fetching data: {error.message}</div>
//       ) : (
//         <div>
//           {bookings.length > 0 ? (
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Booking Date</th>
//                   {/* Add more table headers as needed */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {bookings.map((booking) => (
//                   <tr key={booking.id}>
//                     <td>{booking.id}</td>
//                     <td>{booking.booking_date}</td>
//                     {/* Add more table cells as needed */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <div>No bookings available.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function ViewBookings() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);
//   const serviceCenterId = 3  ; /* Provide the service center ID */; // Replace with the actual service center ID

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

//   return (
//     <div>
//       <h1>Appointment List for Service Center {serviceCenterId}</h1>
//       {error ? (
//         <div>Error fetching data: {error.message}</div>
//       ) : (
//         <div>
//           {bookings.length > 0 ? (
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Booking Date</th>
//                   {/* Add more table headers as needed */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {bookings.map((booking) => (
//                   <tr key={booking.id}>
//                     <td>{booking.id}</td>
//                     <td>{booking.booking_date}</td>
//                     {/* Add more table cells as needed */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <div>No bookings available.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
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
                  {/* Add more table headers as needed */}
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
