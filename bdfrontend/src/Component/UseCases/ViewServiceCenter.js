// import { useEffect, useState } from "react";

// export default function ViewServiceCenter()
// {
//     const[getAllServiceCenter,setAllServiceCenter]=useState();
//     console.log(getAllServiceCenter)
//     let index=0;

//     useEffect(() => {

//         fetch("http://localhost:8080/getAllServiceCenter")
//         .then((resp) => resp.json())
//         .then((c) =>setAllServiceCenter(c))

//     },[])

//     return(<div>

// <h4 style={{ textAlign: 'center' }}>Service Center</h4>
//             <table class="table">
//   <thead>
//     <tr>
//       <th scope="id">No</th>
//       <th scope="col">Service Center Name</th>
//     </tr>
//   </thead>
//   <tbody>
//    {getAllServiceCenter.map((service_centre) => (
//             <tr>
//             <td scope="row">{++index}</td>
//     </tr>
//       ))} 
//   </tbody> 

// </table>

//     </div>)
// }
import React, { useEffect, useState } from "react";

export default function ViewServiceCenters() {
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/admin/service-centers/getAllServiceCenter")
      .then((resp) => resp.json())
      .then((data) => setServiceCenters(data));
  }, []);

  const handleVerify = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/service-centers/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            verified: true,
          }),
        }
      );
  
      console.log("Response:", response);

      if (response.ok) {
        // Update the verification status locally
        setServiceCenters((prevCenters) =>
          prevCenters.map((center) =>
            center.id === id ? { ...center, verified: true } : center
          )
        );
      }
    } catch (error) {
      console.error("Error verifying service center:", error);
    }
  };

  return (
    <div>
      <h4>Service Centers</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Verification Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {serviceCenters.map((center) => (
            <tr key={center.id}>
              <td>{center.id}</td>
              <td>{center.name}</td>
              <td>{center.verified ? "Verified" : "Not Verified"}</td>
              <td>
                {!center.verified ? (
                  <button onClick={() => handleVerify(center.id)}>
                    Verify
                  </button>
                ) : (
                  "Verified"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
