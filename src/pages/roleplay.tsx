import { NextPage } from 'next';
import styles from '../styles/kodomo.module.css'; // Reuse the same styles for now

const Roleplay: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">ロールプレイクラス</h1>
      <p className="text-gray-600">
        様々なシチュエーションでのロールプレイを通じて、実践的な英語を学ぶクラスです。
        旅行、買い物、仕事など、日常生活で役立つフレーズを楽しく練習します。
      </p>
    </div>
  );
};

export default Roleplay;
