import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import gifCat from "../src/assets/images/hellokitt.gif"
import heartRain from "../src/assets/images/heart-rain.gif"
import MusicPlayer from '../components/songs/MusicPlayer';
import vinilPlayer from "../src/assets/images/music_player/vp.png"
import needle from "../src/assets/images/music_player/needle.png"
import cd from "../src/assets/images/music_player/cdtwo.png"


const Song = () => {

  
  const [isVinil, setIsVinil] = useState(false);

  const toggleVinil = (prop) => {
    setIsVinil(prop);
  };
  
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-2 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl lg:text-5xl font-bold text-center items-center justify-center"> 
      <span className="up-down inline-block">essas músicas me lembram você</span>
    </div>

    <div className="p-2 md:p-4 flex text-2xl font-bold text-center items-center justify-center"> 

      <div className="w-100 h-100 bg-center bg-size-[400px] relative"  style={{ backgroundImage: `url(${vinilPlayer})` }}>
        <img className={`w-62 object-cover relative z-10 top-14 left-8  ${isVinil ? 'rotate-on-axis' : ''}`} src={cd} alt="Cd"/>
        <img className="w-100 object-cover inset-0 absolute z-20 left-0 " src={needle} alt="Cd"/>

      </div>
    </div>
    
    <MusicPlayer isVinil={isVinil} setIsVinil={setIsVinil}></MusicPlayer>

    <div className="flex text-2xl font-bold text-center overflow-hidden w-full h-8"> 
      <span className="">te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo 
        te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo </span>
    </div>

    <div className="flex w-full text-2xl font-bold text-center justify-around"> 
      <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-25 md:w-40 object-cover inline-block" src={gifCat} alt="Gif Cat"/>
      <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
    </div>


  </div>
  )
}

export default Song
