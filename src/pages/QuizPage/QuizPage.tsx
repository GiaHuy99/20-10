import styles from './QuizPage.module.css';
import Quiz from '../../components/Quiz/Quiz';

const QuizPage = () => {
    // Dữ liệu câu hỏi - bạn có thể thay đổi tùy ý
    const quizQuestions = [
        {
            questionText: 'Trong lớp học, "vị trí" nào sau đây mô tả chính xác nhất về chị Tuyết Anh? :))',
            answerOptions: [
                { answerText: 'A.Học sinh gương mẫu bàn đầu, luôn được thầy cô tuyên dương.', isCorrect: false },
                { answerText: 'B.Thánh ngủ bàn cuối, xem lớp học như chiếc giường êm ái.', isCorrect: false },
                { answerText: 'C.Top 7 những gương mặt vàng trong làng quậy', isCorrect: true },
            ],
        },
        {
            questionText: 'Giọng hát của chị Tuyết Anh được ví như thế nào?',
            answerOptions: [
                { answerText: 'A.Trong trẻo như chim họa mi, có khả năng chữa lành mọi vết thương.', isCorrect: false },
                { answerText: 'B.Trầm ấm như một ly cà phê sữa, nghe là nghiện.', isCorrect: false },
                { answerText: 'C.Rống như tiếng sư tử gầm, độc quyền không thể sao chép.', isCorrect: true },
            ],
        },
        {
            questionText: 'Môn võ nào đã góp phần tạo nên một Tuyết Anh vừa dịu dàng vừa mạnh mẽ?',
            answerOptions: [
                { answerText: 'A.Vovinam - Tinh hoa võ Việt.', isCorrect: false },
                { answerText: 'B.Karate - Quyền đạo Nhật Bản.', isCorrect: false },
                { answerText: 'C.Taekwondo - Với chiếc đai đen đầy quyền lực.', isCorrect: true },
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