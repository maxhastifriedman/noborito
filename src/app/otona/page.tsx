import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/classes.module.css';

const Roleplay: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start`}>
        {/* Image Section */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/roleplay.webp"
            alt="Roleplay Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">実践型ロールプレイ英会話クラス 🏆</h1>
          <p className="text-gray-700">
            🔹 <strong>日常生活や旅行で実際に使える英語を、リアルなシナリオを通じて練習！</strong><br />
            🔹 <strong>事前に厳選された単語・文法を活用しながら、対話形式でスムーズに英語力を向上！</strong><br />
            🔹 <strong>シナリオごとに段階的なチャレンジが用意され、効果的に学習を進められる！</strong>
          </p>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-2">📍 クラスの特徴</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ <strong>リアルなシナリオ体験</strong> - 盗難の報告、薬の購入、乗り換えトラブルなど、実際の状況を想定した英会話を練習！</li>
              <li>✅ <strong>語彙＆文法をしっかり活用</strong> - すぐに使える英単語＆文法をレッスン前に配布し、実際の会話で活用！</li>
              <li>✅ <strong>カスタマイズ可能な難易度</strong> - 初級から上級まで、レベルに応じた練習が可能！</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roleplay;
