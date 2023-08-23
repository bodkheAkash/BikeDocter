import { useEffect, useState } from "react";

export default function ViewServiceCenter()
{
    const[getAllServiceCenter,setAllServiceCenter]=useState();
    console.log(getAllServiceCenter)
    let index=0;

    useEffect(() => {

        fetch("http://localhost:8080/getAllServiceCenter")
        .then((resp) => resp.json())
        .then((c) =>setAllServiceCenter(c))

    },[])

    return(<div>

<h4 style={{ textAlign: 'center' }}>Service Center</h4>
            <table class="table">
  <thead>
    <tr>
      <th scope="id">No</th>
      <th scope="col">Service Center Name</th>
    </tr>
  </thead>
  <tbody>
   {getAllServiceCenter.map((service_centre) => (
            <tr>
            <td scope="row">{++index}</td>
    </tr>
      ))} 
  </tbody> 

</table>

    </div>)
}