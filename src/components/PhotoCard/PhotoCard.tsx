import styles from './PhotoCard.module.css';

// Định nghĩa kiểu dữ liệu cho props để code chặt chẽ hơn
interface PhotoCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const PhotoCard = ({ imageUrl, title, description }: PhotoCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.layer1}></div>
                <div className={styles.layer2}></div>
                <img src={imageUrl} alt={title} className={styles.photo} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>

        </div>
    );
};

export default PhotoCard;