import { useState } from "react";
import DateTime from "../../DateTime";

export default function UserHome() {
  const [user, setUser] = useState();
    setUser(localStorage.getItem("loggedUser"));

  return (
    <div>
      <h3>
        Welcome - {user && user.fname} {user && user.lname}
      </h3>
      <div style={{ backgroundColor: "lightgray", textAlign: "center" }}>{DateTime()}</div>
      <br />
      <div style={{ minHeight: "100%" }}></div>
    </div>
  );
}