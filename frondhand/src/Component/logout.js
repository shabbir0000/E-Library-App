import React, {useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import { Usercontext } from '../App';

function Logout() {
    const {state,dispatch} = useContext(Usercontext);

    const navigate = useNavigate();

  useEffect(() => {
      fetch("/logout",{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          Credential:"include"
      }).then((res)=>{
        dispatch({type:"USER",payload:false});
            navigate("/login");
      }).catch((error)=>{
          console.log(error);
      });
  }, []);


  return (
    <div>
     
    </div>
  )
}

export default Logout
