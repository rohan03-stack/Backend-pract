import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { AllRoutes } from './Routes/AllRoutes'

function App() {
  
  return (
    <>
    <Navbar />
    <AllRoutes />
    </>
  )
}

export default App
