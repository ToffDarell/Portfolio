import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Rocket, Bot } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ROLES = ['Full Stack Developer', 'Software Engineer', 'SaaS Developer', 'AI Enthusiast'];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx(p => (p + 1) % ROLES.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center pt-24 pb-12 gap-16 relative">

      {/* ── Left: Text ── */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full lg:w-1/2 flex flex-col items-start space-y-6"
      >

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-text-custom">
          Hi, I'm{' '}
          <span className="text-gradient">Toff</span>
        </h1>

        {/* Animated role */}
        <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-semibold text-text-muted-custom h-9">
          <span>I build as a</span>
          <AnimatedRole role={ROLES[roleIdx]} />
        </div>

        <p className="text-base sm:text-lg text-text-muted-custom max-w-xl leading-relaxed">
          Aspiring Full Stack Developer building modern web applications, SaaS platforms,
          AI-powered systems, and digital solutions. 3rd Year IT student passionate about engineering the future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white group transition-all cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', boxShadow: '0 4px 15px rgba(124,58,237,0.3)' }}
          >
            View Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-text-custom hover:border-purple-500/50 transition-all cursor-pointer"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6 pt-4">
          {[
            { icon: <FaGithub className="w-6 h-6" />, href: 'https://github.com/ToffDarell', hover: '#a855f7' },
            { icon: <FaLinkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/toff-darell-vergara-839462408/', hover: '#3b82f6' },
            { icon: <FaFacebook className="w-6 h-6" />, href: 'https://www.facebook.com/toffdarell', hover: '#2563eb' },
            { icon: <FaInstagram className="w-6 h-6" />, href: 'https://www.instagram.com/topewooo/', hover: '#E1306C' },
          ].map(({ icon, href, hover }, i) => (
            <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: hover }}
              className="text-text-muted-custom transition-colors duration-300 cursor-pointer">
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ── Right: Animated 3D Profile Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="w-full lg:w-1/2 flex justify-center items-center relative"
        style={{ minHeight: '420px' }}
      >
        {/* Atmospheric glow */}
        <div className="absolute w-80 h-80 rounded-full blur-[120px] opacity-25 dark:opacity-40 pointer-events-none transition-opacity"
             style={{ background: 'radial-gradient(circle, #7c3aed 0%, #2563eb 60%, transparent 100%)' }}></div>

        {/* Orbit rings */}
        <div className="animate-spin-slow absolute w-[380px] h-[380px] rounded-full pointer-events-none"
             style={{ border: '1px solid rgba(124,58,237,0.15)' }}></div>
        <div className="absolute w-[440px] h-[440px] rounded-full pointer-events-none"
             style={{
               border: '1px dashed rgba(37,99,235,0.12)',
               animation: 'spin-slow 20s linear infinite reverse',
             }}></div>

        {/* Orbiting dot */}
        <div className="absolute w-[380px] h-[380px] rounded-full pointer-events-none animate-spin-slow">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-lg"
               style={{ background: '#7c3aed', boxShadow: '0 0 15px #7c3aed' }}></div>
        </div>

        {/* Profile Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-visible cursor-pointer"
          style={{
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Gradient border */}
          <div className="absolute -inset-[2px] rounded-3xl opacity-80"
               style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb, #7c3aed)', zIndex: -1 }}></div>

          {/* Card body */}
          <div className="w-full h-full rounded-3xl overflow-hidden relative"
               style={{ background: '#0a0a1a' }}>
            <img
              src="/profile.jpg"
              alt="Toff - Developer"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'brightness(0.95) contrast(1.05)' }}
            />
            {/* Holographic tint */}
            <div className="absolute inset-0 pointer-events-none"
                 style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.15) 0%, rgba(0,0,0,0.5) 100%)' }}></div>

            {/* Name tag */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass rounded-xl px-4 py-2">
                <p className="text-white font-bold text-sm">Toff</p>
                <p className="text-xs" style={{ color: '#a78bfa' }}>Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Floating Badge: Stack */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-16 top-10 glass px-3 py-2 rounded-xl flex items-center gap-2 text-sm shadow-xl"
            style={{ border: '1px solid rgba(124,58,237,0.3)', minWidth: 120 }}
          >
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
            <div>
              <p className="text-[10px] text-text-muted-custom font-medium leading-none">Stack</p>
              <p className="font-bold text-text-custom text-xs mt-0.5">MERN / Laravel</p>
            </div>
          </motion.div>

          {/* Floating Badge: Projects */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -left-16 bottom-20 glass px-3 py-2 rounded-xl flex items-center gap-2 text-sm shadow-xl"
            style={{ border: '1px solid rgba(37,99,235,0.3)', minWidth: 120 }}
          >
            <Rocket className="w-4 h-4 text-blue-400" />
            <div>
              <p className="text-[10px] text-text-muted-custom font-medium leading-none">Projects</p>
              <p className="font-bold text-text-custom text-xs mt-0.5">10+ Built</p>
            </div>
          </motion.div>

          {/* Floating Badge: AI */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -left-14 top-8 glass px-3 py-2 rounded-xl flex items-center gap-2 text-sm shadow-xl"
            style={{ border: '1px solid rgba(168,85,247,0.3)', minWidth: 110 }}
          >
            <Bot className="w-4 h-4 text-purple-400" />
            <div>
              <p className="text-[10px] text-text-muted-custom font-medium leading-none">AI/ML</p>
              <p className="font-bold text-text-custom text-xs mt-0.5">YOLO + CV</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-gray-500"
        >
          <div className="w-px h-8 rounded-full"
               style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)' }}></div>
          <span>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

const AnimatedRole = ({ role }) => (
  <motion.span
    key={role}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
    className="font-bold"
    style={{ color: '#a78bfa' }}
  >
    {role}
  </motion.span>
);

export default Hero;
