import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/classes.module.css';

const AdultClasses: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Conversational Group Class */}
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start mb-12`}>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/otona1.webp"
            alt="Conversational Group Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>

        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">英会話グループクラス 🗣️</h1>
          <p className="text-gray-700">
            🔹 <strong>リラックスした雰囲気で楽しく英語を話しましょう！</strong><br />
            🔹 <strong>日常会話や実際に使える表現を中心に、英語のコミュニケーション力を向上！</strong><br />
            🔹 <strong>みんなで楽しく学びながら、英語を話す自信をつけましょう！</strong>
          </p>
        </div>
      </div>

      {/* Game Show Event Class - In Development */}
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start opacity-50`}>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/otona2.webp"
            alt="Game Show Event Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto grayscale"
          />
        </div>

        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-500 mb-4">ゲームショーイベント（近日開催予定）</h1>
          <p className="text-gray-500">
            英語でゲームに挑戦！楽しく学べるイベント型クラスです。クイズやアクティビティを通して英語を身につけます。
            レベルに関係なく、どなたでも参加可能！
            現在準備中のため、詳細は近日公開予定です！
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdultClasses;
