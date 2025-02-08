import React from 'react'
import { MdBakeryDining } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink,Outlet } from "react-router-dom";


function navbar() {
 
  return (
    <div className='bg-zinc-800 min-h-16 text-white flex justify-between'>
      <NavLink to="/home" ><MdBakeryDining className='w-16 h-16' /></NavLink>
      <div className='flex align-bottom gap-5 my-auto'>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cart"><FaCartShopping className='w-6 h-6 mr-16' /></NavLink>
      </div>
   
    </div>
  )
}

export default navbar
