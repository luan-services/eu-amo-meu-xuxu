import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Btn'
import gifCat from "../src/assets/images/hellokitt.gif"
import heartRain from "../src/assets/images/heart-rain.gif"


const playlist = [
  { title: "Song One", src: "../src/assets/songs/matue-maria.mp3" },
  { title: "Song Two", src: "../src/assets/songs/matue-maria copy.mp3" },
];


const Song = () => {



const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};



  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);

  const currentSong = playlist[currentTrack];

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

const handleTimeUpdate = () => {
  const audio = audioRef.current;
  if (!audio) return;
  const duration = audio.duration || 0;
  const current = audio.currentTime || 0;
  setCurrentTime(current);
  setDuration(duration);
  setProgress((current / duration) * 100);
};

  const handleSeek = (e) => {
    const newProgress = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = (newProgress / 100) * audio.duration;
    setProgress(newProgress);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.load(); // reload the new track
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);













  
  return (
  <div className="min-h-screen flex flex-col gap-3 md:gap-6 py-10 px-2 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-wrap justify-start">
        <Link to="/"><Button>back</Button></Link>
    </div>

    <div className="flex text-4xl lg:text-5xl font-bold text-center items-center justify-center"> 
      <span className="up-down inline-block">esse som me lembra você</span>
    </div>

    <div className="bg-pink-100 shadow-[-5px_-5px_0_0_#d63384,5px_5px_0_0_#d63384] p-2 md:p-4 flex text-2xl font-bold text-center items-center justify-center"> 
      <span className="">Amei viver tudo isso com você, tudo que fazemos juntos é especial para mim, desde nossas viagens longas até passar
        o dia deitado fazendo nada com você. Espero que a gente continue criando ótimas memórias e passando tempo juntos. Amo estar com você.
      </span>
    </div>
    
    <div className=" flex flex-wrap text-center justify-center items-center gap-6 text-4xl lg:text-5xl font-bold p-4"> 



 <h2 className="text-xl font-semibold">{currentSong.title}</h2>

      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />

      <div className="flex space-x-4">
        <button onClick={handlePrev} className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500 text-white">⏮️ Prev</button>
        <button
          onClick={togglePlay}
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <button onClick={handleNext} className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500 text-white">⏭️ Next</button>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="w-64 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />

      {/* Time Display */}
<div className="flex justify-between w-64 text-sm text-gray-600">
  <span>{formatTime(currentTime)}</span>
  <span>{formatTime(duration)}</span>
</div>

      <div className="flex items-center space-x-2">
        <span>🔈</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-40"
        />
        <span>🔊</span>
      </div>



    </div>

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
