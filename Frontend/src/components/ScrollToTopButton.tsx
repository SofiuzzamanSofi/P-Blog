"use client";

import { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '20px' }}
    >
      <IoIosArrowDropupCircle className="w-16 h-16" />
    </button>
  );
};

export default ScrollToTopButton;
