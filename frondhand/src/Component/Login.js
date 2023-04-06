
import React, { useState , useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Usercontext } from '../App';

const Login = ()=> {

  const {state,dispatch} = useContext(Usercontext);
  
  const Navigate = useNavigate();
  
  const [user, setUser] = useState({
    
    email: "",
    password: "",
  });
  
  let name,value;   
   function handleInputs(e){
        // console.log(e);
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    };

  const logindata = async (e) => {
    e.preventDefault();

    const{email,password} = user;

    const res = await fetch('/login',{
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }

      
    });

    const data = res.json();
      console.log(data);
    //if selse
    if (data.status === 401 || !data) {
      console.log("invalid login");
      window.alert("invalid login")
    }

    if (data.status === 202 || data){
      dispatch({type:"USER",payload:true});
      console.log(" login success");
      window.alert("login success");
      Navigate("/home");
    }

  };


  return (
    <div className="pt-24 grid grid-cols-1 justify-items-center">

      <form className="flex flex-col bg-slate-100 shadow-xl rounded place-items-center w-72 pb-8 space-y-10  ">
        <div>
          <h2 className="text-black font-bold">
            LOGIN FORM
          </h2>
        </div>

        <div className="flex flex-row">
          <label>
            <i className="zmdi zmdi-email"></i>
          </label>
          <input placeholder='Email' type="email" id="email" className="border shadow-lg rounded " name="email"
            value={user.email}
            onChange={handleInputs}
          ></input>
        </div>

        <div className="flex flex-row">
          <label>
            <i className="zmdi zmdi-lock"></i>
          </label>
          <input placeholder='Password' type="password" id="password" className="border shadow-lg rounded " name="password"
           value={user.password}
           onChange={handleInputs}
          ></input>
        </div>

        <button className="hover:bg-white  bg-blue-500 w-24 rounded-md" onClick={logindata}>
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default Login