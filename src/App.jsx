import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Herosection'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {


  return (
    <>
<Navbar />
<Hero />
<Skills />
<AboutMe />
<Footer />
    </>
  )
}

export default App
