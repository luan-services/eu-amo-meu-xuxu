import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import PhotoCard from '../components/photos/PhotoCard'
import gifCat from "../src/assets/images/melody.gif"
import heartRain from "../src/assets/images/heart-rain.gif"
import LetterCard from '../components/letter/LetterCard'

const Letter = () => {
  
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl md:text-5xl font-bold text-center items-center justify-center"> 
      <span className="up-down inline-block">CONVITE PRA VOCÊ !!!!!!!!!!</span>
    </div>

    <div className="flex justify-center">
      <LetterCard></LetterCard>
    </div>
    
    

    <div className="flex text-2xl font-bold text-center overflow-hidden w-full h-8"> 
      <span className="">te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo 
        te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo </span>
    </div>

    <div className="flex w-full text-2xl font-bold text-center justify-around"> 
      <img className="w-25 hidden sm:inline-block md:w-40 object-cover " src={gifCat} alt="Gif Cat"/>
      <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-25 md:w-40 object-cover inline-block " src={gifCat} alt="Heart Rain"/>
      <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-25 hidden sm:inline-block md:w-40 object-cover " src={gifCat} alt="Gif Cat"/>
    </div>


  </div>
  )
}

export default Letter