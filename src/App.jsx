import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Letter from '../pages/Letter';
import CoolGift from '../pages/CoolGift';
import Songs from '../pages/Songs';
import Photos from '../pages/Photos';
import bgImg from '../src/assets/images/bg-image-two.png'

function App() {
  
  return (
    <>
    <div  className="min-h-screen bg-custom-primary font-pixel bg-center bg-[length:300px_450px] md:bg-[length:500px_750px]" 
    style={{ backgroundImage: `url(${bgImg})` }}> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/cool_gift" element={<CoolGift />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
