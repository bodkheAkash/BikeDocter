import React from "react";
import { Link ,Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import DateTime from "../../DateTime";

export default function AdminHome(){

  // const[user,setUser] =useState(null);

  // useEffect( ()=> {
  //    const loginid= JSON.parse(localStorage.getItem("loggedUser")).id;
  //    localStorage.setItem("custmerid",loginid)

  //     fetch("http://localhost:8080/getCustomerdetails?loginid="+loginid)
  //     .then(resp => resp.json())
  //     .then(obj => {
  //         localStorage.setItem("loggedUser",JSON.stringify(obj))
  //         setUser(obj);
  //     })
  //     },[])

    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-light"
         style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.2)" }}
        >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         {/*  <a class="nav-link active" aria-current="page" href="/admin_Home">Home</a> */}
          <Link to="/admin_Home" className="nav-link px-3">Home</Link>
        </li>
        <li class="nav-item">
         {/*  <a class="nav-link" href="Verifycenters">VerifyServiceCenter</a> */}
          <Link to="/Verifycenters" className="nav-link px-3">VerifyServiceCenter</Link>
        </li>
        <li class="nav-item">
         {/*  <a class="nav-link" href="allLogin">LoginData</a> */}
          <Link to="/allLogin" className="nav-link px-3">LoginData</Link>
        </li>
        <li class="nav-item">
         {/*  <a class="nav-link" href="/allbooking">ViewBooking</a> */}
          <Link to="/allbooking" className="nav-link px-3">ViewBooking</Link>
        </li>
        <li class="nav-item">
         {/*  <a class="nav-link" href="/logout">Logout</a> */}
         <Link  to="/logout"className="nav-link px-3"
                      //onClick={{ mystate: false }}id="logout"
                       >
                      Logout
                    </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
        
    )
}