import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Produk', href: '#products' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Lokasi', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="SAMBALU BENUR Logo" className="w-12 h-12 rounded-lg object-cover border border-white/20 shadow-sm" />
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
            SAMBALU <span className="text-secondary">BENUR</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white text-shadow'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant="accent" size="sm" onClick={() => window.open('https://wa.me/6285242874466?text=Halo%20SAMBALU%20BENUR,%20saya%20ingin%20tanya%20stok%20bibit', '_blank')}>
            <Phone size={16} /> Hubungi Kami
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 md:hidden flex flex-col gap-4 shadow-xl z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button fullWidth variant="accent" onClick={() => window.open('https://wa.me/6285242874466?text=Halo%20SAMBALU%20BENUR,%20saya%20ingin%20tanya%20stok%20bibit', '_blank')}>
            Hubungi Lewat WhatsApp
          </Button>
        </div>
      )}
    </nav>
  );
};
