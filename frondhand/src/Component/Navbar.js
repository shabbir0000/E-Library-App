import React, { useState,useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Home from './Home';
import { Usercontext } from '../App';


export default function ResponsiveNavbar() {
  const {state,dispatch} = useContext(Usercontext);
 
  const Rendermanu = ()=>{
    if (state) {
      return(
        <>
                <li className="menu-list-item px-2"><NavLink to="/">HOME</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/aboutme">ABOUTME</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/contact">CONTACT</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/search">SEARCH</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/logout">LOGOUT</NavLink></li>
           
        </>
      )
    } else {
      return(
        <>
                <li className="menu-list-item px-2"><NavLink to="/">HOME</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/aboutme">ABOUTME</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/contact">CONTACT</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/login">LOGIN</NavLink></li>
                <li className="menu-list-item px-2"><NavLink to="/registration">REGISTRATION</NavLink></li>
              
        </>
      )
    }
  }
    //We will use react hooks for toggling the menu
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (
      <>
        <div className=" w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between items-center">
            <div className="brand-logo text-sm font-bold px-2">ONLINE LIBRARY APP</div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
               <Rendermanu/>
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <GrClose className="w-8 h-8 px-2" alt="close"/> : <GiHamburgerMenu className="w-8 h-8 px-2" alt="close"/>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
        
        </>
    )

   


function SideMenu(){
  if (state) {
    return(
      <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-blue-500  top-8">
          <ul className="menu-list flex flex-col text-xs font-bold">
              <li className="menu-list-item py-2 hover:bg-white  hover:text-blue-700"> 
              <NavLink to="/" className="text-black">HOME</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/aboutme" className="text-black">ABOUTME</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/contact" className="text-black">CONTACT</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/search" className="text-black">SEARCH</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/logout" className="text-black">LOGOUT</NavLink>
              </li>
          </ul>
      </div>
  )
  } else {
    return(
      <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-blue-500  top-8">
          <ul className="menu-list flex flex-col text-xs font-bold">
              <li className="menu-list-item py-2 hover:bg-white  hover:text-blue-700"> 
              <NavLink to="/" className="text-black">HOME</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/aboutme" className="text-black">ABOUTME</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/contact" className="text-black">CONTACT</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/login" className="text-black">LOGIN</NavLink>
              </li>
              <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
                <NavLink to="/registration" className="text-black">REGISTRATION</NavLink>
              </li>
             
          </ul>
      </div>
  )
  }
   
}

}











