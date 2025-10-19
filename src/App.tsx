import { Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import HomePage from './pages/HomePage/HomePage';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import QuizPage from "./pages/QuizPage/QuizPage.tsx";
import LetterPage from "./pages/LetterPage/LetterPage.tsx"; // <-- Import trang mới

function App() {
    return (
        <>
            <AnimatedBackground />
            <Routes> {/* <-- Dùng Routes để định nghĩa các trang */}
                <Route path="/" element={<HomePage />} />
                <Route path="/exhibition" element={<PhotoPage />} />
                <Route path="/quiz" element={<QuizPage />}/>
                <Route path="/letter" element={<LetterPage />} />
            </Routes>
        </>
    );
}

export default App;