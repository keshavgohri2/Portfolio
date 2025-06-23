import React, { useState, useEffect } from 'react';
import { NavbarProps, NavItem } from '../types';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ navItems, personalInfo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-card-bg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex-shrink-0" aria-label="Homepage">
            <span className="text-2xl font-poppins font-bold text-primary hover:text-primary-hover transition-colors">
              {personalInfo.name.split(' ')[0]} {/* Show first name or initials */}
              <span className="text-accent">.</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavLinkClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-light-text-secondary hover:text-light-text-main hover:bg-primary/20 transition-all duration-200"
                aria-label={`Go to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" // Assuming a contact section or footer id
              onClick={handleNavLinkClick}
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-primary text-dark-bg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card-bg focus:ring-primary transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary hover:text-light-text-main hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {isMobileMenuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card-bg shadow-xl pb-4" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-light-text-secondary hover:text-light-text-main hover:bg-primary/20 transition-all duration-200"
                aria-label={`Go to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={handleNavLinkClick}
              className="block w-full text-left mt-2 px-3 py-3 rounded-md text-base font-medium bg-primary text-dark-bg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card-bg focus:ring-primary transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;