import { useEffect,useState } from "react";
import { json } from "react-router-dom";

export default function ServiceProgress()
{
    const custmerid=JSON.parse(localStorage.getItem("loggedUser")).id;
    console.log(custmerid);
    const [allbookings, setAllbookings] = useState([]);
    console.log(allbookings);
    let index=0;

    useEffect(() => {

        fetch("http://localhost:8080/getBookingByCustomerId?id="+custmerid)
          .then((resp) => resp.json())
          .then((c) => setAllbookings(c));


    },[]);
    return(
        <div>
        
            <h4 style={{ textAlign: 'center' }}>Service Progress</h4>
            <table class="table">
  <thead>
    <tr>
      <th scope="id">No</th>
      <th scope="col">Booking Date</th>
      <th scope="col">Appointment Date</th>
      <th scope="col">Bike Model</th>
      <th scope="col">Bike Name</th>
      <th scope="col">Registration No</th>
      <th scope="col">Status</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
   {allbookings.map((bookings) => (
            <tr>
            <td scope="row">{++index}</td>
            <td scope="row">{bookings.booking_date}</td>
            <td scope="row">{bookings.appointment_date}</td>
            <td scope="row">{bookings.bike.make.brand}</td>
            <td scope="row">{bookings.bike.model}</td>
            <td scope="row">{bookings.bike_reg_no}</td>
            <td scope="row">{bookings.statuses.status}</td> 
            <td scope="row">{bookings.estimated_price}</td>
            
    </tr>
      ))} 
  </tbody>

</table>
        </div>
    )
}