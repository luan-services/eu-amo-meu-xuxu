import React, { useRef, useState, useEffect } from 'react';
import MpButton from "../songs/MpButton.jsx"

import prev from "../../src/assets/images/music_player/back.png"
import next from "../../src/assets/images/music_player/foward.png"
import play from "../../src/assets/images/music_player/play.png"
import pause from "../../src/assets/images/music_player/pause.png"
import volumebtn from "../../src/assets/images/music_player/volume.png"
import novolume from "../../src/assets/images/music_player/no-volume.png"

import songOne from "../../src/assets/songs/matue-maria.mp3"
import songTwo from "../../src/assets/songs/matue-maria copy.mp3"

const playlist = [
    { title: "Matilda - Harry Styles", desc: "oii", src: songOne },
    { title: "Song Two", desc: "oii", src: songTwo },
];

const MusicPlayer = ({setIsVinil}) => {
    
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
            setIsVinil(true);

        } else {
            audio.pause();
            setIsPlaying(false);
            setIsVinil(false);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);

        if (audioRef.current) audioRef.current.volume = newVolume;
            setVolume(newVolume);
    };
    
    const muteVolume = (e) => {
        const newVolume = 0.0;

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
        setIsVinil(true);
    };

    const handlePrev = () => {
        setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
        setIsVinil(true);
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
    <div className="flex flex-col text-center gap-4 justify-center items-center text-4xl lg:text-xl font-bold p-4 pl-0 pr-0 md:p-4"> 

        <h2 className="text-xl font-bold">{currentSong.title}</h2>

        <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
        />

        <div className="flex flex-wrap bg-pink-200 justify-center p-2 md:p-3 gap-2 md:gap-4 items-center shadow-[-3px_-3px_0_0_#d63384,3px_3px_0_0_#d63384]">

    
            <div className="flex gap-1">

                <MpButton onClick={handlePrev}>
                    <img className="w-8 object-cover" src={prev} alt="Prev Button"/>
                </MpButton>
                <MpButton onClick={togglePlay}>
                    {isPlaying ? <img className="w-8 object-cover" src={pause} alt="Pause Button"/> : <img className="w-8 object-cover" src={play} alt="Play Button"/>}
                </MpButton>
                <MpButton onClick={handleNext}>
                    <img className="w-8 object-cover" src={next} alt="Next Button"/>
                </MpButton>

            </div>

            {/* Current Time Display */}
            <div className="font-sans flex justify-between text-sm text-pink-900">
                <span>{formatTime(currentTime)}</span>
            </div>


            {/* track time bar */}
            <input type="range" min="0" max="100" value={progress} onChange={handleSeek} className="w-24 md:w-48 h-2 bg-pink-700 pink-slider rounded-lg
            appearance-none cursor-pointer"/>

            {/* Full Time Display */}
            <div className="font-sans flex justify-between text-sm text-pink-900">
                <span>{formatTime(duration)}</span>
            </div>

            <div className="hidden md:flex space-x-1 items-center">
                <MpButton onClick={muteVolume}>
                    <img className="w-8 object-cover" src={volume > 0 ? volumebtn : novolume} alt="Volume Button"/>
                </MpButton>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-18 md:w-24 h-2 bg-pink-700 pink-slider appearance-none rounded-lg cursor-pointer"
                />
            </div>



        </div>

    </div>
    )
}

export default MusicPlayer
