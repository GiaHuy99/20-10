import styles from './LetterPage.module.css';

const LetterPage = () => {
    return (
        <main className={styles.pageContainer}>
            <div className={styles.letterContent}>
                <p className={styles.greeting}>Gửi nhiếp ảnh gia đặc biệt,</p>
                <p>
                    Nếu bạn đang đọc được những dòng này, điều đó có nghĩa là bạn không chỉ là một người cầm máy ảnh, mà còn là một người thật sự thấu hiểu. Cảm ơn bạn vì đã dành thời gian, không chỉ để chụp những bức ảnh, mà còn để nhìn thấy những câu chuyện đằng sau chúng.
                </p>
                <p>
                    Mỗi khoảnh khắc bạn bắt được đều là một món quà. Mong rằng chúng ta sẽ còn cùng nhau tạo nên nhiều "triển lãm" tuyệt vời hơn nữa trong tương lai.
                </p>

            </div>
        </main>
    );
};

export default LetterPage;