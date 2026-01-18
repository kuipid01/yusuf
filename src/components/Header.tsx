import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-800">AF</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                            HOME
                        </a>
                        <a href="#about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                            ABOUT US
                        </a>
                        <a href="#services" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                            SERVICES
                        </a>
                        <a href="#packages" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                            HAJJ 2026 PACKAGES
                        </a>
                        <a href="#contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                            CONTACT US
                        </a>
                    </nav>

                    {/* CTA Button */}
                    {/* <button className="bg-linear-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        BOOKING NOW
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button> */}

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
