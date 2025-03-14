import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/classes.module.css';

const Classes: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Parent-Child English Class */}
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start mb-8`}>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/kodomo2.webp"
            alt="Parent-Child English Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>
        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">子供英語クラス</h1>
          <p className="text-gray-700">
          英語で「聞く」「話す」力を楽しく伸ばそう！このクラスでは、ゲームやアクティビティを通して、英語での基本的な会話力を身につけます。たくさんの単語や表現を学びながら、実際に話す練習をすることで、自然な英語に慣れていきます。さらに、フォニックス（英語の発音ルール）や簡単なリーディングにも挑戦し、英語の基礎力をしっかりと育てます。英語でのコミュニケーション力を身につけたい小学生にぴったりのクラスです！
          </p>
        </div>
      </div>

      {/* Outdoor Play Event - Not Yet Available */}
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start opacity-50`}>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/sports.webp"
            alt="Outdoor Activity Event"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto grayscale"
          />
        </div>
        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-500 mb-4">外遊びイベント（近日開催予定）</h1>
          <p className="text-gray-500">
            英語を使って楽しく体を動かそう！スポーツやゲームを通して自然な英語を体験できるイベントです。
            英語でルールを理解し、実際に遊びながら英文の組み立て方や会話表現を学べます。
            現在準備中のため、詳細は近日公開予定です！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
