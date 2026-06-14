import { Link } from 'react-router-dom';
import { Home, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Home size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                TerraNest
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Find your dream property smarter. TerraNest is the leading premium real estate platform for buying, selling, and renting properties globally.
            </p>
            <div className="flex space-x-4">
              {/* Facebook removed temporarily */}
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/properties?type=buy" className="hover:text-secondary transition-colors">Buy Property</Link></li>
              <li><Link to="/properties?type=rent" className="hover:text-secondary transition-colors">Rent Property</Link></li>
              <li><Link to="/properties?status=new" className="hover:text-secondary transition-colors">New Projects</Link></li>
              <li><Link to="/builders" className="hover:text-secondary transition-colors">Top Builders</Link></li>
              <li><Link to="/agents" className="hover:text-secondary transition-colors">Real Estate Agents</Link></li>
            </ul>
          </div>

          {/* Legal & Help */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Legal & Help</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span>Level 5, Trade Centre, BKC, Mumbai 400051, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>+91 1800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span>support@terranest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TerraNest. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <span>Built with <span className="text-red-500">♥</span> in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
