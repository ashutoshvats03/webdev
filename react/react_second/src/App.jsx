import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

0
  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count])

  // when count is clicked the it changed in html....so we made
  // a useEffect of count if it changes then color also changes
  // when color changed then once again a new useEffect....in btw
  // 2 more useEffect working ONE FOR THE FIRST TIME ONLY and 
  // THE SECOND ONE WHEN ANY VALUE CHANGES...it react if any value 
  // changes it render all the files so the "Hey I will run on every render")
  // will gets showed up everytime

  return (
    <>
      { <Navbar color={"navy " + "blue" + color} /> }
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App