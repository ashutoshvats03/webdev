import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-800 flex justify-around'>
        <div className="logo text-blue-800 font-extrabold text-xl cursor-pointer">&lt; Pass OP /&gt;</div>
        <div className="links text-white">
            <div className='flex gap-6'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
