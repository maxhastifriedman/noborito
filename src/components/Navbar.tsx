import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-md py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Max English Club</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/about" className="text-gray-800 hover:text-blue-500 font-medium transition duration-300">
              私たちについて
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500 font-medium transition duration-300">
              お問い合わせ
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-800 hover:text-blue-500 font-medium transition duration-300">
              他のサービス
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
