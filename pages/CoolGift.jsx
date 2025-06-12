import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import dancinCat from "../src/assets/images/dancing-cat.gif"
import heartRain from "../src/assets/images/heart-rain.gif"
import RopePull from '../components/gift/Rope'

const CoolGift = () => {
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl md:text-5xl font-bold text-center items-center justify-center mb-4"> 
      <span className="up-down inline-block">MEU PRESENTE PRA VOCÊ</span>
    </div>

  
    <div className="mx-4 bg-pink-100 shadow-[-5px_-5px_0_0_#d63384,5px_5px_0_0_#d63384] p-2 md:p-4 flex text-md md:text-xl font-bold text-center items-center justify-center"> 
      <span className="">Tive que aprender a costurar p botar um gravador dentro desse boneco, deu muito trabalho, espero que goste.
      </span>
    </div>

    <div className="flex text-md  items-center justify-center">
      <div className="pt-2 pb-2 p-4">
      <RopePull></RopePull>

      </div>
    </div>

     <div className="mx-4 p-2 md:p-4 flex text-md md:text-xl font-bold text-center items-center justify-center"> 
      <div className="flex text-2xl font-bold text-center overflow-hidden w-full h-8"> 
        <span className="inline animate-marquee">gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? </span>
         <span className="inline animate-marquee">gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? gostou? </span>
      </div>
    </div>

    <div className="flex w-full text-2xl font-bold text-center justify-around"> 
      <img className="w-18 md:w-40 object-cover inline-block " src={dancinCat} alt="Dancing Cat"/>
      <img className="w-18 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-18 md:w-40 object-cover inline-block " src={dancinCat} alt="Dancing Cat"/>
      <img className="w-18 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-18 md:w-40 object-cover inline-block " src={dancinCat} alt="Dancing Cat"/>
    </div>


  </div>
  )
}

export default CoolGift
