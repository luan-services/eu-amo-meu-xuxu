import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Letter from '../pages/Letter';
import CoolGif from '../pages/CoolGif';
import Song from '../pages/Song';
import Photos from '../pages/Photos';
import bgImg from '../src/assets/images/bg-pattern.png'

function App() {
  
  return (
    <>
    <div  className="min-h-screen bg-custom-primary font-pixel bg-center" 
    style={{ backgroundImage: `url(${bgImg})` }}> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/cool_gif" element={<CoolGif />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/song" element={<Song />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
