import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import PhotoCard from '../components/photos/PhotoCard'
import gifCat from "../src/assets/images/gif-cat.gif"
import heartRain from "../src/assets/images/heart-rain.gif"
import camera from "../src/assets/images/polaroid_camera.png"
import { imagesArray } from '../objects/our_photos'

const Photos = () => {
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl md:text-5xl font-bold text-center items-center justify-center"> 
      <span className="up-down inline-block">nossas memórias juntos</span>
    </div>

    <div className="mx-4 bg-pink-100 shadow-[-5px_-5px_0_0_#d63384,5px_5px_0_0_#d63384] p-2 md:p-4 flex text-md md:text-xl font-bold text-center items-center justify-center"> 
      <span className="">Amei viver tudo isso com você, tudo que fazemos juntos é especial para mim, desde nossas viagens longas até passar
        o dia deitado fazendo nada com você. <br></br>Espero que a gente continue criando ótimas memórias e passando tempo juntos. <br></br>Em nenhum momento eu vou cansar de estar
        com você, nem por um minuto, em todos os segundos, eu amo viver com você.
      </span>
    </div>

    <div className="flex items-center justify-center">
      <img className="relative top-8 w-84 object-cover inline-block " src={camera} alt="Heart Rain"/>
    </div>

    <div className="flex justify-center mx-2 z-10 h-120">
      <div className=" flex flex-wrap  max-w-80 bg-orange-200 custom-scrollbar
      overflow-y-auto border-b-black border-b-5 shadow-[-5px_-5px_0_0_black,5px_-5px_0_0_black] text-center justify-center items-center gap-6 text-4xl md:text-5xl font-bold pb-4 pt-4 "> 
      
        {imagesArray.map((props, index) => {
                  return (
                      <PhotoCard
                          key={index}
                          imgSrc={props.img_src} 
                          bottomText={props.bottom_text}
                      />
                  )
              })}
      </div>
    </div>

    <div className="flex text-2xl font-bold text-center overflow-hidden w-full h-8"> 
      <span className="">te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo 
        te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo te amo </span>
    </div>

    <div className="flex w-full text-2xl font-bold text-center justify-around"> 
      <img className="w-18 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
      <img className="w-18 md:w-40 object-cover inline-block" src={gifCat} alt="Gif Cat"/>
      <img className="w-18 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
    </div>


  </div>
  )
}

export default Photos
