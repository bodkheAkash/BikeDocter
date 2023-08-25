import axios from "axios";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { DateTime } from '../DateTime';
import DateTime from "../../DateTime";


export default function ServiceCenterHome() {
  const [data, setData] = useState([]);
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();


  useEffect(() => {
    // var loginid = localStorage.getItem("loginid");
    const loginid= JSON.parse(localStorage.getItem("loggedUser")).id;
    // const scname= JSON.parse(localStorage.getItem("loggedUser")).name;
    fetch("http://localhost:8080/getScDetailsByLoginid?loginid="+loginid)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((jsonData) => {
        try {
          console.log("Received JSON data:", jsonData);
          setData(jsonData);
          localStorage.setItem("scid", jsonData.servicecenterid);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  
  

  useEffect(() => {
    if (mystate.logged === false) {
      navigate("/userlogin");
    }
    //showServiceCenterData();
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.2)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BikeDoctor
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/servicecentrehome"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Profile"
                  menuVariant="light"
                >
                  <NavDropdown.Item>
                    <Link to="servicecentreregistration" className="nav-link">
                      Update Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="changePwd" className="nav-link">
                      Change Password
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to="/viewbookings" className="nav-link px-3">
                  View Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="nav-link px-3"
                  //onClick={{ mystate: false }}
                  id="logout"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <div>
        <div
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            color: "black",
            padding: "10px",
          }}
        >
          <h3>Service Center - {data?.name}</h3>
        </div>
        <div style={{ backgroundColor: "lightgray",textAlign:"center" }}>{DateTime()}</div>
        <br />

        <Outlet />
      </div>
    </div>
    
  );
}

// export default ServiceHome()
// {

//     return(
//     <h1>In service centre Home</h1>
//     )
// }