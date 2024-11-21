import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">マックスの登戸英語クラブ</h1>
                <ul className="nav-links">
                    <li><Link href="/">ホーム</Link></li>
                    <li><Link href="/about">私たちについて</Link></li>
                    <li><Link href="/contact">お問い合わせ</Link></li>
                    <li><Link href="/kodomo">子供向けプログラム</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
