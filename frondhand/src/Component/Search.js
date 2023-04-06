import React,{useEffect , useState} from 'react'
import {Button} from 'react-bootstrap'

function Search() {

    const[book, setbook] = useState("");
  const[result, setresult] = useState([]);
  const[api, setapi] = useState("AIzaSyDWhBViJes7WJ691HPGi9vsrQz5VgzhAqY");

  const handlechange = (event)=>{
    const book = event.target.value;
    setbook(book);
  }

  const homepage2 = async ()=>{
    console.log(book);
   
    try {
     const res =  await fetch ("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+api+"&maxResults=40",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
     });
    
       const data = await res.json();

       console.log(data.items);
       setresult(data.items);
       
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <div className="name p-12 grid justify-items-center content-center md:grid md:grid-cols-1 ">
      <input placeholder='SEARCH' autoComplete='off' className="border  shadow-lg rounded grid justify-center  " 
          name='name'
          onChange={handlechange}
          ></input>
          <div className='p-3 grid justify-center'>
          <Button onClick={homepage2} >SEARCH</Button>
        </div>
        </div>

        <div  className="name grid grid-cols-2 justify-items-center content-center mt-5 md:grid md:grid-cols-5 ">
        {result.map((book,key)=>{
         // console.log(book.volumeInfo.imageLinks.thumbnail);
         if (!result) {
           console.log("not found");
         } else {
          return(
            <>
            <a href={book.volumeInfo.previewLink} target="_blank">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.readingModes.title}></img>
            </a>
            </>
          )
         }
          })
        
        }
      
      </div>
    </>
  )
}

export default Search