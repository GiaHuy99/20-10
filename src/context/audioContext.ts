import { createContext } from 'react';

export interface AudioContextType {
    isPlaying: boolean;
    togglePlay: () => void;
}

export const AudioContext = createContext<AudioContextType | undefined>(undefined);