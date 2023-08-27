// import React, { useState, useEffect } from "react";

// function ViewBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/admin/bookings")
//       .then((response) => response.json())
//       .then((data) => setBookings(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleVerify = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/admin/bookings/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           // Other fields you might want to update
//           statuses: {
//             id: 2, // Assuming 2 represents 'Verified' status
//           },
//         }),
//       });

//       if (response.ok) {
//         // Update the local state or fetch the data again
//         // setBookings(updatedBookings);
//         console.log("Booking verified successfully");
//       } else {
//         console.error("Failed to verify booking");
//       }
//     } catch (error) {
//       console.error("Error verifying booking:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>View Bookings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>Booking Date</th>
//             <th>Appointment Date</th>
            
//             {/* Add other columns you want to display */}
//             <th>Bike-Reg-No </th>
//             <th>Base Price </th>
//             <th>Extra Price </th>
//             <th>Estimated Price   </th>
           
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.id}>
//               <td>{booking.id}</td>
//               <td>{booking.booking_date}</td>
//               <td>{booking.appointment_date}</td>
              
              
//               <td>{booking.bike_reg_no}</td>
//               <td>{booking.base_price}</td>
//               <td>{booking.extra_price}</td>
//               <td>{booking.estimated_price}</td>
             
//               {/* Display verified status */}
//               <td>{booking.statuses.name}</td>
//               <td>
//                 {booking.statuses.name === "Not Verified" && (
//                   <button onClick={() => handleVerify(booking.id)}>Verify</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewBookings;


import React, { useState, useEffect } from "react";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/admin/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleVerify = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/admin/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Other fields you might want to update
          statuses: {
            id: 2, // Assuming 2 represents 'Verified' status
          },
        }),
      });

      if (response.ok) {
        // Update the local state or fetch the data again
        // setBookings(updatedBookings);
        console.log("Booking verified successfully");
      } else {
        console.error("Failed to verify booking");
      }
    } catch (error) {
      console.error("Error verifying booking:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">View Bookings</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Appointment Date</th>
            <th>Bike Reg No</th>
            <th>Base Price</th>
            <th>Extra Price</th>
            <th>Estimated Price</th>
            {/* <th>Status</th>
            <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.booking_date}</td>
              <td>{booking.appointment_date}</td>
              <td>{booking.bike_reg_no}</td>
              <td>{booking.base_price}</td>
              <td>{booking.extra_price}</td>
              <td>{booking.estimated_price}</td>
              <td>{booking.statuses.name}</td>
              <td>
                {booking.statuses.name === "Not Verified" && (
                  <button className="btn btn-primary" onClick={() => handleVerify(booking.id)}>
                    Verify
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBookings;
