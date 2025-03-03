import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout'; // Make sure this is imported
import styles from '../styles/about.module.css';

const About: NextPage = () => {
  return (
    <Layout> {/* Ensure Layout is wrapping everything */}
      <Head>
        <title>私たちについて | マックスの英語クラブ</title>
      </Head>
      <section className={styles['about-page']}>
        <h1 className="text-2xl font-bold text-center">私たちについて</h1>
        <p className="text-gray-700 text-center">
          私たちは、神奈川北部（登戸地域）で英語教育に取り組んでいる教育クラブです。子供から大人まで、全ての方に英語学習の機会を提供しています。
        </p>
      </section>
    </Layout>
  );
};

export default About;
