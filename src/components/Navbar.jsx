import { useState } from 'react';
import Button from './ui/Button';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Venture", "Marketplace", "Learn", "Contact"];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-findor-dark">findor</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-findor-blue font-medium">{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2">
            <Button variant="ghost">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <li key={link}>
                <a href="#" className="block py-2 text-gray-600 hover:text-findor-blue font-medium">{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" className="w-full">Login</Button>
            <Button variant="primary" className="w-full">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;