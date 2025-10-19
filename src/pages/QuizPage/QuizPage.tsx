import styles from './QuizPage.module.css';
import Quiz from '../../components/Quiz/Quiz';

const QuizPage = () => {
    // Dữ liệu câu hỏi - bạn có thể thay đổi tùy ý
    const quizQuestions = [
        {
            questionText: 'Món ăn vặt mà "Idol" thích nhất là gì?',
            answerOptions: [
                { answerText: 'Trà sữa trân châu', isCorrect: false },
                { answerText: 'Bánh tráng trộn', isCorrect: true },
                { answerText: 'Xoài lắc', isCorrect: false },
                { answerText: 'Phô mai que', isCorrect: false },
            ],
        },
        {
            questionText: 'Idol hát như thế nào?',
            answerOptions: [
                { answerText: 'Hay', isCorrect: false },
                { answerText: 'Dở', isCorrect: false },
                { answerText: 'Rống', isCorrect: false },
                { answerText: 'Rống nhưng độc quyền', isCorrect: true },
            ],
        },
        {
            questionText: 'Màu sắc yêu thích của "Idol" là gì?',
            answerOptions: [
                { answerText: 'Đen & Hồng', isCorrect: true },
                { answerText: 'Xanh & Vàng', isCorrect: false },
                { answerText: 'Tím mộng mơ', isCorrect: false },
                { answerText: 'Cam năng động', isCorrect: false },
            ],
        }
    ];

    return (
        <main className={styles.pageContainer}>
            <div className={styles.titleWrapper}>
                <h1> Happy Quiz</h1>
                <p>Những Điểm Độc Quyền ở Idol!</p>
            </div>
            <Quiz questions={quizQuestions} />
        </main>
    );
};

export default QuizPage;