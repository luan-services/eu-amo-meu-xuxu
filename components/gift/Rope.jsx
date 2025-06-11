import React, { useState, useEffect, useRef } from "react";

import song from "../../src/assets/songs/birds-of-a-feather.mp3"
import jhope from "../../src/assets/images/jhope plush.png"

export default function RopePull() {
  const baseHeight = 80;
  const maxPull = 80;



  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = song



  const [pullDistance, setPullDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(null);
  const [reachedMax, setReachedMax] = useState(false);

  const onMaxPullRelease = () => {
    console.log("🎉 Max pull reached and released!");
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
        audio.play();
        setIsPlaying(true);

    } else {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }
  };

  const getY = (e) => {
    if (e.touches) return e.touches[0].clientY;
    return e.clientY;
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;
      const currentY = getY(e);
      const deltaY = currentY - startY;
      const clamped = Math.max(0, Math.min(deltaY, maxPull));
      setPullDistance(clamped);

      if (clamped === maxPull && !reachedMax) {
        setReachedMax(true);
      }
    };

    const handleEnd = () => {
      if (isDragging) {
        if (reachedMax) {
          onMaxPullRelease();
        }
        setIsDragging(false);
        setPullDistance(0);
        setReachedMax(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, startY, reachedMax]);

  const handleStart = (e) => {
    setIsDragging(true);
    setStartY(getY(e));
    setReachedMax(false);
  };

    return (
        <div  className="bg-[length:290px_361px] w-[290px] h-[361px] md:bg-[length:450px_561px] md:w-[450px] md:h-[561px] touch-none" 
            style={{ backgroundImage: `url(${jhope})` }}> 

            <div className="relative top-40 md:top-68 md:left-6 left-2 transform -translate-x-1/2 flex flex-col items-center select-none">
                
                {/* Rope */}
                <div className="w-1 bg-yellow-600 rounded-full transition-all duration-150" 
                style={{ height: `${baseHeight + pullDistance}px` }}></div>

            
                <audio ref={audioRef} src={currentSong}/>

                {/* Ring */}
                <div onMouseDown={handleStart} onTouchStart={handleStart} className="w-10 h-10 border-4 border-gray-200
                    rounded-full mt-0 cursor-pointer   transition"></div>

                    <div className="text-center text-md md:text-xl font-bold transition"> puxe aqui</div>
            </div>
        </div>
  );
}
