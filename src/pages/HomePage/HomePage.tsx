import styles from './HomePage.module.css';
import { Link } from 'react-router-dom'; // <-- Import Link từ react-router-dom

const HomePage = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.mainHeading}>Say hi Nhiếp ảnh gia</h1>
            <p className={styles.subHeading}>
                Có một 'triển lãm' chỉ dành riêng cho Idol ở đây.
            </p>
            {/* Thay thế thẻ <button> bằng component <Link> */}
            <Link to="/exhibition" className={styles.ctaButton}>
                Mở cửa triển lãm
            </Link>
        </div>
    );
};

export default HomePage;