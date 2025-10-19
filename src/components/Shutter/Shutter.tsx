import styles from './Shutter.module.css';

interface ShutterProps {
    isActive: boolean;
}

const Shutter = ({ isActive }: ShutterProps) => {
    return (
        // Dùng toán tử 3 ngôi để thêm class 'active' khi cần
        <div className={`${styles.shutterContainer} ${isActive ? styles.active : ''}`}>
            <div className={`${styles.panel} ${styles.topPanel}`}></div>
            <div className={`${styles.panel} ${styles.bottomPanel}`}></div>
        </div>
    );
};

export default Shutter;