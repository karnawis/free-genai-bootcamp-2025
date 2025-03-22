// src/hooks/useSoundHandler.js
import { useState } from 'react';
import useSound from 'use-sound';
import tickSound from '../assets/sounds/soundbuttonclick.wav';

const useSoundHandler = (track = tickSound) => {
    const [play, { stop }] = useSound(track);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaySound = (newTrack) => {
        if (newTrack && newTrack !== track) {
            stop();
            play(newTrack);
            return;
        }
        if (!isPlaying) {
            setIsPlaying(true);
            play();
        } else {
            setIsPlaying(false);
            stop();
        }
    };

    return { handlePlaySound, isPlaying };
};

export default useSoundHandler;