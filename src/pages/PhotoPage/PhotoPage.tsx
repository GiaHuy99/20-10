import styles from './PhotoPage.module.css';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
// Import ảnh bạn đã thêm vào assets
import idolPhoto1 from '../../assets/Screenshot 2025-10-19 at 17.18.29.png';
import idolPhoto2 from '../../assets/Screenshot 2025-10-19 at 17.17.00.png';
import TransitionLink from "../../components/TransitionLink/TransitionLink.tsx";
import idolPhoto3 from '../../assets/Screenshot 2025-10-19 at 21.14.03.png';
import idolPhoto4 from '../../assets/Screenshot 2025-10-19 at 21.13.22.png';
import idolPhoto5 from '../../assets/Screenshot 2025-10-19 at 21.10.46.png';
import idolPhoto6 from '../../assets/Screenshot 2025-10-19 at 21.05.38.png';


const PhotoPage = () => {

    return (
        <main className={styles.pageContainer}>
            {/* Container này sẽ là thanh cuộn ngang */}
            <div className={styles.scrollContainer}>
                <PhotoCard
                    imageUrl={idolPhoto1}
                    title="Khoảnh khắc khiến Fan dừng lại"
                    description="Báo cáo: Có một nụ cười đang làm out nét cả ly nước xinh đẹp bên cạnh và cả tâm trí của người xem."
                />
                <PhotoCard
                    imageUrl={idolPhoto2}
                    title="Chủ thể chính"
                    description="Người ta nói trong ảnh phải có chủ thể chính và phụ. Xin lỗi chứ trong khung hình này, mọi sự chú ý đều đã va vào chủ thể chính mất rồi."
                />
                <PhotoCard
                    imageUrl={idolPhoto3}
                    title="Con mắt của người nghệ sĩ"
                    description="Với cùng một khung cảnh, nhưng qua lăng kính của chị, nó lại mang một cảm xúc rất khác. chị không chỉ thấy ánh đèn, mà còn thấy được sự ấm áp. Chị không chỉ thấy dòng xe, mà còn thấy được dòng chảy của cuộc sống. Đây chính là sự khác biệt giữa một người chụp ảnh và một nghệ sĩ."
                />
                <PhotoCard
                    imageUrl={idolPhoto4}
                    title="Khi khu kẹt xe trở thành hình ảnh nghệ thuật"
                    description="Em chỉ thấy kẹt xe. Nhưng qua lăng kính của chị, con đường ấy lại trở thành một bức tranh chuyển động đầy màu sắc và cảm xúc."
                />
                <PhotoCard
                    imageUrl={idolPhoto5}
                    title="Người lưu giữ những câu chuyện"
                    description="Em cá là mọi người chỉ nhìn lướt. Chị đã chụp lại hàng trăm lời nguyện ước, hàng trăm câu chuyện thầm lặng được gửi gắm vào gió. Một nhiếp ảnh gia tài năng không chỉ ghi lại hình ảnh, mà còn biết cách lưu giữ cả những cảm xúc vô hình."
                />
                <PhotoCard
                    imageUrl={idolPhoto6}
                    title="Nét đấy"
                    description="Ai đây ta, giống racing girl, nhìn báo báo vậy ta đúng là đa tài"
                />


                {/* Bạn có thể thêm nhiều PhotoCard hơn nữa vào đây */}
                <TransitionLink to="/quiz" className={styles.quizArrowBanner}>
                    <span>Khám phá sự đa tài của Idol</span>
                </TransitionLink>
            </div>

        </main>
    );
};

export default PhotoPage;