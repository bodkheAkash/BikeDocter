

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AdminServiceCenterVerification() {
//   const [serviceCenters, setServiceCenters] = useState([]);

//   useEffect(() => {
//     fetchServiceCenters();
//   }, []);

//   const fetchServiceCenters = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/admin/servicecen");
//       setServiceCenters(response.data);
//     } catch (error) {
//       console.error("Error fetching service centers:", error);
//     }
//   };

//   const verifyServiceCenter = async (id) => {
//     try {
//       console.log("Verifying service center with ID:", id);
//       await axios.put(`http://localhost:8080/admin/servicecen/${id}`);
//       fetchServiceCenters();
//     } catch (error) {
//       console.error("Error verifying service center:", error);
//     }
//   };
  

//   const rejectServiceCenter = async (id) => {
//     try {
//       await axios.put(`http://localhost:8080/admin/servicecen/reject/${id}`);
//       fetchServiceCenters();
//     } catch (error) {
//       console.error("Error rejecting service center:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Service Center Verification</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Verified</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {serviceCenters.map((center) => (
//             <tr key={center.id}>
//               <td>{center.id}</td>
//               <td>{center.name}</td>
//               <td>{center.phone}</td>
//               <td>{center.email}</td>
//               <td>{center.status === 1 ? "Yes" : "No"}</td>
//               <td>
//                 {center.status === 0 && (
//                   <div>
//                     <button onClick={() => verifyServiceCenter(center.id)}>Verify</button>
//                     <button onClick={() => rejectServiceCenter(center.id)}>Reject</button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminServiceCenterVerification;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Table, Button } from "react-bootstrap"; // Import Bootstrap components

function AdminServiceCenterVerification() {
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
    fetchServiceCenters();
  }, []);

  const fetchServiceCenters = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/servicecen");
      setServiceCenters(response.data);
    } catch (error) {
      console.error("Error fetching service centers:", error);
    }
  };

  const verifyServiceCenter = async (id) => {
    try {
      console.log("Verifying service center with ID:", id);
      await axios.put(`http://localhost:8080/admin/servicecen/${id}`);
      fetchServiceCenters();
    } catch (error) {
      console.error("Error verifying service center:", error);
    }
  };

  const rejectServiceCenter = async (id) => {
    try {
      await axios.put(`http://localhost:8080/admin/servicecen/reject/${id}`);
      fetchServiceCenters();
    } catch (error) {
      console.error("Error rejecting service center:", error);
    }
  };

  return (
    <Container>
      <h1 className="mt-4">Service Center Verification</h1>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Verified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {serviceCenters.map((center) => (
            <tr key={center.id}>
              <td>{center.id}</td>
              <td>{center.name}</td>
              <td>{center.phone}</td>
              <td>{center.email}</td>
              <td>{center.status === 1 ? "Yes" : "No"}</td>
              <td>
                {center.status === 0 && (
                  <div>
                    <Button
                      variant="success"
                      onClick={() => verifyServiceCenter(center.id)}
                    >
                      Verify
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => rejectServiceCenter(center.id)}
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminServiceCenterVerification;

