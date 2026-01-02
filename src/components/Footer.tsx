import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="font-bold text-xl text-white">
                Pangkep<span className="text-secondary">AquaSeed</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Solusi bibit udang dan ikan berkualitas untuk keberhasilan panen petambak Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-secondary transition-colors">Beranda</a></li>
              <li><a href="#products" className="hover:text-secondary transition-colors">Produk</a></li>
              <li><a href="#features" className="hover:text-secondary transition-colors">Layanan</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Produk Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Benur Udang Vaname</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Benur Udang Windu</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Nener Bandeng</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Obat & Probiotik</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Cara Pemesanan</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pengiriman</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Kebijakan Garansi</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pangkep AquaSeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
