import { Users, Clock, Star, TrendingUp } from 'lucide-react';
import { Card } from './ui/Card';

const stats = [
  { label: 'Kepercayaan Petani', value: 'Bintang 5', icon: Star, color: 'text-yellow-500' },
  { label: 'Siap Dihubungi', value: 'Setiap Saat', icon: Clock, color: 'text-blue-500' },
  { label: 'Pelanggan Setia', value: 'Banyak', icon: Users, color: 'text-green-500' },
  { label: 'Kondisi Bibit', value: 'Sehat', icon: TrendingUp, color: 'text-purple-500' },
];

export const Stats = () => {
  return (
    <section className="py-10 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="flex flex-col items-center justify-center text-center p-4 md:p-6 shadow-lg border-none bg-white/95 backdrop-blur">
              <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mb-2 md:mb-3`} />
              <h3 className="text-xl md:text-3xl font-bold text-slate-800">{stat.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
