import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/kodomo.module.css'; // Reuse the same CSS module as Kodomo

const Nenkyaku: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Class 1: Debate Class */}
      <div className={styles.serviceItem}>
        {/* Placeholder Image */}
        <Image
          src="/images/debate.webp"
          alt="Debate Class Image"
          width={400}
          height={300}
          className={styles.serviceImage}
        />
        <div className={styles.serviceDescription}>
          <h2 className={styles.serviceTitle}>シニアディベートクラス</h2>
          <p className={styles.serviceText}>
            テレビ番組「Abema Prime」のように、様々なトピックについてディベートするクラスです。
            参加者は、時事問題や文化、ライフスタイルについて意見を述べ、ディスカッションを通じて英語のスピーキングスキルを向上させます。
          </p>
        </div>
      </div>

      {/* Class 2: Book Club */}
      <div className={styles.serviceItem}>
        {/* Placeholder Image */}
        <Image
          src="/images/book.webp"
          alt="Book Club Class Image"
          width={400}
          height={300}
          className={styles.serviceImage}
        />
        <div className={styles.serviceDescription}>
          <h2 className={styles.serviceTitle}>英語で楽しむ読書クラブ</h2>
          <p className={styles.serviceText}>
            このクラスでは、英語の本を読みながら楽しくディスカッションを行います。
            読書を通じて新しい単語や表現を学びながら、リーディングスキルとスピーキングスキルを向上させます。
            初心者から上級者まで、どなたでもご参加いただけます！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nenkyaku;
