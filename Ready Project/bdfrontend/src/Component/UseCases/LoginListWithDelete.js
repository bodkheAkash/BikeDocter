
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Css/LoginListWithDelete.css';

// function LoginListWithDelete() {
//   const [logins, setLogins] = useState([]);

//   useEffect(() => {
//     fetchLogins();
//   }, []);

//   const fetchLogins = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/admin/getallLogin'); // Replace with your API endpoint
//       setLogins(response.data);
//     } catch (error) {
//       console.error('Error fetching logins:', error);
//     }
//   };

//   // const handleDelete = async (id) => {
//   //   try {
//   //     await axios.delete(`http://localhost:8080/admin/login/deleteLogin/${id}`);
//   //     fetchLogins(); // Refresh the list of logins after deletion
//   //   } catch (error) {
//   //     console.error('Error deleting login:', error);
//   //   }
//   // };
//   const handleDelete = async (id) => {
//     console.log('Delete clicked for ID:', id); // Add this line
//     try {
//       await axios.delete(`http://localhost:8080/admin/login/deleteLogin/${id}`);
//       fetchLogins();
//     } catch (error) {
//       console.error('Error deleting login:', error);
//     }
//   };
  

//   return (
//     <div>
//       <h1>Login List with Delete</h1>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Username</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logins.map((login) => (
//             <tr key={login.id}>
//               <td>{login.id}</td>
//               <td>{login.username}</td>
//               <td>{login.password}</td>
//               <td>
//                 <button onClick={() => handleDelete(login.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LoginListWithDelete;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Css/LoginListWithDelete.css';

function LoginListWithDelete() {
  const [logins, setLogins] = useState([]);

  useEffect(() => {
    fetchLogins();
  }, []);

  const fetchLogins = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/getallLogin'); // Replace with your API endpoint
      setLogins(response.data);
    } catch (error) {
      console.error('Error fetching logins:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log('Delete clicked for ID:', id); // Add this line
    try {
      await axios.delete(`http://localhost:8080/admin/login/deleteLogin/${id}`);
      fetchLogins();
    } catch (error) {
      console.error('Error deleting login:', error);
    }
  };

  return (
    <div>
      <h1 className="mt-4">Login List with Delete</h1>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logins.map((login) => (
            <tr key={login.id}>
              <td>{login.id}</td>
              <td>{login.username}</td>
              <td>{login.password}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(login.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default LoginListWithDelete;
