import { useReducer, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import CustomerHome from "../HomePage/CustomerHome";
import { useDispatch } from "react-redux";
import { login } from "../../slice";

export default function LoginNewPage()

{
    const init ={

        uid:"",
        pwd:""

    }

    const reducer = (state , action)=>{
         switch(action.type)
         {
             case 'update':
                return {...state , [action.fld]:action.val}
            
             case 'reset':
                return init;
         }
    }

    const [info,dispatch]=useReducer(reducer,init)
    const [msg,setMsg] = useState(" ");
    const navigate = useNavigate();
    const reduxAction=useDispatch();

    const sendData = (e) => {
        e.preventDefault();
        console.log(info);
        const reqOptions ={
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/chkLogin",reqOptions)
        .then(resp =>resp.text())
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
                   if(Object.keys(obj).length === 0)
                   {
                        setMsg("Wrong UID/PWD");
                   }
                   else
                   {
                    localStorage.setItem("loggedUser",JSON.stringify(obj));
                    console.log(obj)
                      if(obj.status === false)
                      {
                          alert("Request has not been approved");
                      }
                      else
                      {
                         
                          console.log(JSON.stringify(obj))
                          reduxAction(login())
                          if(obj.role.id === 1)
                          {
                               alert("in customer");
                               navigate("/customerhome"); 
                          }
                          else if(obj.role.id  === 5)
                          {
                               alert("in service center");
                               alert(obj.id);
                               navigate("/serviceHome");
                                            
                          }
                          else if(obj.role.id === 10)
                          {
                               alert("in admin");
                              /*  navigate("/dietitian_home"); */

                          }
                          
                      }
                   }
        })
    }


    return (
        <div className="container-fluid p-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div
                  className="card-body border border-dark"
                  style={{ backgroundColor: "lightgray" }}
                >
                  <h2 className="card-title mb-4">Login</h2>
                  <form >
                    <div className="form-group">
                      <label htmlFor="user-id">User ID:</label>
                      <input type="text" className="form-control" id="uid" name="uid" placeholder="Enter your username" value={info.uid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input type="text" className="form-control" id="pwd" name="pwd" placeholder="Enter your password"  value={info.pwd} 
                       onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}></input>

                    </div>
                    <Link to="#" className="nav-link px-3">
                      Forget Password?
                    </Link>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData(e)}}>Login</button>
                    <button type="reset" className="btn btn-primary"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}