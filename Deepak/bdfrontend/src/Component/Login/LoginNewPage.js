import { useReducer, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import CustomerHome from "../HomePage/CustomerHome";

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
                      if(obj.status === false)
                      {
                          alert("Request has not been approved");
                      }
                      else
                      {
                          console.log(JSON.stringify(obj))
                          if(obj.role.id === 1)
                          {
                               alert("in customer");
                               navigate("/customerhome"); 
                          }
                          else if(obj.role.id  === 5)
                          {
                               alert("in service center");
                            

                          }
                          else if(obj.role.id === 10)
                          {
                               alert("in admin");
                              

                          }
                          
                      }
                   }
        })
    }


     return(
        <div>

            <div class="login-box d-flex justify-content-center align-items-center">

                <form class="col-md-6 p-4 rounded bg-light">
                <h1 style={{ fontSize: '14px', color: 'blue' ,fontWeight: 'bold'}}> LOGIN</h1>
                    <div class="input-group my-3" >
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
                    <button type="submit" className="btn btn-primary px-2" onClick={(e)=>{sendData(e)}}>Login</button>
                    <button type="reset" className="btn btn-primary px-2"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                </form>
                {/* <p>{JSON.stringify(info)}</p>
                <p>{msg}</p> */}
                </div>
                <Routes>
                      {/* ------------------Customer----------------------------- */}
                <Route path="customerhome" element={<CustomerHome/>}></Route>
                 {/* ------------------Service----------------------------- */}
                 
                </Routes>
               
        </div>
    )
}