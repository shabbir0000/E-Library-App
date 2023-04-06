import React , {useEffect ,useState} from 'react'
import 'react-bootstrap'
import {Button} from 'react-bootstrap'

function Contact() {
   const [userdata,setuserdata] =  useState({name:"",email:"",phone:"",massege:""});

   const contactform = async () => {
     try {
       const res = await fetch ("/getdata", {
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            },

       });

         const data = await res.json();
         console.log(data);
         setuserdata({...userdata,name:data.name,email:data.email,phone:data.phone});
         if (!res.status===200) {
           const error = new Error(res.error);
           throw error;
         } 

     } catch (error) {
       console.log(error);
     }
   }

   useEffect(() => {
    
       contactform();
  
   }, []);

   const submitform = (e) => {
   const name = e.target.name;
   const value = e.target.value;

   setuserdata({...userdata,[name]:value});
   }

   const contactsubmit= async (e) => {
         e.preventDefault();
         const {name , email , phone , massege} = userdata;

         const res = await fetch ("/contact",{
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body: JSON.stringify ({
            name , email , phone , massege
           })
         });
         const data =await res.json();
         if (!data) {
           console.log("massge not deliverd");
         } else {
           console.log("massege send");
           window.alert("massege send");
           setuserdata({...userdata,massege:""});
         }
   }
  return (
    <>
      <div className="name grid justify-items-center content-center md:grid md:grid-cols-3 ">
        <div className=" bg-slate-100 shadow-xl rounded  w-72  mt-4   md:w-72  ">
          <div >
            <p className=' grid justify-items-center'>
              <strong>
                EMAIL
              </strong>
              <br></br>
              M.shabii100@gmail.com
            </p>

          </div>
        </div>

        <div className=" bg-slate-100 shadow-xl rounded  w-72  mt-4  md:w-72  ">
          <div>

            <p className=' grid justify-items-center'>
              <strong>
                ADDRESS
              </strong>
              <br></br>
              Navel Colony USA
            </p>
          </div>
        </div>

        <div className=" bg-slate-100 shadow-xl rounded  w-72  mt-4  md:w-72  ">
          <div>
            <p className=' grid justify-items-center'>
              <strong>
                PHONE
              </strong>
              <br></br>
              0312-94949944
            </p>
          </div>
        </div>
      </div>

       <div className='grid grid-cols-1 justify-center  justify-items-center p-10'>
      <div className=" bg-slate-100 shadow-xl rounded  grid justify-items-center  w-72  md:w-9/12 ">
        <h1>
          GET IN TOUCH
        </h1>
        <div method="POST" className="name grid grid-rows-3 justify-items-center content-center md:grid md:grid-cols-3 md:gap-x-20  ">
          <div className='pt-3'>
          <input placeholder='NAME' className="border shadow-lg rounded " 
          name='name'
          value={userdata.name}
          onChange={submitform}
          ></input>
          </div>
          <div className='pt-3'>
         <input placeholder='EMAIL' className="border shadow-lg rounded "
         name='email'
         value={userdata.email}
         onChange={submitform}
         ></input>
         </div>
         <div className='pt-3'>
         <input placeholder='PHONE NUMBER' className="border shadow-lg rounded "
         name='phone'
         value={userdata.phone}
         onChange={submitform}
         ></input>
          </div>
         
        </div>
        <div className='border shadow-lg rounded pt-2 md:w-9/12 md:h-60'>
          <textarea placeholder='MASSEGE' className='w-44 md:w-full md:h-full'
          name='massege'
          value={userdata.massege}
          onChange={submitform}
          ></textarea>
        </div>

        <div className='p-3'>
          <Button onClick={contactsubmit} >SUBMIT</Button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact