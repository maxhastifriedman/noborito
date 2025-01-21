import { NextPage } from 'next';
import styles from '../styles/kodomo.module.css'; // Reuse the same styles for now

const Sotoasobi: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">外遊びクラス</h1>
      <p className="text-gray-600">
        自然の中で英語を学ぶクラスです。外遊びを通じて、楽しく英語を学び、体を動かしながら実践的な英語スキルを身につけます。
      </p>
    </div>
  );
};

export default Sotoasobi;
