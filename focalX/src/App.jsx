import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Navbar/>
   <Hero/>
   <Section1/>
   <Section2/>
   <Footer/>
    
    </>
  )
}

export default App
