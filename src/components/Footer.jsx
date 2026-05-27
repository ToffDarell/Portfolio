import React from 'react';
import { Code2, Heart } from 'lucide-react'; import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaFigma } from 'react-icons/fa';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/ToffDarell', label: 'FaGithub', color: '#ffffff' },
  { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/toff-darell-vergara-839462408/', label: 'FaLinkedin', color: '#3b82f6' },
  { icon: <FaFacebook className="w-5 h-5" />, href: 'https://www.facebook.com/toffdarell', label: 'FaFacebook', color: '#2563eb' },
  { icon: <FaInstagram className="w-5 h-5" />, href: 'https://www.instagram.com/topewooo/', label: 'FaInstagram', color: '#E1306C' },
];

const Footer = () => (
  <footer className="relative z-10 w-full mt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(3,0,20,0.8)', backdropFilter: 'blur(20px)' }}>
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-wider text-white">
              TOFF<span style={{ color: '#7c3aed' }}>.</span>
            </span>
          </a>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Aspiring Full Stack Developer &amp; IT student passionate about engineering modern digital experiences.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ icon, href, label, color }, i) => (
              <a key={i} href={href} aria-label={label}
                 className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                 style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                 onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = `${color}40`; }}
                 onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#a78bfa' }}>Navigation</p>
          <ul className="space-y-3">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}
                   className="text-sm text-gray-400 transition-colors duration-200 hover:text-white flex items-center gap-2 group">
                  <span className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ background: '#7c3aed' }}></span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#a78bfa' }}>Ready to build?</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Let's turn your ideas into reality. I'm just one message away.
          </p>
          <a href="#contact"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:scale-105"
             style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}>
            Get in Touch →
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
           style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Toff. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 inline text-red-500" /> in the Philippines
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
