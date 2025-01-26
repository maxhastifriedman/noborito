// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/images/wallpaper.jpg')] bg-cover bg-center bg-fixed text-white">
      {/* Navbar */}
      <nav className="bg-white bg-opacity-80 backdrop-blur-sm py-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">マックスの登戸英語クラブ</h1>
          <ul className="flex gap-4">
            <li>
              <Link href="/about" className="text-gray-800 hover:text-blue-500">
                私たちについて
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-blue-500">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Welcome to Our Noborito English Club!</h1>
          <p className="mt-4 text-lg">
            全ての年齢層の方々に向けた英語教育の機会を提供します
          </p>
          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex justify-center gap-4">
  <Link
    href="/oyako"
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg transition min-w-[120px] text-center"
  >
    親子
  </Link>
  <Link
    href="/sotoasobi"
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transition min-w-[120px] text-center"
  >
    外遊び
  </Link>
  <Link
    href="/scheherazade"
    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-lg transition"
  >
    シェヘラザード
  </Link>
</div>


        </div>
      </header>

      {/* Content Section */}
      <section className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">このサイトについて</h2>
          <p className="mt-4">
            このウェブサイトでは、登戸地域で私が取り組んでいる様々な英語教育プロジェクトに関する情報を閲覧することができます。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 Noborito English Club. All rights reserved.</p>
      </footer>
    </div>
  );
}
