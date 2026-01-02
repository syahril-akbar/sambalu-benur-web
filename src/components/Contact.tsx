import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info & Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Hubungi Kami</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Siap memulai budidaya sukses? Konsultasikan kebutuhan bibit Anda atau kunjungi lokasi kami.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Alamat Hatchery</h4>
                  <p className="text-slate-600">Jl. A. Makkaderen, Pangkajene, Kab. Pangkep, Sulawesi Selatan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">WhatsApp / Telepon</h4>
                  <p className="text-slate-600">+62 852-4287-4466</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Jam Operasional</h4>
                  <p className="text-slate-600">Senin - Minggu (24 Jam Pelayanan Online)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">Kirim Pesan Cepat</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                window.open('https://wa.me/6285242874466?text=Halo%20Pangkep%20AquaSeed,%20saya%20ingin%20bertanya...', '_blank');
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nama Anda" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  <input type="text" placeholder="No. WhatsApp" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <textarea placeholder="Pesan atau pertanyaan Anda..." rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"></textarea>
                <Button fullWidth variant="primary" type="submit">
                  Kirim Pesan via WhatsApp
                </Button>
              </form>
            </div>
          </div>

          {/* Right: Map */}
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg bg-slate-200 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.654881261314!2d119.54876531476335!3d-4.828699996492978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe50607149021d%3A0x6854199993355555!2sPangkajene%2C%20Pangkajene%20dan%20Kepulauan%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1625648931234!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Lokasi Pangkep AquaSeed"
             ></iframe>
             <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-xs">
               <p className="font-bold">📍 Pangkep AquaSeed</p>
               <p>Klik 'View larger map' untuk rute</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
