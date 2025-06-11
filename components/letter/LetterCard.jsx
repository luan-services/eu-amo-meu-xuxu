import React, { useState } from "react";
import { motion } from "framer-motion";
import LetterButton from "./LetterBtn";
import TempoDecorrido from "./TempoCorrido";
import heart from "../../src/assets/images/heart-love.webp"

export default function LetterCard() {
  const [isOpened, setIsOpened] = useState(false);
  const [flapZIndex, setFlapZIndex] = useState("z-50");

  const handleOpen = () => {
    setIsOpened(true);
    // Aba abre em 2s → z-index vai para trás logo após
    setTimeout(() => setFlapZIndex("z-30"), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center   gap-6">
      <div className="relative w-80 h-80 overflow-visible perspective-[1000px]">

        {/* Parte de trás do envelope */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-pink-400 z-0 shadow-[-4px_-4px_0_0_black,4px_4px_0_0_black] " />

        {/* Corpo do envelope */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-pink-300 clip-envelope-body z-40" />

        {/* Aba do envelope */}
        <motion.div initial={{ rotateX: -180 }} animate={isOpened ? { rotateX: 0 } : { rotateX: -180 }} transition={{ duration: 2, ease: "easeInOut" }}
          className={`absolute top-auto bottom-[calc(66.66%)] left-0 w-full h-[41%] bg-pink-400 clip-envelope-flap origin-bottom ${flapZIndex}`} style={{ transformStyle: 'preserve-3d' }}/>

        {/* Carta */}
        <motion.div initial={{ height: "12rem" }} animate={isOpened ? { height: "28rem" } : { height: "12rem" }} transition={{ duration: 2, ease: "easeInOut", delay: isOpened ? 2 : 0 }}
          className="absolute bottom-0 left-6 right-6 bg-white border border-gray-300 z-35 rounded-sm shadow p-4 overflow-auto origin-bottom">
          <div className="text-gray-800 text-xs">
            Meu amor,<br /><br />
            Estou escrevendo essa cara para dizer o quanto eu te amo, se ainda não ficou claro, e também quero te fazer um convite.<br /><br />
            Estamos namorando há <TempoDecorrido dataInicial="2025-03-21T12:00:00Z"/>, e juntos há muito mais tempo. <br /><br />
            De tanto tempo que o mundo existe, eu amo poder estar vivo na mesma época que você, e quero viver muito mais, por isso preciso perguntar:<br /><br />
            <span className="text-center block font-bold">VOCÊ QUER SER MINHA <br/>PRA SEMPRE!????</span><br />
          </div>
        </motion.div>

        {/* Selo de coração */}
        <div className="absolute bottom-18 border-2 border-pink-900 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-400 rounded-full z-50 flex items-center justify-center">
          <div className="text-white text-sm">
                <img className="w-5 object-cover inline-block" src={heart} alt="Heart Rain"/>
          </div>
        </div>

      </div>

        <LetterButton onClick={handleOpen}>Abrir envelope</LetterButton>
    </div>
  );
}
