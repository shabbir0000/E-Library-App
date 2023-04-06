import React,{useEffect,useState} from 'react'

function Showalldata() {
    const [userdata,setuserdata] =  useState([{}]);

    const contactform = async () => {
        try {
          const res = await fetch ("/alldata", {
               method:"GET",
               headers:{
                 "Content-Type":"application/json"
               },
   
          });
   
            const data = await res.json();
            console.log(data);
            setuserdata(data);
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

  return (
    <div>

{
userdata.map((element,id)=>{
    return(
        <>
        <p>
           { element._id}
        </p>
        </>
    )
})
}



    </div>
  )
}

export default Showalldata