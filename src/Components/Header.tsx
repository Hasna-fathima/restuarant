
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Contact', href: '/contact' }, 
];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-[#111] bg-opacity-80 backdrop-blur-sm px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-y-4">

        
        <motion.div
          className="flex-shrink-0 cursor-pointer"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="FoodStory Logo" className="h-16 w-auto" />
        </motion.div>

        
        <motion.nav
          className="hidden md:flex space-x-10 font-semibold flex-1 justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
         {navLinks.map((link, i) => (
  <motion.div
    key={link.name}
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 * i }}
  >
    {link.href.startsWith('#') ? (
      <a
        href={link.href}
        className="text-[rgb(178,165,165)] hover:text-orange-500 hover:underline transition-colors duration-300"
      >
        {link.name}
      </a>
    ) : (
      <Link
        to={link.href}
        className="text-[rgb(178,165,165)] hover:text-orange-500 hover:underline transition-colors duration-300"
      >
        {link.name}
      </Link>
    )}
  </motion.div>
))}


        </motion.nav>

    
        <div className="flex items-center space-x-3">
          <div className="relative text-gray-400 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md bg-[#222] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

          

          
          <button
            className="md:hidden text-orange-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        
        <div className="w-full md:hidden">
          <div className="relative text-gray-400 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md bg-[#222] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>

      
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black bg-opacity-90 px-6 py-4 flex flex-col space-y-4 font-semibold"
          style={{ color: 'rgb(178, 165, 165)' }}
        >
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-500 hover:underline transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;