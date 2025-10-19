import { useContext } from 'react';
// Import context từ file định nghĩa context mới
import { TransitionContext } from './transitionContext';

export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return context;
};