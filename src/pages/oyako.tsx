import { NextPage } from 'next';
import styles from '../styles/classes.module.css';

const Oyako: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Service Item Wrapper */}
      <div className={styles.serviceItem}>
        {/* Image Section */}
        <div className={styles.serviceImage}>
          {/* Replace with Image component when you have an image */}
          <img
            src="/images/music.webp"
            alt="Parent-Child Class"
            className={styles.serviceImage}
          />
        </div>
        {/* Text Section */}
        <div className={styles.serviceDescription}>
          <h1 className={styles.serviceTitle}>親子クラス</h1>
          <p className={styles.serviceText}>
            親子で楽しむ英語クラスです。このクラスでは、親子が一緒に英語を学び、楽しいアクティビティを通じて絆を深めます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oyako;
