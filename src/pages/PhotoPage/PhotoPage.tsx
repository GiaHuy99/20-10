import styles from './PhotoPage.module.css';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
// Import ảnh bạn đã thêm vào assets
import idolPhoto1 from '../../assets/Screenshot 2025-10-19 at 17.18.29.png';
import idolPhoto2 from '../../assets/Screenshot 2025-10-19 at 17.17.00.png';
import TransitionLink from "../../components/TransitionLink/TransitionLink.tsx";
import { BiRightArrowAlt } from 'react-icons/bi'; // <-- THÊM DÒNG NÀY
const PhotoPage = () => {

    return (
        <main className={styles.pageContainer}>
            {/* Container này sẽ là thanh cuộn ngang */}
            <div className={styles.scrollContainer}>
                <PhotoCard
                    imageUrl={idolPhoto1}
                    title="Khoảnh khắc 01"
                    description="Nụ cười này không chỉ làm bừng sáng cả khung hình, mà còn mang lại năng lượng tích cực cho bất kỳ ai nhìn thấy..."
                />
                <PhotoCard
                    imageUrl={idolPhoto2}
                    title="Khoảnh khắc 02"
                    description="Ánh mắt trong bức ảnh này thể hiện sự tập trung và đam mê. Một góc nhìn khác, sâu lắng và đầy cuốn hút..."
                />
                {/* Bạn có thể thêm nhiều PhotoCard hơn nữa vào đây */}
                <TransitionLink to="/quiz" className={styles.quizArrowBanner}>
                    <span>Thử thách kiến thức?</span>
                </TransitionLink>
            </div>

        </main>
    );
};

export default PhotoPage;