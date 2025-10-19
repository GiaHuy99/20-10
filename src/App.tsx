import { Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import HomePage from './pages/HomePage/HomePage';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import QuizPage from "./pages/QuizPage/QuizPage.tsx";
import LetterPage from "./pages/LetterPage/LetterPage.tsx";
import TransitionLayout from "./layouts/TransitionLayout.tsx";
import MusicToggleButton from "./components/MusicToggleButton/MusicToggleButton.tsx";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic.tsx"; // <-- Import trang mới

function App() {
    return (
        <>
            <BackgroundMusic />
            <MusicToggleButton />
            <AnimatedBackground />
            <Routes>
                {/* Tất cả các trang giờ sẽ nằm trong TransitionLayout */}
                <Route element={<TransitionLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/exhibition" element={<PhotoPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/letter" element={<LetterPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;