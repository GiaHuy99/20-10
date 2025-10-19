import { useEffect, useRef } from 'react';
import { useAudio } from '../../context/useAudio';
import musicFile from '../../assets/acoustic.mp3'; // <-- Import file nhạc

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { isPlaying } = useAudio();

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                // Dùng try-catch để xử lý lỗi trình duyệt chặn autoplay
                audioRef.current.play().catch(error => {
                    console.log("Audio play was prevented by the browser.", error);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return <audio ref={audioRef} src={musicFile} loop />;
};

export default BackgroundMusic;