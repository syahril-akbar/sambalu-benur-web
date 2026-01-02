import { MapPin, Package, ShieldCheck, Truck, Waves, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldCheck,
    title: 'Kepercayaan Utama',
    description: 'Sebagai usaha perorangan, kami menjamin kejujuran kualitas. Bibit dipilih satu per satu dengan ketelitian tinggi sebelum sampai ke tangan Anda.'
  },
  {
    icon: Waves,
    title: 'Perawatan Telaten',
    description: 'Bibit dirawat penuh kesabaran di perkolondongan agar terbiasa dengan kondisi air tambak, meminimalkan risiko mati saat tebar.'
  },
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    description: 'Mudah ditemukan di Jl. A. Makkaderen. Silakan mampir lihat-lihat dulu kolam kami.'
  },
  {
    icon: Package,
    title: 'Packing Rapi & Aman',
    description: 'Kami bungkus dengan teknik khusus oksigen ganda, insyaAllah bibit selamat sampai tujuan.'
  },
  {
    icon: Truck,
    title: 'Bantu Kirim',
    description: 'Bisa kami bantu carikan ekspedisi atau travel langganan yang amanah untuk pengiriman.'
  },
  {
    icon: Headset,
    title: 'Boleh Tanya-Tanya',
    description: 'Jangan sungkan WA kami. Mau tanya cara tebar atau tips perawatan, kami bantu sebisa mungkin.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Prima untuk Hasil Maksimal</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};