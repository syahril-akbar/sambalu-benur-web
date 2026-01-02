import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516962228801-b733791d2932?q=80&w=2070&auto=format&fit=crop"
          alt="Aquaculture Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 text-center md:text-left">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-light border border-secondary/30 backdrop-blur-sm text-sm font-semibold mb-6">
              🌱 Mitra Terpercaya Petambak Indonesia
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Benur & Nener Berkualitas Tinggi untuk <span className="text-accent">Panen Melimpah</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed max-w-2xl">
              Penyedia bibit udang Vaname, Windu, dan ikan Bandeng terbaik di Pangkep. 
              Kualitas teruji laboratorium dengan layanan konsultasi 24 jam.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => window.open('https://wa.me/6285242874466?text=Halo%20Pangkep%20AquaSeed,%20saya%20ingin%20tanya%20stok%20bibit', '_blank')}
            >
              Pesan Sekarang <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Lihat Katalog <ShoppingBag size={20} />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
