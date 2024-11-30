import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/kodomo.module.css'; // Import the CSS module

const Kodomo: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Class 1: Music Class */}
      <div className={styles.serviceItem}>
        <Image
          src="/images/music.webp"
          alt="Music Class Image"
          width={400}
          height={300}
          className={styles.serviceImage}
        />
        <div className={styles.serviceDescription}>
          <h2 className={styles.serviceTitle}>音楽クラス</h2>
          <p className={styles.serviceText}>
            子供たちは楽しく音楽を通じて英語を学びます。楽しさと学びが融合した体験です。
          </p>
        </div>
      </div>

      {/* Class 2: Sports Class */}
      <div className={styles.serviceItem}>
        <Image
          src="/images/sports.webp"
          alt="Sports Class Image"
          width={400}
          height={300}
          className={styles.serviceImage}
        />
        <div className={styles.serviceDescription}>
          <h2 className={styles.serviceTitle}>スポーツクラス</h2>
          <p className={styles.serviceText}>
            スポーツを通じて楽しく英語を学ぶ、エネルギッシュな体験を提供します。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kodomo;
