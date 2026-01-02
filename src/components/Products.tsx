import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Check, ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Benur Udang Vaname',
    type: 'udang',
    description: 'Kualitas Gelondongan Super. Adaptasi optimal di kolam, kuat & tahan cuaca ekstrem.',
    grade: 'Gelondongan Super',
    survivalRate: '> 90%',
    priceRange: 'Tanya Harga',
    imageUrl: '/images/vaname.jpg',
    features: ['Sudah Aklimatisasi', 'Pertumbuhan Cepat', 'Tahan Penyakit (SPF)']
  },
  {
    id: '2',
    name: 'Nener Ikan Bandeng',
    type: 'ikan',
    description: 'Dirawat intensif di sistem perkolondongan. Ukuran seragam, lincah & siap tebar.',
    grade: 'Top Grade',
    survivalRate: '> 95%',
    priceRange: 'Tanya Harga',
    imageUrl: '/images/nener.jpg',
    features: ['Ukuran Seragam', 'Daya Hidup Tinggi', 'Gesit & Lincah']
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 inline-block">
              Katalog Unggulan
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Bibit Pilihan <span className="text-secondary">Siap Tebar</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Kami hanya menyediakan Benur dan Nener terbaik yang telah lolos uji kualitas ketat di kolam gelondongan kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary shadow-lg flex items-center gap-2">
                    <ShieldCheck size={16} className="text-secondary" />
                    {product.grade}
                  </div>
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <p className="text-sm font-medium text-slate-200 mb-1">Tingkat Kehidupan (SR)</p>
                    <p className="text-2xl font-bold text-secondary-light">{product.survivalRate}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                            <Check size={14} strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    fullWidth 
                    size="lg"
                    variant="primary" 
                    className="group-hover:bg-primary-dark shadow-lg shadow-primary/20"
                    onClick={() => window.open(`https://wa.me/6285242874466?text=Halo%20Admin,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`, '_blank')}
                  >
                    Tanya Dulu di WA <ArrowUpRight className="ml-1" size={20} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};