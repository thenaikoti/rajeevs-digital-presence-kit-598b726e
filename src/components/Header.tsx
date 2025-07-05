
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RR</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Rajeev Ranjan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            <a
              href="mailto:rajeev@example.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">rajeev@example.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-2"
                >
                  <Phone size={16} />
                  <span className="text-sm">+91 98765 43210</span>
                </a>
                <a
                  href="mailto:rajeev@example.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm">rajeev@example.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
