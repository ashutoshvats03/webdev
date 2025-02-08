"use client"
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'

function Navbar() {
    const [count, setcount] = useState(0)
  return (
    <div className='bg-slate-900 min-h-14 text-center m-auto'>
      <div>i am navbar {count}</div>
     <div className='flex justify-between'>
     <button onClick={()=>setcount(count+1)} className='bg-red-400'> click me</button>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
     </div>
    </div>
  )
}

export default Navbar
