import React,{createContext,useReducer} from "react";
import Navbar from "./Component/Navbar"
import Home from './Component/Home';
import Contact from './Component/Contact';
import Aboutme from './Component/Aboutme';
import Login from './Component/Login';
import Logout from './Component/logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from '../src/Component/Registration';
import { Route, Routes } from "react-router-dom";
import { initialState,reducer } from "./reducer/userreducer";
import Updateprofile from "./Component/Updateprofile";
import Search from "./Component/Search";

export const Usercontext = createContext();

const  App = () => {
  
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <Usercontext.Provider value={{state, dispatch}}>
      <Navbar/>
      <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/updateprofile' element={<Updateprofile />} />
      <Route path='/search' element={<Search />} />
        
        
    </Routes>
    </Usercontext.Provider>
    </div>
  )

}

export default App;