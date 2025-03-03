import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar (Now Matches Home Page) */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 pt-24">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
