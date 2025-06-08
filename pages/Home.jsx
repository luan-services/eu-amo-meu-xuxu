import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'

const Home = () => {
  return (
  <div className="container w-full min-h-screen flex flex-col justify-around items-center mx-auto gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex text-4xl lg:text-5xl font-bold text-center justify-center">
      <span className="up-down inline-block"> Feliz dia dos namorados, com carinho pro meu amor!</span>
    </div>

    <div className="flex flex-wrap gap-2 md:gap-6 justify-center">
      <Link to="/photos"><Button>Photos</Button></Link>
      <Link to="/song"><Button>Songs</Button></Link>
      <Link to="/letter"><Button>Letter</Button></Link>
      <Link to="/cool_gif"><Button>Cool GIF</Button></Link>
    </div>

    <div className="flex">
    <Button>as</Button>

    </div>
  </div>
  )
}

export default Home
