import { useState } from 'react'
import Navbar from "./components/navbar"
import About from "./components/About"
import Login from "./components/loginpage"
import Cart from "./components/cart"
import Home from './components/homepage'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { counterContext } from '../context/context'

function App() {
  const [products, setproducts] = useState([])
  const [cart, setCart] = useState([])
  return (
    <counterContext.Provider value={{products,setproducts}}>
    <div className="bg-zinc-700">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
    </counterContext.Provider>
  );
}


export default App






























