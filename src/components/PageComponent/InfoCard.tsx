"use client";
import { gruzBio, gruzImage, gruzLink, gruzName } from "@/data/GruzData/data";
import React, { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { InfoTip } from "../InfoTip";
import Available from "../Available";
import { useSwitch } from "../Context/SwitchContext";
import {
  rinkitBio,
  rinkitImage,
  rinkitLink,
  rinkitName,
} from "@/data/RinkitData/data";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
const InfoCard: React.FC = () => {
  const { isSwitchOn } = useSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const socialLink = isSwitchOn ? gruzLink : rinkitLink;
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const audioEngRef = useRef<HTMLAudioElement>(null);
  const audioItaRef = useRef<HTMLAudioElement>(null);

  const handlePlay = (
    audioType: string,
    audioRef: React.RefObject<HTMLAudioElement>,
  ) => {
    const stopCurrentAudio = () => {
      if (playingAudio === "ENG" && audioEngRef.current) {
        audioEngRef.current.pause();
        audioEngRef.current.currentTime = 0;
      } else if (playingAudio === "ITA" && audioItaRef.current) {
        audioItaRef.current.pause();
        audioItaRef.current.currentTime = 0;
      }
    };

    if (playingAudio === audioType) {
      // If the clicked audio is already playing, stop it.
      stopCurrentAudio();
      setPlayingAudio(null);
    } else {
      // If another audio is playing, stop it before starting the new one.
      stopCurrentAudio();

      // Play the new audio.
      if (audioRef.current) {
        audioRef.current.play();
        setPlayingAudio(audioType);
      }
    }
  };

  return (
    <section>
      <audio
        ref={audioEngRef}
        src="/assets/Audios/MattiaPresentationENG.mp3"
        onEnded={() => setPlayingAudio(null)}
      />
      <audio
        ref={audioItaRef}
        src="/assets/Audios/Mattia_PresentationITA.mp3"
        onEnded={() => setPlayingAudio(null)}
      />
      <div className=" flex flex-col gap-2">
        <div className=" block md:hidden">
          <Available text="Available" />
        </div>

        <div className="flex gap-3 items-center">
          <div
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer hover:brightness-75 transition duration-200 select-none w-1/3 md:w-auto"
          >
            <Image
              src={isSwitchOn ? gruzImage : rinkitImage}
              alt="Profile Picture"
              className="pro-pic"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h1 className=" head-name ">
                {isSwitchOn ? gruzName : rinkitName}
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => handlePlay("ENG", audioEngRef)}
                  className="flex items-center gap-2 px-2 py-1 text-xs font-semibold text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors duration-200"
                >
                  {playingAudio === "ENG" ? (
                    <FaPause className="size-[10px]" />
                  ) : (
                    <FaPlay className="size-[10px]" />
                  )}
                  <span>ENG</span>
                </button>
                <button
                  onClick={() => handlePlay("ITA", audioItaRef)}
                  className="flex items-center gap-2 px-2 py-1 text-xs font-semibold text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors duration-200"
                >
                  {playingAudio === "ITA" ? (
                    <FaPause className="size-[10px]" />
                  ) : (
                    <FaPlay className="size-[10px]" />
                  )}
                  <span>ITA</span>
                </button>
              </div>
              <div className=" md:block hidden">
                <Available text="Available" />
              </div>
            </div>
            <p>{isSwitchOn ? gruzBio : rinkitBio}</p>
            <div className="flex flex-wrap gap-1.5">
              {socialLink.map((link) => (
                <InfoTip key={link.id} text={link.name}>
                  <a className="social-card" href={link.link} target="_blank">
                    {<link.icon />}
                  </a>
                </InfoTip>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" select-none fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Fixed size modal container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-[600px]  max-w-[90vw]  md:max-w-[25vw]  rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={isSwitchOn ? gruzImage : rinkitImage}
                alt="Profile Picture"
                className=" rounded-lg w-full h-full object-contain"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InfoCard;
