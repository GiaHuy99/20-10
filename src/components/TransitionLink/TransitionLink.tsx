import type {ReactNode} from 'react';
import { useTransition } from '../../context/useTransition';
interface TransitionLinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

const TransitionLink = ({ to, children, className }: TransitionLinkProps) => {
    const { navigateWithTransition } = useTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
        navigateWithTransition(to);
    };

    return (
        <a href={to} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

export default TransitionLink;