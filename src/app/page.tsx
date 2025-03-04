import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/images/wallpaper.jpg')] bg-cover bg-center bg-fixed text-white">
      {/* Navbar 
      <nav className="bg-white bg-opacity-80 backdrop-blur-sm py-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Max English Club</h1>
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
            <li>
              <Link href="/services" className="text-gray-800 hover:text-blue-500">
                他のサービス
              </Link>
            </li>
          </ul>
        </div>
      </nav>
*/}
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Welcome to Our English Club!</h1>
          <p className="mt-4 text-lg">
            全ての年齢層の方々に向けた英語教育の機会を提供します
          </p>

          {/* Call-to-Action Buttons for Classes */}
          <div className="mt-6 flex flex-col gap-4 items-center">
            {/* First Row - 3 Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/oyako"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded shadow-lg transition min-w-[150px] text-center"
              >
                親子
              </Link>
              <Link
                href="/kodomo"
                className="bg-amber-400 hover:bg-amber-500 text-white py-3 px-6 rounded shadow-lg transition min-w-[150px] text-center"
              >
                子供
              </Link>
              <Link
                href="/otona"
                className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded shadow-lg transition min-w-[150px] text-center"
              >
                大人
              </Link>
            </div>

             {/* Second Row - Premium Button (Light Gray & Wider) */}
             <div>
              <Link
                href="/premium"
                className="bg-slate-300 hover:bg-slate-400 text-black py-3 px-20 rounded shadow-lg transition min-w-[200px] text-center"
              >
                プレミアム
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Classes Section */}
      <section className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">クラス一覧</h2>
          <p className="mt-4">
            さまざまな年齢層向けの英語クラスをご用意しています。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 Max English Club. All rights reserved.</p>
      </footer>
    </div>
  
  );
}
