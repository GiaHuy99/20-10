import { createContext } from 'react';

// Định nghĩa kiểu dữ liệu cho context
export interface TransitionContextType {
    isTransitioning: boolean;
    navigateWithTransition: (to: string) => void;
}

// Tạo và export context
export const TransitionContext = createContext<TransitionContextType | undefined>(undefined);