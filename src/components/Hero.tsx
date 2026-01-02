import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, ShoppingBag, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="SAMBALU BENUR Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-20 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 hover:bg-white/20 transition-colors cursor-default"
            >
              <Award className="text-accent" size={16} />
              <span>Usaha Rumahan Terpercaya</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Bibit Udang & Bandeng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-accent">Gelondongan Pilihan</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-100 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Dari kolam kami untuk tambak Anda. <span className="font-bold text-white">SAMBALU BENUR</span> menyediakan bibit yang dirawat penuh perhatian layaknya milik sendiri. Kuat, sehat, dan insyaAllah berkah.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button 
              variant="accent" 
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => window.open('https://wa.me/6285242874466?text=Halo%20SAMBALU%20BENUR,%20saya%20ingin%20tanya%20stok%20bibit', '_blank')}
            >
              Pesan Sekarang <ArrowRight size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto justify-center border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
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
