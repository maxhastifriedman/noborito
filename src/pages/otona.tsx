import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/kodomo.module.css'; // Reuse the same CSS module as Kodomo

const Otona: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Class 1: 1-on-1 Coaching */}
      <div className={styles.serviceItem}>
        {/* Placeholder Image */}
        <Image
          src="/images/coach.webp"
          alt="1-on-1 Coaching Class Image"
          width={400}
          height={300}
          className={styles.serviceImage}
        />
        <div className={styles.serviceDescription}>
          <h2 className={styles.serviceTitle}>1対1のコーチングクラス</h2>
          <p className={styles.serviceText}>
            このクラスは、特定のスキルを向上させたい方のための1対1の英語コーチングセッションです。
            発音、文法、リスニング、スピーキングなど、重点的に学びたい分野を自由に選ぶことができます。
          </p>
        </div>
      </div>

      {/* Class 2: Group Music Activity */}
      <div className={styles.serviceItem}>
        {/* Placeholder Image */}
        <Image
          src="/images/jam.webp"
          alt="Group Music Activity Class Image"
          width={400}
          height={300}
          className={styles.serviceImage}
        />
        <div className={styles.serviceDescription}>
          <h2 className={styles.serviceTitle}>英語で楽しむ音楽セッション</h2>
          <p className={styles.serviceText}>
            音楽を通じて英語を楽しむグループクラスです。参加者は一緒に演奏したり、英語の歌を作ったりして、
            自然な形で英語を練習します。音楽を愛する方に最適なプログラムです！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otona;
