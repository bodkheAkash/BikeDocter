import axios from "axios";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import './Service.css'

// import { DateTime } from '../DateTime';
import DateTime from "../../DateTime";
import { logout } from "../../slice";

export default function ServiceHome() {
  const [data, setData] = useState([]);
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();


  useEffect(() => {
    // var loginid = localStorage.getItem("loginid");
    const loginid= JSON.parse(localStorage.getItem("loggedUser")).id;
    // const scname= JSON.parse(localStorage.getItem("loggedUser")).name;
    fetch("http://localhost:8080/getSetviceCentredetails?loginid="+loginid)

      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((jsonData) => {
          console.log("Received JSON data:", jsonData);
          setData(jsonData);
          localStorage.setItem("scid", JSON.stringify(jsonData) );
          const sercenid=JSON.parse(localStorage.getItem("scid")).id;
          localStorage.setItem("serid",sercenid);
          console.log(sercenid);
          const serivceCenterid=localStorage.getItem("serid");
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


  // const[user,setUser] =useState(null);
  // const mystate = useSelector((state) => state.logged);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const id= JSON.parse(localStorage.getItem("loggedUser")).id;
  //   const loginid = JSON.parse(localStorage.getItem("loggedUser")).id;
  //   localStorage.setItem("loginid", loginid);
  //    console.log(loginid)
  //   fetch("http://localhost:8080/getScDetailsByLoginid=" + loginid)
  //     .then(resp => {
  //       if (!resp.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return resp.json();
  //     })
  //     .then(obj => {
  //       localStorage.setItem("ServiceCentre", JSON.stringify(obj));
  //       const scid=JSON.parse(localStorage.getItem("ServiceCentre")).id;
  //       localStorage.setItem("servenid", scid);
  //       console.log("Service Centre id"+scid)
  //       setUser(obj);
  //     })
  //     .catch(error => {
  //       console.error("Fetch error:", error);
  //     });

  
  //   if (mystate.logged === false) {
  //     navigate("/userlogin");
  //   }
   
  // }, []);

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
                <Link to="viewbookings" className="nav-link px-3">
                  View Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="updateprice" className="nav-link px-3">
                  Update Price
                </Link>
              </li>
              <li className="nav-item">
                <Link to="updatestatus" className="nav-link px-3">
                  Update Status
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="nav-link px-3"
                  onClick={logout}
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

{/* <div
        style={{
          backgroundColor: "grey",
          textAlign: "center",
          color: "black",
        }}
      >
        <h3>
        Welcome - {user && user.fname} {user && user.lname}
        </h3>
      </div>
      <div style={{ backgroundColor: "lightgray",textAlign:"center"}}>{DateTime()}</div>
      <br />
      <div style={{ minHeight: "100%" }}>
        <Outlet />
      </div> */}


    </div>
    
  );
}
