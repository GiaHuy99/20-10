import { useState, type ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionContext } from './transitionContext';
import { useAudio } from './useAudio'; // <-- THÊM DÒNG NÀY

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();
    const { isPlaying, togglePlay } = useAudio(); // <-- SỬ DỤNG AUDIO HOOK Ở ĐÂY

    const navigateWithTransition = useCallback((to: string) => {
        // --- THÊM LOGIC BẬT NHẠC VÀO ĐÂY ---
        if (!isPlaying) {
            togglePlay();
        }
        // ------------------------------------

        setIsTransitioning(true);

        setTimeout(() => {
            navigate(to);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 600);
    }, [navigate, isPlaying, togglePlay]); // <-- Thêm isPlaying và togglePlay vào dependency array

    return (
        <TransitionContext.Provider value={{ isTransitioning, navigateWithTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};