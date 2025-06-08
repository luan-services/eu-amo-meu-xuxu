import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import gifCat from "../src/assets/images/hellokitt.gif"
import heartRain from "../src/assets/images/heart-rain.gif"

const Home = () => {
  return (
  <div className="container w-full min-h-screen flex flex-col justify-around items-center mx-auto gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex text-4xl lg:text-5xl font-bold text-center justify-center">
      <span className="up-down inline-block"> Feliz dia dos namorados, com carinho pro meu amor!</span>
    </div>

    <div className="flex bg-pink-100 shadow-[-5px_-5px_0_0_#d63384,5px_5px_0_0_#d63384] p-2 md:p-4 text-xl w-8/10 font-bold text-center items-center justify-center"> 
      <span className="">
        Fiz essa surpresa com carinho pro amor da minha vida. Esse é nosso primeiro dia dos namorados juntos e quero que seja especial, espero que goste, eu amo você, meu amor.
      </span>
    </div>

    <div className="flex flex-wrap gap-2 md:gap-6 justify-center">
      <Link to="/photos"><Button>Photos</Button></Link>
      <Link to="/song"><Button>Songs</Button></Link>
      <Link to="/letter"><Button>Letter</Button></Link>
      <Link to="/cool_gif"><Button>Cool GIF</Button></Link>
    </div>

        <div className="flex w-full text-2xl font-bold text-center justify-around"> 
          <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
          <img className="w-25 md:w-40 object-cover inline-block
          hover:fixed hover:transition hover:scale-500 hover:duration-2000" src={gifCat} alt="Gif Cat"/>
          <img className="w-25 md:w-40 object-cover inline-block " src={heartRain} alt="Heart Rain"/>
        </div>
    
  </div>
  )
}

export default Home
