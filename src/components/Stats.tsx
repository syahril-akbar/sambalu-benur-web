import { Users, Clock, Star, TrendingUp } from 'lucide-react';
import { Card } from './ui/Card';

const stats = [
  { label: 'Rating Kepuasan', value: '4.8/5', icon: Star, color: 'text-yellow-500' },
  { label: 'Layanan Support', value: '24/7', icon: Clock, color: 'text-blue-500' },
  { label: 'Mitra Petambak', value: '1000+', icon: Users, color: 'text-green-500' },
  { label: 'Survival Rate', value: 'High', icon: TrendingUp, color: 'text-purple-500' },
];

export const Stats = () => {
  return (
    <section className="py-10 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="flex flex-col items-center justify-center text-center p-6 shadow-lg border-none bg-white/95 backdrop-blur">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</h3>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
