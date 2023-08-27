import { useReducer, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function ServiceCenterRegistration() {
  const init = {

    name: { value: "", hasError: true, touched: false, error: "" },
    phone: { value: "", hasError: true, touched: false, error: "" },
    email: { value: "", hasError: true, touched: false, error: "" },
    cityid: { value: "", hasError: true, touched: false, error: "" },
    area_id: { value: "", hasError: true, touched: false, error: "" },
    user_type_id: 5,
    question_id: { value: "", hasError: true, touched: false, error: "" },
    answer: { value: "", hasError: true, touched: false, error: "" },
    username: { value: "", hasError: true, touched: false, error: "" },
    password: { value: "", hasError: true, touched: false, error: "" },
    isFormValid:false
  };
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "update":
  //       return {
  //         ...state,
  //         [action.fld]: {
  //           ...state[action.fld],
  //           value: action.value,
  //           error: action.error,
  //           valid: action.valid,
  //           touched: action.touched,
  //         },
  //       };
  //     case "reset":
  //       return init;
  //   }
  // };


  // const [info, dispatch] = useReducer(reducer, init)
  // const [allarea, setAllarea] = useState([]);
  // const [allcities, setAllcities] = useState([]);
  // const [allques, setAllques] = useState([]);
  // const navigate = useNavigate();
  // const reduxAction = useDispatch();

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

      case "name":
        const exp3 = /^[\w\s]{3,}$/;
        if (!exp3.test(val)) {
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

  const [info, dispatch] = useReducer(reducer, init)
  const [allarea, setAllarea] = useState([]);
  const [allcities, setAllcities] = useState([]);
  const [allques, setAllques] = useState([]);
  const [errors, setErrors] = useState({});
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
          name:info.name.value,
          phone:info.phone.value,
          email:info.email.value,
          cityid:info.cityid.value,
          area_id:info.area_id.value,
          user_type_id:5,
          question_id:info.question_id.value,
          answer:info.answer.value,
          username:info.username.value,
          password:info.password.value,
                
        }),   //Check this if error realted to body is thrown or ambuguity of info arises
    };

    fetch("http://localhost:8080/registerservicecentre", reqOptions)
  // .then((resp) => resp.json()) // Parse the JSON response
  // .then((data) => {
  //   alert("Status: "+data.status); // Assuming your response has a status property
  //   alert("Data: "+data);
  .then((resp) => {
        
    console.log(resp.status); 
   if (resp.ok) {
    return resp.json()
    // if (data.status === 200) {
      navigate("/userlogin");
      alert("Registration Successful...!");
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th colSpan={2}>
                  <h3>Service Centre Registration</h3><hr />
                </th>
              </tr>
            </thead>
            <tbody>

              <tr className="form-group">
                <td>
                  <label>Service Centre Name:</label>
                </td>
                <td>
                  <input className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Service Centre name"
                    value={info.name.value}
                    onChange={(e) => { onInputChange("name", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("name", e.target.value, dispatch) }} 
                  />
                  <div id="name" className="form-text">....</div>
                  <p className="invalid-feedback" style={{ display: info.name.touched && info.name.hasError ? "block" : "none", color: "red" }}> {info.name.error} </p>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label>Contact no:</label>
                </td>
                <td>
                  <input className="form-control"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Contact number"
                    value={info.phone.value}
                    onChange={(e) => { onInputChange("phone", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("phone", e.target.value, dispatch) }} 
                  />
                  <div id="name" className="form-text">....</div>
                  <p className="invalid-feedback" style={{ display: info.phone.touched && info.phone.hasError ? "block" : "none", color: "red" }}> {info.phone.error} </p>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label>Email ID:</label>
                </td>
                <td>
                  <input className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Emailid"
                    value={info.email.value}
                    onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("email", e.target.value, dispatch) }} 
                  />
                  <div id="name" className="form-text">....</div>
                  <p className="invalid-feedback" style={{ display: info.phone.touched && info.phone.hasError ? "block" : "none", color: "red" }}> {info.phone.error} </p>
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
                    id="area_id"
                    name="area_id"
                    value={info.area_id.value}
                    onChange={(e) => { onInputChange("area_id", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("area_id", e.target.value, dispatch) }} 
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
                    id="question_id"
                    name="question_id"
                    value={info.question_id.value}
                    onChange={(e) => { onInputChange("question_id", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("question_id", e.target.value, dispatch) }} 
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
              <tr className="form-group">
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
                  <div id="name" className="form-text">....</div>
                  <p className="invalid-feedback" style={{ display: info.answer.touched && info.answer.hasError ? "block" : "none", color: "red" }}> {info.answer.error} </p>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label>User ID:</label>
                </td>
                <td>
                  <input className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter userid"
                    value={info.username.value}
                    onChange={(e) => { onInputChange("username", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("username", e.target.value, dispatch) }} 
                  />
                  <div id="name" className="form-text">....</div>
                  <p className="invalid-feedback" style={{ display: info.username.touched && info.username.hasError ? "block" : "none", color: "red" }}> {info.username.error} </p>
                </td>
              </tr>
              <tr className="form-group">
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
                  <div id="name" className="form-text">....</div>
                  <p className="invalid-feedback" style={{ display: info.password.touched && info.password.hasError ? "block" : "none", color: "red" }}> {info.password.error} </p>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={(e) => {
                      // console.log(e)
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
