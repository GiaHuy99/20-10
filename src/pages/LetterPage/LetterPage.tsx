import styles from './LetterPage.module.css';

// Import bức ảnh nhỏ cho lá thư
import letterThumbnail from '../../assets/476484848_122217317792129852_1096564734549781805_n.jpg'; // <-- THÊM DÒNG NÀY

const LetterPage = () => {
    return (
        <main className={styles.pageContainer}>
            <div className={styles.letterContent}>
                {/* --- THÊM KHUNG HÌNH ẢNH NÀY VÀO ĐÂY --- */}
                <img src={letterThumbnail} alt="Thumbnail" className={styles.letterImageThumbnail}/>

                <p className={styles.greeting}> Gửi Lời chúc 20/10</p>
                <p> Chúc "nàng thơ" của những khung hình sẽ luôn xinh đẹp, hạnh phúc và đầy cảm hứng trong đời thực. Mong mọi điều tốt đẹp nhất sẽ đến với chị! </p>

            </div>
        </main>
    );
};

export default LetterPage;