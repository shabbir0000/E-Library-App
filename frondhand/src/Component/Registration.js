import React from 'react'
import {useState} from "react"
import {  useNavigate } from "react-router-dom";

    

const  Registration = ()=> {
const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", 
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "", 
  });

    let name,value;   
   function handleInputs(e){
        // console.log(e);
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    };
    
    
    const postdata =async (e) =>{
       e.preventDefault();
       
       const{name,email,phone, work,password,cpassword} = user;

       const res =await fetch("/register",{
             method : "POST",
             headers: {
               "Content-Type" : "application/json"
             },
             
             body: JSON.stringify({
              name,email,phone, work,password,cpassword
             })
       });
       
       const data = await res.json();
           console.log(data);
           
       if (data.status === 422 || !data) {
         console.log("invalid registration");
         window.alert("invalid regiter")
       }

       else{
        console.log(" registration success");
        window.alert("regiter success");
       Navigate("/login");
       }

    };


  return (
    <div className="pt-24 grid grid-cols-1 justify-items-center">

      <form method='POST' className="flex flex-col bg-slate-100 shadow-xl rounded place-items-center w-72 pb-8 space-y-10  ">
        <div>
          <h2 className="text-black font-bold">
            REGISTRATION
          </h2>
        </div>
        <div className="flex flex-row">

          <label>
            <i className="zmdi zmdi-account"></i>
          </label>
          <input placeholder='Name' type="text" id="name" name="name" className="border shadow-lg rounded "
           value={user.name}
           onChange={handleInputs}
          ></input>
        </div>

        <div className="flex flex-row">
          <label>
          <i className="zmdi zmdi-email"></i>
          </label>
          <input placeholder='email' type="email" id="email" name="email" className="border shadow-lg rounded "
          value={user.email}
          onChange={handleInputs}
          ></input>
        </div>

        <div className="flex flex-row">
          <label>
          <i className="zmdi zmdi-smartphone"></i>
          </label>
          <input placeholder='Phone' type="number" id="phone" name="phone" className="border shadow-lg rounded "
          value={user.phone}
          onChange={handleInputs}
          ></input>
        </div>

        <div className="flex flex-row">
          <label>
          <i className="zmdi zmdi-laptop"></i>
          </label>
          <input placeholder='work' type="text" id="work" name="work" className="border shadow-lg rounded "
          value={user.work}
          onChange={handleInputs}
          ></input>
        </div>

        <div className="flex flex-row">
          <label>
          <i className="zmdi zmdi-lock"></i>
          </label>
          <input placeholder='Password' type="password" id="password" name="password" className="border shadow-lg rounded "
          value={user.password}
          onChange={handleInputs}
          ></input>
        </div>

        <div className="flex flex-row">
          <label>
          <i className="zmdi zmdi-lock-outline"></i>
          </label>
          <input placeholder='C-Password' type="password" id="cpassword" name="cpassword" className="border shadow-lg rounded "
          value={user.cpassword}
          onChange={handleInputs}
          ></input>
        </div>
        <button className="hover:bg-white  bg-blue-500 w-24 rounded-md" onClick={postdata}>
          REGISTER
        </button>
      </form>
    </div>
  )
}

export default Registration