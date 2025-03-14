import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/classes.module.css';

const PremiumClass: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Premium English Coaching */}
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start mb-12`}>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/premium1.webp"
            alt="Premium English Coaching"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>

        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">プレミアム英語コーチング ✨</h1>
          <p className="text-gray-700">
            🔹 <strong>一人ひとりに最適化された英語学習プログラム</strong><br />
            🔹 <strong>最新の学習技術と革新的なメソッドを活用！</strong><br />
            🔹 <strong>個別にカスタマイズされた復習教材＆学習ツールを提供！</strong>
          </p>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-2">📍 クラスの特徴</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ <strong>柔軟な学習プラン</strong> - 生徒の目標に合わせてカリキュラムを設計＆調整！</li>
              <li>✅ <strong>最新のテクノロジーを活用</strong> - AIツールやデータ分析を駆使して学習効率を最大化！</li>
              <li>✅ <strong>完全オーダーメイドの復習教材</strong> - 学習内容をしっかり定着させるための個別サポート！</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Business English Solutions */}
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start`}>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/premium2.webp"
            alt="Business English Solutions"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>

        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ビジネス英語ソリューション 🏢</h1>
          <p className="text-gray-700">
            🔹 <strong>企業向けにカスタマイズされた英語リソースを提供！</strong><br />
            🔹 <strong>従業員が英語話者とのやり取りをスムーズにできるようサポート！</strong><br />
            🔹 <strong>業種や業務に合わせた専用の英語教材を作成！</strong>
          </p>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-2">📍 クラスの特徴</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ <strong>オーダーメイドの英語資料</strong> - 会社のニーズに合わせた英語マニュアルやガイドを作成！</li>
              <li>✅ <strong>実際の業務に即した練習</strong> - 業界や職種に応じた英語フレーズや表現を習得！</li>
              <li>✅ <strong>効率的な学習サポート</strong> - 企業向けのトレーニングプランで社員のスキルを向上！</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumClass;
