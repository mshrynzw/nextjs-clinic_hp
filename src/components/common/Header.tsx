'use client';

import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-deep-teal dark:text-soft-teal font-bold text-2xl flex items-center">
            <span className="text-soft-teal">心</span>
            <span className="ml-1">ケアクリニック</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#" className="nav-link active">ホーム</a>
            <a href="#" className="nav-link">診療案内</a>
            <a href="#" className="nav-link">医師紹介</a>
            <a href="#" className="nav-link">アクセス</a>
            <a href="#" className="nav-link">よくある質問</a>
          </nav>
          <button className="btn-primary">予約する</button>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-light-gray dark:hover:bg-charcoal-gray transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
      }`}>
        <nav className="flex flex-col space-y-4 px-4">
          <a href="#" className="nav-link active">ホーム</a>
          <a href="#" className="nav-link">診療案内</a>
          <a href="#" className="nav-link">医師紹介</a>
          <a href="#" className="nav-link">アクセス</a>
          <a href="#" className="nav-link">よくある質問</a>
        </nav>
        <div className="mt-4 px-4">
          <button className="btn-primary w-full">予約する</button>
        </div>
        <div className="mt-4 px-4 flex justify-center">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-light-gray dark:hover:bg-charcoal-gray transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
