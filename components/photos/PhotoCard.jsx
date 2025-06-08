import React from 'react'

const PhotoCard = ({imgSrc, bottomText}) => {
    return (
        
        <div className="bg-white max-w-68 max-h-82 p-4 gap-2 flex flex-col items-center 
        relative hover:scale-105 transition duration-300 shadow-[-5px_-5px_0_0_black,5px_5px_0_0_black]">
            <div className="relative w-60 h-60 overflow-hidden bg-blue-100">
                <img className="" src={imgSrc} alt="Polaroid Image"/>
                <div className="absolute inset-0 bg-black fade-out"></div>
            </div> 
            
            <div className="text-center text-2xl min-h-6">
                {bottomText}
            </div>
        </div>

        
    )
}

export default PhotoCard
