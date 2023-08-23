import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DateTime from "../../DateTime";


export default function CustomerHome()
{
    
    const[user,setUser] =useState(null);

    useEffect( ()=> {
       const loginid= JSON.parse(localStorage.getItem("loggedUser")).id;
       localStorage.setItem("custmerid",loginid)

        fetch("http://localhost:8080/getCustomerdetails?loginid="+loginid)
        .then(resp => resp.json())
        .then(obj => {
            localStorage.setItem("loggedUser",JSON.stringify(obj))
            setUser(obj);
        })
        },[])


    return (
        <div>
          <nav
            className="navbar navbar-expand-lg bg-light"
            style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.2)" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Bike Doctor
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
                {/*   <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/userhome"
                    >
                      Home
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Profile"
                      menuVariant="light"
                    >
                      <NavDropdown.Item>
                        <Link to="/#" className="nav-link">
                          Update Profile
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="#" className="nav-link">
                          Change Password
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li className="nav-item">
                    <Link to="/viewServiceCenter" className="nav-link px-3">
                      View Service Centers
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/bookingservice" className="nav-link px-3">
                      Book Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="/serviceprogress" className="nav-link px-3">
                      Service Progress
                    </Link>
                  </li>
    
                  <li>
                    <Link to="#" className="nav-link px-3">
                      Rate A Service
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
          <div
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
          </div>
        </div>
      );
}
