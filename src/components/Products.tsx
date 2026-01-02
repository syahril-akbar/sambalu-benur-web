import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Check, ArrowRight } from 'lucide-react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Benur Udang Vaname',
    type: 'udang',
    description: 'Bibit udang Vaname F1 SPF (Specific Pathogen Free) dengan pertumbuhan cepat.',
    grade: 'Super High Growth',
    survivalRate: '> 85%',
    priceRange: 'Hubungi Admin',
    imageUrl: 'https://images.unsplash.com/photo-1629805908477-76b3f7f0a996?q=80&w=2070&auto=format&fit=crop',
    features: ['Bebas Penyakit (SPF)', 'Tahan Perubahan Suhu', 'Keseragaman Tinggi']
  },
  {
    id: '2',
    name: 'Benur Udang Windu',
    type: 'udang',
    description: 'Bibit udang Windu (Tiger Prawn) asli dengan ketahanan tubuh yang kuat.',
    grade: 'Premium Local',
    survivalRate: '> 80%',
    priceRange: 'Hubungi Admin',
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=2070&auto=format&fit=crop',
    features: ['Indukan Terseleksi', 'Adaptif di Air Payau', 'Warna Cerah']
  },
  {
    id: '3',
    name: 'Nener Ikan Bandeng',
    type: 'ikan',
    description: 'Bibit ikan Bandeng gelondongan siap tebar dengan daya hidup tinggi.',
    grade: 'Super',
    survivalRate: '> 90%',
    priceRange: 'Hubungi Admin',
    imageUrl: 'https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?q=80&w=2070&auto=format&fit=crop',
    features: ['Gesit & Lincah', 'Ukuran Seragam', 'Tahan Transportasi Jauh']
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Katalog Produk Unggulan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami menyediakan bibit berkualitas yang telah melalui proses aklimatisasi dan pengecekan kesehatan ketat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hoverEffect className="h-full flex flex-col p-0 overflow-hidden group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {product.grade}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-1">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Survival Rate</span>
                      <span className="font-semibold text-secondary">{product.survivalRate}</span>
                    </div>
                    <div className="h-[1px] bg-slate-100 my-2" />
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check size={16} className="text-secondary" /> {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    fullWidth 
                    variant="primary" 
                    className="mt-auto group-hover:bg-primary-dark"
                    onClick={() => window.open(`https://wa.me/6285242874466?text=Halo%20Admin,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`, '_blank')}
                  >
                    Pesan Sekarang
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
