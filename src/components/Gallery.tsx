import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: '/images/gallery-1.png',
    alt: 'Kolam Budidaya Intensif',
    category: 'Fasilitas'
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Perawatan Kolam Gelondongan',
    category: 'Maintenance'
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Tim Ahli Kami',
    category: 'SDM'
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Benur Udang Sehat',
    category: 'Produk'
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Proses Packing Oksigen',
    category: 'Logistik'
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Pengiriman Armada',
    category: 'Distribusi'
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Aktivitas Hatchery Kami</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Transparansi proses dari pemilihan bibit, perawatan di kolam gelondongan, hingga pengiriman ke lokasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary-light text-sm font-bold uppercase tracking-wider mb-1">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-bold">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
