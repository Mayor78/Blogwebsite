import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";

const Header = () => {
  const [navbar, setNavbar] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 800) {
      setNavbar(false);
    }
  };

  return (
    <nav className='sticky top-0 w-full h-20 border-b-4 bg-slate-200 z-50 shadow-md backdrop-blur-lg'>
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/" className='w-12 h-12' onClick={handleLinkClick}>
          <img src="https://i.ibb.co/0222222/logo.png" alt="logo" className="nav_logo_img" />
        </Link>
        {navbar && (
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link to="/profile/fghj" onClick={handleLinkClick}>mayor</Link></li>
            <li><Link to="/create" onClick={handleLinkClick}>Create Post</Link></li>
            <li><Link to="/authors" onClick={handleLinkClick}>Authors</Link></li>
            <li><Link to="/logout" onClick={handleLinkClick}>Logout</Link></li>
          </ul>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='md:hidden flex items-center mx-1'
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <AiOutlineClose className='cursor-pointer' /> : <FaBars className='' />}
        </motion.button>
      </div>
      {navbar && (
        <ul className="md:hidden flex flex-col items-center absolute right-0 mt-4 animate-drop backdrop-blur space-y-4 bg-white w-[60%] p-4 h-60">
          <li><Link to="/profile/fghj" onClick={handleLinkClick}>mayor</Link></li>
          <li><Link to="/create" onClick={handleLinkClick}>Create Post</Link></li>
          <li><Link to="/authors" onClick={handleLinkClick}>Authors</Link></li>
          <li><Link to="/logout" onClick={handleLinkClick}>Logout</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
