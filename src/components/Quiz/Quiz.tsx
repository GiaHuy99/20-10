import { useState } from 'react';
import styles from './Quiz.module.css';
import TransitionLink from "../TransitionLink/TransitionLink.tsx";
// Kiểu dữ liệu cho một câu hỏi
type Question = {
    questionText: string;
    answerOptions: {
        answerText: string;
        isCorrect: boolean;
    }[];
};

// Props của component, giờ sẽ nhận một mảng các câu hỏi
interface QuizProps {
    questions: Question[];
}

const Quiz = ({ questions }: QuizProps) => {
    // State để theo dõi câu hỏi hiện tại
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // State để theo dõi trạng thái trả lời (để thêm class CSS)
    const [selectedOption, setSelectedOption] = useState<{ answerText: string; isCorrect: boolean } | null>(null);
    // State để theo dõi điểm số
    const [score, setScore] = useState(0);
    // State để quyết định khi nào hiển thị kết quả cuối cùng
    const [showResult, setShowResult] = useState(false);
    // State cho hiệu ứng fade out
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleAnswerClick = (option: { answerText: string; isCorrect: boolean }) => {
        if (selectedOption) return; // Nếu đã chọn rồi thì không làm gì cả

        // Cập nhật câu trả lời đã chọn
        setSelectedOption(option);

        // Nếu trả lời đúng, tăng điểm
        if (option.isCorrect) {
            setScore(score + 1);
        }

        // Đợi một chút để người dùng thấy kết quả đúng/sai, sau đó chuyển câu
        setTimeout(() => {
            setIsFadingOut(true); // Bắt đầu hiệu ứng mờ đi

            setTimeout(() => {
                const nextQuestionIndex = currentQuestionIndex + 1;
                if (nextQuestionIndex < questions.length) {
                    // Chuyển sang câu hỏi tiếp theo
                    setCurrentQuestionIndex(nextQuestionIndex);
                    setSelectedOption(null); // Reset lại lựa chọn
                } else {
                    // Hết câu hỏi, hiển thị kết quả
                    setShowResult(true);
                }
                setIsFadingOut(false); // Kết thúc hiệu ứng mờ đi, hiện câu mới
            }, 500); // Đợi 0.5s để hiệu ứng fade out hoàn thành

        }, 1500); // Đợi 1.5s sau khi người dùng chọn đáp án
    };


    // --- RENDER LOGIC ---

    // Nếu showResult là true, hiển thị màn hình kết quả
    if (showResult) {
        return (
            <div className={`${styles.quizContainer} ${styles.resultsContainer}`}>
                <h2>Hoàn thành!</h2>
                <p className={styles.scoreText}>
                    Bạn trả lời đúng {score} trên {questions.length} câu.
                </p>
                <p className={styles.invitation}>Có một lá thư đang đợi bạn...</p>
                {/* Nút mới dẫn đến trang thư */}
                <TransitionLink to="/letter" className={styles.letterLink}>
                    Mở thư
                </TransitionLink>
            </div>
        );
    }
    // Lấy dữ liệu câu hỏi hiện tại
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className={`${styles.quizContainer} ${isFadingOut ? styles.fadeOut : ''}`}>
            <div className={styles.questionHeader}>
        <span className={styles.questionCount}>
          Câu {currentQuestionIndex + 1}/{questions.length}
        </span>
                <h2 className={styles.questionText}>{currentQuestion.questionText}</h2>
            </div>
            <div className={styles.answerSection}>
                {currentQuestion.answerOptions.map((option, index) => {
                    let buttonClass = styles.answerButton;
                    if (selectedOption) {
                        if (option.isCorrect) {
                            buttonClass += ` ${styles.correct}`; // Luôn tô xanh đáp án đúng
                        } else if (option.answerText === selectedOption.answerText) {
                            buttonClass += ` ${styles.incorrect}`; // Tô đỏ đáp án sai mà người dùng đã chọn
                        }
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(option)}
                            className={buttonClass}
                            disabled={!!selectedOption} // Vô hiệu hóa nút sau khi đã chọn
                        >
                            {option.answerText}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Quiz;