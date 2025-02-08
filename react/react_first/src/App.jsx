import { useState } from 'react'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="cards" style={{display:"flex"}}>
        <Card title="AMUSEMT PARK" />
        <Card title="NATIONAL PARK" />
        <Card title="WATER PARK" />
      </div>
    </>
  )
}

export default App
