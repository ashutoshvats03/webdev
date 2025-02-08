import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="login" element={<Login />} />
          <Route path="login/:username" element={<Login />} />
          <Route path="About" element={<About />} />
          {/* <Route path="*" element={<Home />} />  FOR ERROR PLATES*/}
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
    
  )
}

export default App
