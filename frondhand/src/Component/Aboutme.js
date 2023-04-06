import React , {useEffect,useState} from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate ,NavLink} from "react-router-dom";
import Updateprofile from './Updateprofile';


function Aboutme() {

   const navigate = useNavigate();
   const [userdata,setuserdata] = useState("");

  const callAboutPage = async () =>{
    try {
      const res = await fetch("/aboutme",{
         method:"GET",
         headers:{
           Accept: "application/json",
          "Content-Type": "application/json"
         },
         credentials:"include"
      })
      const data = await res.json();
      // console.log(data);
      setuserdata(data);
        if (!res.status === 200) {
          const error = new Error(res.error)
          throw error;
        }

    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
      callAboutPage();
  }, []);

  return (
    <div className="pt-24 grid grid-cols-1 justify-items-center">

      <div method="GET" className=" bg-slate-100 shadow-xl rounded place-items-start w-80 pb-8 space-y-10 md:w-1/2  ">
        <div className="name grid grid-cols-2">
          <div className='ml-5 mt-3'>
            <h6 className="text-black bg-slate-200  rounded text-center">
            {userdata.name}
            </h6>
            <h6 className="text-blue-500 bg-slate-200  rounded text-center">
            {userdata.work}
            </h6>
            <h6 className="text-black bg-slate-200  rounded text-center">
              Ranking <span>1/10</span>
            </h6>
          </div>
          <div className=" ml-12 md:ml-20 mt-3" >
            {/* <Button>
            <NavLink to="/updateprofile" className="text-white">
             Edit Profile
             </NavLink>
            </Button> */}
          
             
            
          </div>
        </div >

        <div className='bg-slate-200  rounded text-center '>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start '>
            <p className='font-bold '>
              ID
            </p>
            <p className='text-blue-500  '>
            {userdata._id}
            </p>
          </div>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start'>
          <p className='font-bold'>
              NAME
            </p>
            <p className='text-blue-500'>
            {userdata.name}
            </p>
          </div>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start'>
          <p className='font-bold'>
              EMAIL
            </p>
            <p className='text-blue-500'>
            {userdata.email}
            </p>
          </div>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start'>
          <p className='font-bold'>
              PHONE
            </p>
            <p className='text-blue-500'>
            {userdata.phone}
            </p>
          </div>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start'>
          <p className='font-bold'>
              PROFESSION
            </p>
            <p className='text-blue-500'>
            {userdata.work}
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Aboutme