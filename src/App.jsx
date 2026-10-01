import React from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'  
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Follow from './components/Follow'
import Products from './components/Proudects'
import Contact from './components/Contact'
import FAQ from './components/FAQ'



function App() {


  return (
    <>
     <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
 <Route path="/products" element={<Products />} />
 <Route path="/contact" element={<Contact />} />
<Route path="/faq" element={<FAQ />} />


     </Routes>  

    
    </>
  )
}

export default App
