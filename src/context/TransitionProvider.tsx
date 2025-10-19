import { useState, type ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// Import context và type từ file mới
import { TransitionContext } from './transitionContext';

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    const navigateWithTransition = useCallback((to: string) => {
        setIsTransitioning(true);

        setTimeout(() => {
            navigate(to);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 600);
    }, [navigate]);

    return (
        <TransitionContext.Provider value={{ isTransitioning, navigateWithTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};