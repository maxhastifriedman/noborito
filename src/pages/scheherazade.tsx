import { NextPage } from 'next';
import styles from '../styles/classes.module.css';

const Scheherazade: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Service Item Wrapper */}
      <div className={styles.serviceItem}>
        {/* Image Section */}
        <div className={styles.serviceImage}>
          {/* Replace with an actual image when available */}
          <img
            src="/images/book.webp"
            alt="Scheherazade Class"
            className={styles.serviceImage}
          />
        </div>
        {/* Text Section */}
        <div className={styles.serviceDescription}>
          <h1 className={styles.serviceTitle}>シェヘラザードクラス</h1>
          <p className={styles.serviceText}>
            物語を通じて英語を学ぶ創造的なクラスです。想像力を働かせながら、語彙や表現を自然に身につけることができます。
            自分のストーリーを作り上げる体験を楽しんでください！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scheherazade;
