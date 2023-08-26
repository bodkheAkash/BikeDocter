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
        .then(resp => resp.text())
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
                               navigate("/serviceHome");

                          }
                          else if(obj.role.id === 10)
                          {
                               alert("in admin");
                               navigate("/admin_Home");

                          }
                          
                      }
                   }
        })
    }


     return(
        <div>

            <div class="login-box">
                <h2 style={{ fontSize: '18px', color: 'blue' ,fontWeight: 'bold'}}>Login</h2>
                <form>
                    <div class="input-group">
                    <label htmlFor= "uid" className="form-label">Enter username :</label>
                    <input type="text" className="form-control" id="uid" name="uid" placeholder="Enter your username" value={info.uid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}></input>
                    </div>
                    <div class="input-group">
                    <label htmlFor= "pwd" className="form-label">Enter password : </label>
                    <input type="text" className="form-control" id="pwd" name="pwd" placeholder="Enter your password"  value={info.pwd} 
                       onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}></input>
                    </div>
                    <div className="button-group">
                    <button type="button" className="btn btn-primary px-3" onClick={(e)=>{sendData(e)}}>Login</button> 
                    {/*} <button type="button" className="btn btn-primary px-3">Login</button> */}
                    <button type="reset" className="btn btn-primary px-3"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                    
                </form>
                <p>{JSON.stringify(info)}</p>
                <p>{msg}</p>
                </div>
              
               
        </div>
    )
}