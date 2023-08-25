// import React, { useEffect, useState } from "react";

// export default function ViewBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/getAllBookings")
//       .then((resp) => resp.json())
//       .then((data) => setBookings(data)); // Use 'data' instead of 'bookings'
//   }, []);
//   // useEffect(() => {
//   //   fetch("http://localhost:8080/getAllBookings")
//   //     .then((resp) => resp.json())
//   //     .then((data) => setBookings(data))
//   //     .catch((error) => {
//   //       console.error("Fetch error:", error);
//   //     });
//   // }, []);
  
//   return (
//     <div>
//       <h1>Appointment List</h1>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Customer ID</th>
//             <th>Booking Date</th>
//             <th>Appointment Date</th>
//             <th>Package ID</th>
//             <th>Service Center ID</th>
//             <th>Bike ID</th>
//             <th>Bike Reg No</th>
//             <th>Base Price</th>
//             <th>Extra Price</th>
//             <th>Estimated Price</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((v) => (
//             <tr key={v.id}> {/* Added 'key' attribute */}
//               <td>{v.id}</td>
//               <td>{v.customer_id}</td>
//               <td>{v.booking_date}</td>
//               <td>{v.appointment_date}</td>
//               <td>{v.package_id}</td>
//               <td>{v.ser_cen_id}</td>
//               <td>{v.bike_id}</td>
//               <td>{v.bike_reg_no}</td>
//               <td>{v.base_price}</td>
//               <td>{v.extra_price}</td>
//               <td>{v.estimated_price}</td>
//               <td>{v.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
// import React, { useEffect, useState } from "react";

// export default function ViewBookings() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
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
//   }, []);

//   return (
//     <div>
//       {error ? (
//         <div>Error fetching data: {error.message}</div>
//       ) : (
//         <div>
//           <h1>Appointment List</h1>
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
//                 {bookings.map((v) => (
//                   <tr key={v.id}>
//                     <td>{v.id}</td>
                   
//                     <td>{v.booking_date}</td>
//                     <td>{v.appointment_date}</td>
                    
                    
//                     <td>{v.bike_reg_no}</td>
//                     <td>{v.base_price}</td>
//                     <td>{v.extra_price}</td>
//                     <td>{v.estimated_price}</td>
                   
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

//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const sercenid= JSON.parse(localStorage.getItem("loggedUser")).ser_cen_id;
//       const response = await axios.get('http://localhost:8080/getBookingByServiceCentreId?id='+sercenid);
//       const bookingsData = response.data; // Assuming the API returns an array of bookings
//       setBookings(bookingsData);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     }
//   };

//   // useEffect( ()=> {
//   //   const loginid= JSON.parse(localStorage.getItem("loggedUser")).id;
//   //   localStorage.setItem("sercenid",loginid)

//   //    fetch("http://localhost:8080/getCustomerdetails?sercenid="+loginid)
//   //    .then(resp => resp.json())
//   //    .then(obj => {
//   //        localStorage.setItem("loggedUser",JSON.stringify(obj))
//   //        setBookings(obj);
//   //    })
//   //    },[])
//   return (
//     <div>
//       <h1>Booking List</h1>
//       <table border="1px">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Bike Number</th>
//             <th>Booking Date</th>
//             <th>Appointment Date</th>
//             {/* ... Other Headers ... */}
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map(bookings => (
//             <tr key={bookings.id}>
//               <td>{bookings.id}</td>
//               <td>{bookings.bike_reg_no}</td>
//               <td>{bookings.booking_date}</td>
//               <td>{bookings.appointment_date}</td>
//               {/* ... Other Cells ... */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BookingList;







import React, { useEffect, useState } from "react";

export default function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const fetchBookingsByServiceCenterId = (serviceCenterId) => {
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
      <h1>Appointment List for Service Center</h1>
      <button onClick={() => fetchBookingsByServiceCenterId(3)}>Fetch Bookings for Service Center </button>
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
                  <th>Bike Reg No</th>
                  <th>Base Price</th>
                  <th>Extra Price</th>
                  <th>Estimated Price</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((v) => (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.booking_date}</td>
                    <td>{v.appointment_date}</td>
                    <td>{v.bike_reg_no}</td>
                    <td>{v.base_price}</td>
                    <td>{v.extra_price}</td>
                    <td>{v.estimated_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No bookings available for the selected service center.</div>
          )}
        </div>
      )}
    </div>
  );
}
