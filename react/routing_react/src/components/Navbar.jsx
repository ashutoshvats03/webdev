import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


function Navbar() {
  
  return (
    <div>
      <nav>
        <NavLink to="/home" className={(e) => { return e.isActive ? "red" : "" }}><li>Home</li></NavLink>
        <NavLink to="/about" className={(e) => { return e.isActive ? "red" : "" }} ><li>About</li></NavLink>
        <NavLink to="/login" className={(e) => { return e.isActive ? "red" : "" }}><li>Login</li></NavLink>

      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
