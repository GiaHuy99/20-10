import { Outlet } from 'react-router-dom';
import Shutter from '../components/Shutter/Shutter';
import { useTransition } from '../context/useTransition.ts';
const TransitionLayout = () => {
    const { isTransitioning } = useTransition();

    return (
        <>
            <Shutter isActive={isTransitioning} />
            <Outlet /> {/* Đây là nơi các trang con (HomePage, PhotoPage...) sẽ được render */}
        </>
    );
};

export default TransitionLayout;