import { NextPage } from 'next'; 
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/about.module.css';

const About: NextPage = () => {
  return (
    <> 
      <Head>
        <title>私たちについて | マックスの英語クラブ</title>
      </Head>
      <section className={styles['about-page']}>
        <div className={styles['overlay']}></div>
        <div className={styles['content']}>
          <h1>講師紹介</h1>
          <p>
            私は、神奈川北部（登戸地域）で英語教育に取り組んでいる教育クラブです。
            子供から大人まで、全ての方に英語学習の機会を提供しています。
          </p>

          {/* Profile Image Section */}
          <div className={styles['profile-container']}>
            <Image
              src="/images/about1.jpg"
              alt="Profile Photo"
              width={180}
              height={180}
              className={styles['profile-photo']}
            />
          </div>

          {/* Qualifications Section */}
          <div className={styles['qualifications']}>
            <h2>資格・経歴</h2>
            <ul>
              <li>TESL（英語教授法）資格取得</li>
              <li>日本にて数年間の英語指導経験（全年齢対象）</li>
              <li>日本語能力試験（JLPT）N1合格（ゼロから2年で取得）</li>
              <li>アメリカ州認定音楽教育教員免許保持</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
