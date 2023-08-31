import { useReducer, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function CustomerRegistration()
{
    const init={

        fname:{ value: "", hasError: true, touched: false, error: "" },
        lname:{ value: "", hasError: true, touched: false, error: "" },
        contactno:{ value: "", hasError: true, touched: false, error: "" },
        emailid:{ value: "", hasError: true, touched: false, error: "" },
        cityid:{ value: "", hasError: true, touched: false, error: "" },
        areaid:{ value: "", hasError: true, touched: false, error: "" },
        roleid:1,
        questionid:{ value: "", hasError: true, touched: false, error: "" },
        answer:{ value: "", hasError: true, touched: false, error: "" },
        userid:{ value: "", hasError: true, touched: false, error: "" },
        password:{ value: "", hasError: true, touched: false, error: "" },
        isFormValid:false
    };

    const validateData = (nm, val) => {
      let error = "", hasError=false;
      
      switch (nm) {
        case "email":
          const exp1 = /^[a-z0-9]{3,}@[a-z]{3,12}\.[a-z]{3,}$/;
  
          if (!exp1.test(val)) {
            hasError = true;
            error = "Invalid Email";
          } else {
            error = "";
          }
          break;
  
        case "password":
          const exp2 =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!exp2.test(val)) {
            hasError = true;
            error =
              "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
          } else {
            error = "";
          }
          break;
  
        case "fname":
          const exp3 = /^[\w\s]{3,}$/;
          if (!exp3.test(val)) {
            hasError = true;
            error = "Atleast 3 Charaters";
          } else {
            error = "";
          }
          break;
          
          case "lname":
          const exp4 = /^[\w\s]{3,}$/;
          if (!exp4.test(val)) {
            hasError = true;
            error = "Atleast 3 Charaters";
          } else {
            error = "";
          }
          break;


        case "phone":
          const exp6 = /^[0-9]{10}$/;
          if (!exp6.test(val)) {
            hasError = true;
            error = "Invalid Contact Number";
          } else {
            error = "";
          }
          break;
  
        case "answer":
          const exp8 = /[\w]{3,}$/;
          if (!exp8.test(val)) {
            hasError = true;
            error = "Please re-enter the answer";
          } else {
            error = "";
          }
          break;
  
        case "username":
          const exp7 = /^[a-zA-Z0-9_-]{3,16}$/;
          if (!exp7.test(val)) {
            hasError = true;
            error = "Username should be 3 to 16 letters long";
          } else {
            error = "";
          }
          break;      
      }
      return{hasError,error}
    }

    const reducer = (state, action) => {
      switch (action.type) {
        
        case 'update':
          {
            const{name,value,hasError,error,touched,isFormValid}=action.data;
            return {
               ...state,
               [name]: {...state[name],value,hasError,error,touched,isFormValid },
               isFormValid
               }
          }
          
        case 'reset':
          return init;
  
      }
  
    }

    
    const[info,dispatch]=useReducer(reducer,init)
    const [allarea,setAllarea]=useState([]);
    const [allcities, setAllcities] = useState([]);
    const [allques, setAllques] = useState([]);
    const [errors, setErrors] =useState([]);
    const navigate = useNavigate();
    
    const onInputChange = (name, value, dispatch) => {
      //validation logic
      const { hasError, error } = validateData(name, value); //form field, latest value
      //which key to be modified - value, hasError, error, touched 
      let isFormValid = true;
      for (const key in info) {
          let item = info[key];
         
          if (item.hasError) {
              isFormValid = false;
              break;
          }
      }
      dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
  }

  const onFocusOut = (name, value, dispatch) => {
    const { hasError, error } = validateData(name, value)
    let isFormValid = true
    for (const key in info) {
        const item = info[key]
        if (key === name && hasError) {
            isFormValid = false
            break
        } else if (key !== name && item.hasError) {
            isFormValid = false
            break
        }
    }
    dispatch({
        type: "update",
        data: { name, value, hasError, error, touched: true, isFormValid },
    })
  }
  

  const senddata = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(
        {
          fname:info.fname.value,
          lname:info.lname.value,
          contactno:info.contactno.value,
          emailid:info.emailid.value,
          cityid:info.cityid.value,
          areaid:info.areaid.value,
          roleid:5,
          questionid:info.questionid.value,
          answer:info.answer.value,
          userid:info.userid.value,
          password:info.password.value,
                
        }),   //Check this if error realted to body is thrown or ambuguity of info arises
    };

    fetch("http://localhost:8080/registercustomer", reqOptions)
    .then((resp) => {        
    console.log(resp.status); 
   if (resp.ok) {
      navigate("/userlogin");
     /*  alert("Registration Successful...!") */
      return resp.json();
    } else {
      alert("Registration Failed.");
      window.location.reload();
    }
  })
  .catch((error) => {
    console.error("Error during registration:", error);
    alert("Registration Failed.");
    // window.location.reload();
  });
      
  }


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
                        name="fname"
                        placeholder="Enter first name"
                        value={info.fname.value}
                        onChange={(e) => { onInputChange("fname", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("fname", e.target.value, dispatch) }}
                      />
                        <p className="invalid-feedback" style={{ display: info.fname.touched && info.fname.hasError ? "block" : "none", color: "red" }}> {info.fname.error} </p>
                    </td>
                  </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Last Name:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="lname"
                                    name="lname"
                                    placeholder="Enter last name"
                                    value={info.lname.value}
                                    onChange={(e) => { onInputChange("lname", e.target.value, dispatch) }}
                                    onBlur={(e) => { onFocusOut("lname", e.target.value, dispatch) }}
                                  />
                                  
                                  <p className="invalid-feedback" style={{ display: info.lname.touched && info.lname.hasError ? "block" : "none", color: "red" }}> {info.lname.error} </p>
                                </td>
                              </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Contact no:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="tel"
                                    id="conatctno"
                                    name="contactno"
                                    placeholder="Enter Contact number"
                                    value={info.contactno.value}
                                    onChange={(e) => { onInputChange("contactno", e.target.value, dispatch) }}
                                    onBlur={(e) => { onFocusOut("contactno", e.target.value, dispatch) }}
                                  />
                                  
                                  <p className="invalid-feedback" style={{ display: info.contactno.touched && info.contactno.hasError ? "block" : "none", color: "red" }}> {info.contactno.error} </p>
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
                                    name="emailid"
                                    placeholder="Enter Emailid"
                                    value={info.emailid.value}
                                    onChange={(e) => { onInputChange("emailid", e.target.value, dispatch) }}
                                    onBlur={(e) => { onFocusOut("emailid", e.target.value, dispatch) }}
                                  />
                                  
                                  <p className="invalid-feedback" style={{ display: info.emailid.touched && info.emailid.hasError ? "block" : "none", color: "red" }}> {info.emailid.error} </p>
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
                    value={info.cityid.value}
                    onChange={(e) => { getAreas(e.target.value); onInputChange("cityid", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("cityid", e.target.value, dispatch) }} 
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
                    value={info.areaid.value}
                    onChange={(e) => { onInputChange("areaid", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("areaid", e.target.value, dispatch) }} 
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
                    id="questionid"
                    name="questionid"
                    value={info.questionid.value}
                    onChange={(e) => { onInputChange("questionid", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("questionid", e.target.value, dispatch) }} 
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
                                    name="answer"
                    placeholder="Enter the answer"
                    value={info.answer.value}
                    onChange={(e) => { onInputChange("answer", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("answer", e.target.value, dispatch) }} 
                  />
                  
                  <p className="invalid-feedback" style={{ display: info.answer.touched && info.answer.hasError ? "block" : "none", color: "red" }}> {info.answer.error} </p>
                </td>
              </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>User ID:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="userid"
                                    name="userid"
                    placeholder="Enter userid"
                    value={info.userid.value}
                    onChange={(e) => { onInputChange("userid", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("userid", e.target.value, dispatch) }} 
                  />
                  
                  <p className="invalid-feedback" style={{ display: info.userid.touched && info.userid.hasError ? "block" : "none", color: "red" }}> {info.userid.error} </p>
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
                                    onChange={(e) => { onInputChange("password", e.target.value, dispatch) }}
                                    onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} 
                                  />
                                  
                                  <p className="invalid-feedback" style={{ display: info.password.touched && info.password.hasError ? "block" : "none", color: "red" }}> {info.password.error} </p>
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
           {/*  <p>{JSON.stringify(info)}</p> */}
        </div>
      )
  }