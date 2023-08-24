import { useEffect,useState } from "react";

export function BookingList() {
  const [bookings, setEmps] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/getAllBookings")
      .then((resp) => resp.json())
      .then((data) => setEmps(data));
  }, []);

  return (
    <div>
      <h1>Bookings List</h1>
      <table className="table table-hover">
        <tbody>
          {
            bookings.map(v=>{
                return (
                        <tr>
                            <td>{v.package_id}</td>
                            <td>{v.ser_cen_id}</td>
                            <td>{v.bike_reg_no}</td>
                            {/* <td>{v.bike_id}</td>
                            <td>{v.grade}</td> */}

                        </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  );
}