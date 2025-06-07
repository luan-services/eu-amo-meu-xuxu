import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Btn'

const Home = () => {
  return (
  <div className="container w-full min-h-screen flex flex-col justify-around items-center mx-auto gap-6 py-10 px-4 sm:px-6 md:px-8 lg:px-10">

    <div className="text-4xl font-bold text-center"> <span       style={{
        animation: "upDown 1s ease-in-out infinite",
        display: "inline-block"}}> Feliz dia dos namorados, com carinho pro meu amor!  </span></div>
    <div className="flex flex-wrap gap-2 md:gap-6">
    <Link to="/letter"><Button>Letter</Button></Link>
    <Link to="/cool_gif"><Button>Cool GIF</Button></Link>
    <Link to="/photos"><Button>Photos</Button></Link>
    <Link to="/song"><Button>Songs</Button></Link>
    </div>

    <div className="flex">
    <Button>as</Button>

    </div>
  </div>
  )
}

export default Home
