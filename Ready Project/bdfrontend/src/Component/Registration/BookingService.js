import { useReducer, useState,useEffect } from "react";
import { Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
export default function BookingService()
{
    const init={

        customer_id:localStorage.getItem("custmerid"),
        booking_date:new Date(),
        appointment_date:new Date(),
        package_id:0,
        ser_cen_id:0,
        bike_id:0,
        bike_reg_no:"",
        base_price:0,
        extra_price:0,
        estimated_price:0,
        statusid:1

    };

    const reducer=(state,action) =>
    {
        switch(action.type)
        {
            case"update":
            return {...state,[action.fld]:action.value,};
            case "reset":
              return init;
        }
    }
    const[info,dispatch]=useReducer(reducer,init)
    const [allpackages, setAllpackages] = useState([]);
    const [allarea,setAllarea]=useState([]);
    const [allcities, setAllcities] = useState([]);
    const [allservicecenter,setAllservicecenter]=useState([]);
    const [allbrands, setAllbrands] = useState([]);
    const [allmodel, setAllmodel] = useState([]);

    const senddata = (e) => {
        e.preventDefault();
        const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        };
        fetch("http://localhost:8080/registerBooking", reqOptions)
          .then((resp) => {
            resp.json();
            console.log(resp.status);
            if (resp.status === 200) {
              alert("Registration Successful...!");
              
            } else {
              alert("Registration Failed.");
              window.location.reload();
            }
          })
          .catch((e) => {
            console.log(e);
            alert("Registration Failed.");
            window.location.reload();
          });
      };


    const getAreas = (id) => {
        fetch("http://localhost:8080/getAreaByCityId?id=" + id)
          .then((resp) => resp.json())
          .then((a) => setAllarea(a));
      }; 
      const getServiceCenter = (id) => {
        fetch("http://localhost:8080/getServiceCenterByAreaId?id=" + id)
          .then((resp) => resp.json())
          .then((a) => setAllservicecenter(a));
      };
      const getModel = (id) => {
        fetch("http://localhost:8080/getBikesByMakeId?id=" + id)
          .then((resp) => resp.json())
          .then((a) => setAllmodel(a));
      };

    useEffect(() => {
        fetch("http://localhost:8080/getAllPackages")
          .then((resp) => resp.json())
          .then((c) => setAllpackages(c));

          fetch("http://localhost:8080/getCities")
          .then((resp) => resp.json())
          .then((c) => setAllcities(c));
          
          fetch("http://localhost:8080/getMakes")
          .then((resp) => resp.json())
          .then((b) => setAllbrands(b));
    
      }, []); 

    return (
        <div style={{ backgroundColor: "white" }}
        className="container-fluid p-3 mb-3 text-black shadow rounded-4">
            <div className="container-fluid">
                <form>
                    <table className="tatble table table-striped">
                        <thead>
                        <tr>
                            <th colSpan={2}>
                                <h3>Book Appointment</h3><hr />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="form-gropu">
                                <td>
                                    <label>Appointment Date:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="date"
                                    id="appointment_date"
                                    placeholder="Enter first name"
                                    value={info.appointment_date.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"appointment_date",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                            <tr className="form-group">
                <td>
                  <label htmlFor="brandid"> Select Company</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="brandid"
                    name="brandid"
                    onChange={(e) => {
                        getModel(e.target.value);
                      dispatch({
                        type: "update",
                        fld: "cityid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allbrands.map((makes) => {
                      return (
                        <option value={makes.id} key={makes.id}>
                          {makes.brand}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="bike_id"> Select Model</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="bike_id"
                    name="bike_id"
                    onChange={(e) => {  
                      dispatch({
                        type: "update",
                        fld: "bike_id",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allmodel.map((bikes) => {
                      return (
                        <option value={bikes.id} key={bikes.id}>
                          {bikes.model}
                         
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-gropu">
                                <td>
                                    <label>Enter Bike Registration no:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="bike_reg_no"
                                    placeholder="Enter Bike Registration no"
                                    value={info.bike_reg_no.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"bike_reg_no",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="cityid"> Select City</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="cityid"
                    name="cityid"
                    onChange={(e) => {
                        getAreas(e.target.value);
                      dispatch({
                        type: "update",
                        fld: "cityid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allcities.map((city) => {
                      return (
                        <option value={city.id} key={city.id}>
                          {city.city}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="areaid"> Select Area</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="areaid"
                    name="areaid"
                    onChange={(e) => { 
                        getServiceCenter(e.target.value); 
                      dispatch({
                        type: "update",
                        fld: "areaid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allarea.map((area) => {
                      return (
                        <option value={area.id} key={area.id}>
                          {area.area}
                         
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="ser_cen_id"> Select Service Center</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="ser_cen_id"
                    name="ser_cen_id"
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "ser_cen_id",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allservicecenter.map((service_centre) => {
                      return (
                        <option value={service_centre.id} key={service_centre.id}>
                          {service_centre.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
                             <tr className="form-group">
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={(e) => {
                      senddata(e);
                    }}
                    
                  >
                    Submit
                  </button>
                </td>
                <td>
                  <button
                    type="reset"
                    className="btn btn-primary mb-3"
                    onClick={() => {
                      dispatch({ type: "reset" });
                    }}
                  >
                    clear
                  </button>
                </td>
              </tr>
              
            
             </tbody>

                    </table>
           
             <h4 style={{ textAlign: 'center' }}>Select Package</h4>
            <table class="table">
  <thead>
    <tr>
      <th scope="id">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Detais</th>
      <th scope="col">Cost</th>
      <th scope="col">Select</th>
    </tr>
  </thead>
  <tbody>
  {allpackages.map((packages) => (
            <tr>
            <td scope="row">{packages.id}</td>
            
            <td>{packages.name}</td>
            <td>{packages.details}</td>
            <td>{packages.cost}</td>
            <td><input
    type="radio"
    id="package_id"
     value={packages.id}
    onChange={(e) => {
      dispatch({ type: "update", fld: "package_id", value: e.target.value });
    }}
  />
            </td>
    </tr>
      ))}
  </tbody>

</table>
            <p>{JSON.stringify(info)}</p>
            </form>

</div>
        </div>
      )
    
}