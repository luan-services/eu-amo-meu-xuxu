import React, { useRef, useState, useEffect } from 'react';
import MpButton from "../songs/MpButton.jsx"

import prev from "../../src/assets/images/music_player/back.png"
import next from "../../src/assets/images/music_player/foward.png"
import play from "../../src/assets/images/music_player/play.png"
import pause from "../../src/assets/images/music_player/pause.png"
import volumebtn from "../../src/assets/images/music_player/volume.png"
import novolume from "../../src/assets/images/music_player/no-volume.png"


import birds_of_a_feather from "../../src/assets/songs/birds-of-a-feather.mp3"
import eu_amo_voce from "../../src/assets/songs/eu-amo-voce.mp3"
import lego_house from "../../src/assets/songs/lego-house.mp3"
import like_you_do from "../../src/assets/songs/like-you-do.mp3"
import matilda from "../../src/assets/songs/matilda.mp3"
import selfless from "../../src/assets/songs/selfless.mp3"
import smithereens from "../../src/assets/songs/smithereens.mp3"

const playlist = [
    { title: "BIRDS OF A FEATHER - Billie Eillish", desc: "i think we should stick together, if not forever, maybe till the day we day, but forever is even better, isn't it?", src: birds_of_a_feather },
    { title: "Eu Amo Você - Tim Maia", desc: "toda vez que eu te olho, meu coração sabe que é você. eu amo você, eu amo você, eu amo você", src: eu_amo_voce },
    { title: "Lego House - Ed Sheeran", desc: "i'd anything for you, and of all the things i've done, I think I love you better now", src: lego_house },
    { title: "Like You Do - Joji", desc: "this one remembers me of you, but i'm not sure, do you love me more than anyone? they don't love me like you do?", src: like_you_do },
    { title: "Matilda - Harry Styles", desc: "i wanna see you happy more than anything, anywhere you go, you don't need a reason, you don't have to be sorry for leaving and growing up", src: matilda },
    { title: "Selfless - The Strokes", desc: "you're the light light laying in my face when i see the sun, please don't be long cause I need your love", src: selfless },
    { title: "Smithereens - Twenty One Pilots", desc: "you know, i always been collected calm and chill, but for you i'd do anything, even get beat to smithereens", src: smithereens },


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
        if (audioRef.current.currentTime > 4) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
        else {
            setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
            setIsPlaying(true);
            setIsVinil(true);
        }

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

        
        <div className="flex w-2/10 bg-pink-100 shadow-[-5px_-5px_0_0_#d63384,5px_5px_0_0_#d63384] p-2 md:p-4 text-xs md:text-xl font-bold text-center items-center w-full justify-center"> 
 
        <h2 className="text-xl font-bold">{currentSong.desc}</h2>
      </div>
    </div>
    )
}

export default MusicPlayer
