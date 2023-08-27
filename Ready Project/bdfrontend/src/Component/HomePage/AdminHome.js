import React from "react";

export default function AdminHome(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Verifycenters">VerifyServiceCenter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="allLogin">LoginData</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/allbooking">ViewBooking</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewTransactions">Transaction</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/payment">Payment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        
    )
}