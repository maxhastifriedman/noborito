'use client';

import { useState } from 'react';

const TranslationService = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'lyrics'>('general');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">翻訳サービス (日⇄英)</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-6 py-3 text-lg font-semibold rounded-l-lg transition ${
            activeTab === 'general' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📄 一般翻訳
        </button>
        <button
          onClick={() => setActiveTab('lyrics')}
          className={`px-6 py-3 text-lg font-semibold rounded-r-lg transition ${
            activeTab === 'lyrics' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🎶 歌詞翻訳
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-2xl mx-auto text-center transition-all">
      {activeTab === 'general' ? (
  // General Translation Section
  <div>
    <h2 className="text-2xl font-semibold text-gray-800">一般翻訳 & ネイティブ校正</h2>
    <p className="text-gray-700 leading-relaxed mt-2">
      英語翻訳だけでなく、**既存の英語コンテンツの校正・改善** も対応可能。  
      **ミュージアム・企業・観光関連** など、プロフェッショナルな英語表現が必要な方へ。
    </p>

    <h3 className="text-xl font-semibold mt-4">🔹 こんな方におすすめ:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto max-w-sm">
      <li>🏛 **ミュージアム** – 展示説明、パンフレット、音声ガイド翻訳</li>
      <li>🏬 **小規模ビジネス** – ウェブサイト、広告、メニュー、SNS投稿</li>
      <li>✍️ **英語の校正・改善** – 既存の英語コンテンツのチェック・洗練</li>
      <li>📜 **観光 & ホスピタリティ** – ホテル、観光地の案内、標識</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">🔹 サービス内容:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto max-w-sm">
      <li>📄 **日本語→英語翻訳** – 直訳ではなく、**自然なネイティブ英語** へ</li>
      <li>✍️ **英語のネイティブ校正 & リライト** – 誤訳・不自然な表現の修正</li>
      <li>🌍 **文化的なニュアンスを考慮した英訳** – 英語圏の読者に伝わる表現</li>
    </ul>

    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-800">🔍 既存の英語コンテンツ、問題ありませんか？</h3>
      <p className="text-gray-700 mt-2">
        ✅「直訳っぽくて不自然な英語になっているかも…」  
        ✅「プロフェッショナルな英語に仕上げたい！」  
        **このような場合、ネイティブ校正サービスがおすすめです。**
      </p>
    </div>

    <a href="/contact" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
      お問い合わせはこちら
    </a>
  </div>
) : (

          // Song Lyric Translation Section
          <div>
            <h2 className="text-2xl font-semibold text-purple-700">🎶 歌詞翻訳サービス</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              日本語の歌詞を美しい英語に翻訳します！意訳・直訳どちらにも対応し、<br />
              原曲の雰囲気やリズムを大切にした自然な英訳を提供します。
            </p>

            {/* Featured Translation Section */}
            <div className="bg-purple-100 p-4 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold text-purple-800">🎼 翻訳サンプル: どんぐりころころ</h3>
              
              {/* Lyrics Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-4">
                {/* Japanese Lyrics */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800">日本語 (Original)</h4>
                  <p className="text-gray-700 mt-2">
                    どんぐり ころころ どんぶりこ<br />
                    おいけに はまって さあ たいへん<br />
                    どじょうが 出てきて こんにちは<br />
                    ぼっちゃん いっしょに あそびましょう<br /><br />

                    どんぐり ころころ よろこんで<br />
                    しばらく いっしょに あそんだが<br />
                    やっぱり おやまが こいしいと<br />
                    泣いては どじょうを こまらせた
                  </p>
                </div>

                {/* English Lyrics */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800">英語 (Translated)</h4>
                  <p className="text-gray-700 mt-2">
                    An acorn tumbled, tumbled,<br />
                    Right down the hill,<br />
                    Now it splashed in a pond,<br />
                    It's not ideal.<br /><br />

                    Mudfish man came to see him,<br />
                    And said, “Hello!<br />
                    Let’s play together,<br />
                    Okay, here we go!”<br /><br />

                    The tumble, tumble acorn<br />
                    Was just having fun,<br />
                    For a bit with the mudfish,<br />
                    He swam in mud.<br /><br />

                    But acorn missed his mountain,<br />
                    Far from eel,<br />
                    “Wah wah,” he cried so much—<br />
                    It just wasn’t ideal!
                  </p>
                </div>
              </div>

              {/* Explanation Box */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-gray-800">🎤 なぜこの翻訳が優れているのか？</h3>
                <p className="text-gray-700 mt-2">
                  この翻訳は、**原曲の意味を忠実に保ちながら、リズムや歌いやすさを重視** しています。  
                  ✅ **語感と韻** を大切にし、英語でも楽しく歌えるように調整。  
                  ✅ **「どんぐりころころ」の繰り返し** を「tumbled, tumbled」と再現し、元のリズム感を維持。  
                  ✅ **遊び心のある表現** (e.g., "Mudfish man") で **日本語の可愛らしい世界観をそのまま表現**。  
                </p>
              </div>
            </div>

            <a href="/lyrics-translation" className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
              歌詞翻訳の詳細を見る
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslationService;
