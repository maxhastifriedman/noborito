import { NextPage } from 'next'; 
import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
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
          <h1 className="text-2xl font-bold">講師紹介</h1>
          <p className="text-lg mt-4">
            私は、神奈川北部（登戸地域）で英語教育に取り組んでいる教育クラブです。
            子供から大人まで、全ての方に英語学習の機会を提供しています。
          </p>

          {/* Profile Image Section */}
          <div className={styles['profile-container']}>
            <Image
              src="/images/about1.jpg" // Image in public folder
              alt="Profile Photo"
              width={180} // Match CSS size
              height={180}
              className={styles['profile-photo']}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
