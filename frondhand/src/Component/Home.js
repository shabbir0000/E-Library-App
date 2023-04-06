import React,{useEffect , useState} from 'react'
import Showalldata from './Showalldata';
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";



function Home() {
  
  const[userdata, setuserdata] = useState("");
  const[userdata1, setuserdata1] = useState("");
  const[result, setresult] = useState([]);
  const[api, setapi] = useState("AIzaSyDWhBViJes7WJ691HPGi9vsrQz5VgzhAqY");

  const homepage = async ()=>{
    try {
      const res = await fetch("/getdata",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }

      });
      const data = await res.json();
      console.log(data);
      setuserdata(data.name);
    } catch (error) {
      console.log(error);
    }
  }

  const homepage1 = async ()=>{
    try {
      const res = await fetch("/countdata",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }

      });
      const data = await res.json();
      console.log(data);
      setuserdata1(data);
    } catch (error) {
      console.log(error);
    }
  }

  const homepage2 = async ()=>{
   // console.log(book);
   
    try {
     const res =  await fetch ("https://www.googleapis.com/books/v1/volumes?q=javascript&key="+api,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
     });
    
       const data = await res.json();

       console.log(data.totalItems);
       setresult(data.totalItems);
       
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    homepage();
    homepage1();
    homepage2();
  }, [])
  return (
    <>
      <div className='grid-cols-1 justify-center content-center  mt-24 justify-items-center '>
        <div className='grid justify-center'>
       
        </div>
      
        <h1 className='grid justify-center'>
        Welcome {userdata}
        </h1>
        <h2 className='grid justify-center'>
          HAVE A NICE DAY
        </h2>
      </div>
     

      <div className="name grid justify-items-center content-center md:grid md:grid-cols-2 ">
      
        <div className=" bg-slate-100 shadow-xl rounded  w-72  mt-4   md:w-72  ">
        
          <div >
            <p className=' grid justify-items-center'>
              <strong>
               TOTAL STUDENT REGISTER
              </strong>
              <br></br>

              {userdata1}

            </p>

          </div>
        </div>

        <div className=" bg-slate-100 shadow-xl rounded  w-72  mt-4  md:w-72  ">
          <div>

            <p className=' grid justify-items-center'>
              <strong>
               TOTAL BOOK IN LIBRARY
              </strong>
              <br></br>
              {result}
            </p>
          </div>
        </div>

        
      </div>

     




      {/* {userdata1}
    <Showalldata/> */}
    </>
  )
}

export default Home