import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Fetch from "./components/fetch"


 function App() {

  return (
    <>
      <div className="app bg-slate-800 ">
         <Fetch />
      </div>

    </>
  )
}

export default App
