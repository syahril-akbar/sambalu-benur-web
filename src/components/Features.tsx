import { MapPin, Package, ShieldCheck, Truck, FlaskConical, Headset } from 'lucide-react';
import { Card } from './ui/Card';

const features = [
  {
    icon: ShieldCheck,
    title: 'Kualitas Terjamin',
    description: 'Bibit melalui proses karantina dan pengecekan lab ketat sebelum dikirim.'
  },
  {
    icon: FlaskConical,
    title: 'Aklimatisasi Profesional',
    description: 'Proses penyesuaian suhu dan salinitas air agar bibit tidak stress saat tebar.'
  },
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    description: 'Mudah diakses di Jl. A. Makkaderen, Pangkep, pusat akuakultur Sulawesi.'
  },
  {
    icon: Package,
    title: 'Packing Oksigen Aman',
    description: 'Teknik packing khusus menjamin ketersediaan oksigen hingga tujuan.'
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    description: 'Kerjasama dengan ekspedisi terpercaya untuk pengiriman antar pulau.'
  },
  {
    icon: Headset,
    title: 'Konsultasi Gratis',
    description: 'Tim ahli kami siap membantu kendala budidaya Anda kapan saja.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Mengapa Memilih Kami?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Layanan Prima untuk Hasil Maksimal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:border-primary/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
