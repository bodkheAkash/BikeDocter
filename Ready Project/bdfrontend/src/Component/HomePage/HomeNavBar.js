import { Link, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DateTime from "../../DateTime";
import './Home.css'; 


export default function HomenavBar() 
{   return(
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
                    <Link to="changepassword" className="nav-link">
                      Change Password
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to="viewServiceCenter" className="nav-link px-3">
                  View Service Centers
                </Link>
              </li>
              <li>
                <Link to="bookingservice" className="nav-link px-3">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="serviceprogress" className="nav-link px-3">
                  Service Progress
                </Link>
              </li>
              <li>
                <Link to="payment" className="nav-link px-3">
                  Payment
                </Link>
              </li>

              <li>
                <Link to="rating" className="nav-link px-3">
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

      
    </div>
) } 