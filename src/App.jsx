// import { useState } from 'react'

import './App.css'
import HOMEPAGE from "../components/HOMEPAGE";
import HomePage from '../components/HOMEPAGE';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ShowProject from '../components/ShowProject'


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Router>
      
        <Routes>
           <Route path='/about' element={<About/>}/>
            <Route path='/Skills' element={<Skills/>}/>
              <Route path='/contact' element={<Contact/>}/>
                <Route path='/projects' element={<ShowProject/>}/>
        </Routes>
    </Router>       
    </>
  )
}

export default App
