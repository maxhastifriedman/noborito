import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/classes.module.css';

const Premium: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start`}>
        {/* Image Section */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/premium.webp" // Make sure this file exists in /public/images/
            alt="Premium Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">プレミアムクラス</h1>
          <p className="text-gray-700">
            プレミアムクラスでは、個別指導、特別プログラム、専門的な英語コースを提供しています。
          </p>

          <h2 className="text-xl font-semibold mt-4">プレミアムクラスの特徴</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>✅ **個別指導プログラム** - 受講者の目的に合わせたオーダーメイドの英語レッスン</li>
            <li>✅ **ビジネス英語コース** - プレゼン、会議、交渉に特化した英語トレーニング</li>
            <li>✅ **特別ワークショップ** - 海外留学準備、TOEFL・IELTS対策など</li>
          </ul>

          <p className="mt-4 text-gray-700">
            プレミアムクラスについて詳しく知りたい方は、以下のリンクからお問い合わせください。
          </p>

          <a href="/contact" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition">
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Premium;
