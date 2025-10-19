import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
    return (
        <div className={styles.backgroundContainer}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>
        </div>
    );
};

export default AnimatedBackground;