import { useState, type ReactNode, useCallback } from 'react';
import { AudioContext } from './audioContext';

export const AudioProvider = ({ children }: { children: ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = useCallback(() => {
        // Dùng callback form để đảm bảo state luôn mới nhất
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    }, []);

    return (
        <AudioContext.Provider value={{ isPlaying, togglePlay }}>
            {children}
        </AudioContext.Provider>
    );
};