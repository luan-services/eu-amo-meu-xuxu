import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import PhotoCard from '../components/photos/PhotoCard'
import gifCat from "../src/assets/images/gif-cat.gif"
import heartRain from "../src/assets/images/heart-rain.gif"

const Photos = () => {
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl lg:text-5xl font-bold text-center items-center justify-center"> 
      <span className="up-down inline-block">nossas memórias juntos</span>
    </div>

    <div className="flex text-2xl font-bold text-center items-center justify-center"> 
      <span className="">Amei viver tudo isso com você, tudo que fazemos juntos é especial para mim, desde nossas viagens longas até passar
        o dia deitado fazendo nada com você. Espero que a gente continue criando ótimas memórias e passando tempo juntos. Amo estar com você.
      </span>
    </div>
    
    <div className=" flex flex-wrap text-center justify-center items-center gap-6 text-4xl lg:text-5xl font-bold p-4"> 
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
      
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
      <PhotoCard>sd</PhotoCard>
    </div>

    <div className="flex text-2xl font-bold text-center overflow-hidden w-full h-8"> 
      <span className="">te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo 
        te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo </span>
    </div>

    <div className="flex text-2xl font-bold text-center justify-around"> 
      <img className="w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-40 object-cover inline-block" src={gifCat} alt="Gif Cat"/>
      <img className="w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
    </div>


  </div>
  )
}

export default Photos
