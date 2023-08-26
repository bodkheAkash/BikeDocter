import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DateTime from "../../DateTime";
import HomenavBar from "./HomeNavBar";

export default function CustomerHome() {
  const[user,setUser] =useState(null);
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();

  useEffect(() => {
    const id= JSON.parse(localStorage.getItem("loggedUser")).id;
    const loginid = JSON.parse(localStorage.getItem("loggedUser")).id;
    localStorage.setItem("loginid", loginid);
     console.log(loginid)
    fetch("http://localhost:8080/getCustomerdetails?loginid=" + loginid)
      .then(resp => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then(obj => {
        localStorage.setItem("CustomerUser", JSON.stringify(obj));
        const custmerid=JSON.parse(localStorage.getItem("CustomerUser")).id;
        localStorage.setItem("custmerid", custmerid);
        console.log("Customer id"+custmerid)
        setUser(obj);
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });

  
    if (mystate.logged === false) {
      navigate("/userlogin");
    }
   
  }, []);

  return (
    <div>
     <HomenavBar/>
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
        
      </div>
      <Outlet />
    </div>
  );
}
