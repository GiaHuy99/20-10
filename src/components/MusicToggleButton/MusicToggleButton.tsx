import { useAudio } from '../../context/useAudio';
import { FaPlay, FaPause } from 'react-icons/fa'; // Dùng react-icons
import styles from './MusicToggleButton.module.css';

const MusicToggleButton = () => {
    const { isPlaying, togglePlay } = useAudio();

    return (
        <button onClick={togglePlay} className={styles.musicButton}>
            {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
    );
};

export default MusicToggleButton;