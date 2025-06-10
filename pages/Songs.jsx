import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import gifSylveon from "../src/assets/images/sylveon.gif"
import heartRain from "../src/assets/images/heart-rain.gif"
import MusicPlayer from '../components/songs/MusicPlayer';
import vinilPlayer from "../src/assets/images/music_player/vp.png"
import needle from "../src/assets/images/music_player/needle.png"
import cd from "../src/assets/images/music_player/cdtwo.png"


const Songs = () => {

  
  const [isVinil, setIsVinil] = useState(false);

  const toggleVinil = (prop) => {
    setIsVinil(prop);
  };
  
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-2 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl md:text-5xl font-bold text-center items-center justify-center"> 
      <span className="up-down inline-block">essas músicas me lembram você</span>
    </div>

    <div className="p-2 md:p-4 flex text-2xl font-bold text-center items-center justify-center"> 

      <div className="w-65 h-63 bg-size-[262px] md:w-100 md:h-97 md:bg-size-[402px] bg-center relative"  style={{ backgroundImage: `url(${vinilPlayer})` }}>
        <img className={`w-45 top-5.5 left-2.5 md:w-69.25 md:top-8.5 md:left-4 object-cover relative z-10   ${isVinil ? 'rotate-on-axis' : ''}`} src={cd} alt="Cd"/>
        <img className="w-19 top-4.5 left-38.25 md:w-29 md:top-7 md:left-59.5 object-cover inset-0 absolute z-20  " src={needle} alt="Cd"/>

      </div>
    </div>
    
    <MusicPlayer isVinil={isVinil} setIsVinil={setIsVinil}></MusicPlayer>

    <div className="flex w-full text-2xl font-bold text-center justify-around"> 
      <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-25 md:w-40 object-cover inline-block" src={gifSylveon} alt="Gif Cat"/>
      <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
    </div>


  </div>
  )
}

export default Songs
