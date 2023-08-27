import { useReducer, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function CustomerRegistrationcopy()
{
    const init={

        fname:{ value: "", error: "", valid: false, touched: false },
        lname:{ value: "", error: "", valid: false, touched: false },
        contactno:{ value: "", error: "", valid: false, touched: false },
        emailid:{ value: "", error: "", valid: false, touched: false },
        cityid:0,
        areaid:0,
        roleid:1,
        questionid:0,
        answer:{ value: "", error: "", valid: false, touched: false },
        userid:{ value: "", error: "", valid: false, touched: false },
        password:{ value: "", error: "", valid: false, touched: false },
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
    const [allarea,setAllarea]=useState([]);
    const [allcities, setAllcities] = useState([]);
    const [allques, setAllques] = useState([]);
    const navigate = useNavigate();
   

    


    const validate = (nm, val) => {
      let error = "";
      let valid = false;
      let touched = true;
      switch (nm) {
        case "email":
          const exp1 = /^[a-z0-9]{3,}@[a-z]{3,12}\.[a-z]{2,}$/;
  
          if (!exp1.test(val)) {
            error = "Invalid Email";
          } else {
            error = "";
            valid = true;
          }
          break;
  
        case "password":
          const exp2 =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!exp2.test(val)) {
            error =
              "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
          } else {
            error = "";
            valid = true;
          }
          break;
  
        case "fname":
          const exp3 = /^[\w]{3,}$/;
          if (!exp3.test(val)) {
            error = "Atleast 3 Charaters";
          } else {
            error = "";
            valid = true;
          }
          break;
  
        case "lname":
          const exp4 = /^[\w]{3,}$/;
          if (!exp4.test(val)) {
            error = "Atleast 3 Charaters";
          } else {
            error = "";
            valid = true;
          }
          break;
  
        case "regno":
          const exp5 = /^[\w]{3,}$/;
          if (!exp5.test(val)) {
            error = "Invalid";
          } else {
            error = "";
            valid = true;
          }
          break;
  
        case "contactno":
          const exp6 = /^[0-9]{10}$/;
          if (!exp6.test(val)) {
            error = "Invalid Contact Number";
          } else {
            error = "";
            valid = true;
          }
          break;
  
  
        case "ans":
          const exp8 = /[\w]{3,}$/;
          if (!exp8.test(val)) {
            error = "Invalid";
          } else {
            error = "";
            valid = true;
          }
          break;
      }
  
      //console.log(val + "," + error + "," + valid);
      dispatch({ type: "update", fld: nm, value: val, error, valid, touched });
    };

    const senddata = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
      };
      fetch("http://localhost:8080/registercustomer", reqOptions)
        .then((resp) => {
          resp.json();
          console.log(resp.status);
          if (resp.status === 200) {
            navigate("/userlogin");
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
    
      useEffect(() => {
        fetch("http://localhost:8080/getCities")
          .then((resp) => resp.json())
          .then((c) => setAllcities(c));
    
         fetch("http://localhost:8080/getQuestions")
          .then((resp) => resp.json())
          .then((q) => setAllques(q)); 
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
                                <h3>Customer Registration</h3><hr />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="form-gropu">
                                <td>
                                    <label>First Name:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="fname"
                                    placeholder="Enter first name"
                                    name="fname"
                                    value={info.fname.value}
                                    onChange={(e)=>{validate("fname", e.target.value);}}
                                     />
                                </td>
                                <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.fname.valid && info.fname.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.fname.error}
                  </div>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Last Name:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="lname"
                                    placeholder="Enter last name"
                                    name="lname"
                                    value={info.fname.value}
                                    onChange={(e)=>{ validate("lname", e.target.value);}}
                                     />
                                       <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.lname.valid && info.lname.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.lname.error}
                  </div>
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Contact no:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="contactno"
                                    placeholder="Enter Contact number"
                                    name="contactno"
                                    value={info.fname.value}
                                    onChange={(e)=>{validate("contactno", e.target.value);}}
                                     />
                                      <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.contactno.valid && info.contactno.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.contactno.error}
                  </div>
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Email ID:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="email"
                                    id="emailid"
                                    placeholder="Enter Emailid"
                                    name="emailid"
                                    value={info.fname.value}
                                    onChange={(e)=>{validate("emailid", e.target.value);}}
                                     />
                                        <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.emailid.valid && info.emailid.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.emailid.error}
                  </div>
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
                    required
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
                    required
                    id="areaid"
                    name="areaid"
                    onChange={(e) => {
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
                  <label htmlFor="questionid"> Select Security Question</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    required
                    id="questionid"
                    name="questionid"
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "questionid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allques.map((q) => {
                      return (
                        <option value={q.id} key={q.id}>
                          {q.question}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-gropu">
                                <td>
                                    <label>Answer:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="answer"
                                    placeholder="Enter the answer"
                                    name="answer"
                                    value={info.answer.value}
                                    onChange={(e)=>{validate("answer", e.target.value);}}
                                     />
                                      <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.answer.valid && info.answer.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.answer.error}
                  </div>
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>User ID:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    required
                                    type="text"
                                    id="userid"
                                    placeholder="Enter userid"
                                    name="userid"
                                    value={info.userid.value}
                                    onChange={(e)=>{validate("userid", e.target.value);}}
                                     />
                                      <p
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.userid.valid && info.userid.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.userid.error}
                  </p>
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Password:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={info.password.value}
                                    onChange={(e)=>{validate("password", e.target.value);}}
                                     />
                                       <p
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.password.valid && info.password.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.password.error}
                  </p>
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
                </form>

            </div>
            <p>{JSON.stringify(info)}</p>
        </div>
      )
  }

