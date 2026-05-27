import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'UI/UX', href: '#uiux' },
  { name: 'Services', href: '#services' },
  { name: 'Journey', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto rounded-2xl glass transition-all duration-300"
        style={{
          boxShadow: scrolled ? 'var(--glass-card-shadow-hover)' : '0 4px 20px rgba(0,0,0,0.03)',
        }}
      >
        <div className="px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-wider text-text-custom">
              TOFF<span style={{ color: '#7c3aed' }}>.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted-custom transition-colors duration-200 hover:text-text-custom relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                      style={{ background: 'linear-gradient(90deg, #7c3aed, #2563eb)' }}></span>
              </a>
            ))}
          </div>

          {/* CTA & Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Switcher Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-custom)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                boxShadow: '0 4px 15px rgba(124,58,237,0.25)',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Theme Toggle + Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-custom)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </motion.button>

            <button
              className="text-text-muted-custom hover:text-text-custom transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-22 left-4 right-4 z-40 rounded-2xl p-6 flex flex-col gap-2 glass shadow-xl"
            style={{
              maxHeight: 'calc(100vh - 120px)',
              overflowY: 'auto',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-bold text-text-muted-custom hover:text-text-custom border-b border-border-custom/50 transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 py-3 text-center text-white font-bold rounded-xl text-base cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
