import { NextPage } from 'next';

const TranslationService: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">翻訳サービス (日→英)</h1>
      
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-2xl mx-auto text-center">
        <p className="text-gray-700">
          日本語から英語への翻訳を提供しています。ビジネス文書、ウェブサイト、広告、マーケティング資料などの翻訳が可能です。
        </p>
        <h2 className="text-xl font-semibold mt-4">対応分野:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>✅ ビジネス & マーケティング</li>
          <li>✅ ウェブサイト & SNSコンテンツ</li>
          <li>✅ 旅行・観光関連</li>
          <li>✅ 一般文書</li>
        </ul>
        <p className="mt-4 text-gray-700">
          翻訳のご依頼や料金については、お気軽にお問い合わせください。
        </p>
        <a href="/contact" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition">
          お問い合わせ
        </a>
      </div>
    </div>
  );
};

export default TranslationService;
