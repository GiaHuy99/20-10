import { useState, type ReactNode, useCallback } from 'react';
import { AudioContext } from './audioContext';

export const AudioProvider = ({ children }: { children: ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    return (
        <AudioContext.Provider value={{ isPlaying, togglePlay }}>
            {children}
        </AudioContext.Provider>
    );
};