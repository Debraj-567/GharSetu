import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User, PlusCircle } from 'lucide-react';
import clsx from 'clsx';
import AuthModal from './AuthModal';

const navLinks = [
  { name: 'Buy', path: '/properties?type=buy' },
  { name: 'Rent', path: '/properties?type=rent' },
  { name: 'Commercial', path: '/properties?type=commercial' },
  { name: 'New Projects', path: '/properties?status=new' },
  { name: 'Agents', path: '/agents' },
  { name: 'Builders', path: '/builders' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Home size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-primary tracking-tight">
                TerraNest
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-slate-600 hover:text-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => openAuth('login')}
                className="text-slate-600 hover:text-primary font-medium flex items-center gap-1 transition-colors"
              >
                <User size={18} />
                Login
              </button>
              <button 
                onClick={() => openAuth('register')}
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full font-medium transition-colors"
              >
                Register
              </button>
              <button className="bg-secondary text-white px-4 py-2 rounded-full font-medium shadow-lg shadow-secondary/30 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <PlusCircle size={18} />
                Post Property
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0 top-full pb-4">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 mt-4 pt-4 space-y-3 px-3">
                <button 
                  onClick={() => openAuth('login')}
                  className="w-full text-left font-medium text-slate-700 hover:text-primary flex items-center gap-2 py-2"
                >
                  <User size={18} /> Login / Register
                </button>
                <button className="w-full bg-secondary text-white px-4 py-3 rounded-lg font-medium shadow-md flex items-center justify-center gap-2">
                  <PlusCircle size={18} />
                  Post Property <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-2">FREE</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;
