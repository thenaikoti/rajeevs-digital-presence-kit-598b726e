import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Environmental Services',
    href: '/environmental-services'
  }, {
    name: 'IPR Services',
    href: '/ipr-services'
  }, {
    name: 'LPO Services',
    href: '/lpo-services'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-background/95 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800">EnviroAndIPR</span>
              <span className="text-xs text-gray-600">Environmental Scientist & IPR Consultant</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`font-medium transition-colors ${isActive(item.href) ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`font-medium transition-colors ${isActive(item.href) ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                  {item.name}
                </Link>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;