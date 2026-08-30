import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Herosection'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {


  return (
    <>
<Navbar />
<Hero />
<Skills />
<Projects />
<AboutMe />
<Footer />
    </>
  )
}

export default App
