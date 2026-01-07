
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Printer } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '회사 소개', path: '/about' },
    { name: '서비스', path: '/services' },
    { name: '작업 사례', path: '/portfolio' },
    { name: '견적 문의', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <Printer className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>S&P</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-700'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            빠른 견적 상담
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 md:hidden animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg font-medium text-slate-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="w-full text-center px-6 py-4 bg-slate-900 text-white rounded-xl text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              무료 상담 시작하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
