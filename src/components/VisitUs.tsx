import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function VisitUs() {
  const WHATSAPP_LINK = "https://wa.me/17068505656"; // using phone as fallback for demo

  return (
    <section id="location" className="py-24 bg-creamy-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-biscuit-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Find Your Seat
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-dark font-bold">
            Visit & Contact
          </h2>
        </div>

        <div className="bg-slate-blue rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row text-white w-full">
          {/* Reservation Form / Info Side */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-playfair text-3xl font-bold mb-8">Book a Table</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-biscuit-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-white/80">Athens, GA (Heart of the City)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-biscuit-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <a href="tel:+17068505656" className="text-white/80 hover:text-biscuit-gold transition-colors inline-block mt-1">
                    +1 706-850-5656
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-lg pb-2 border-b border-white/20">Opening Hours</h4>
                <div className="flex justify-between text-white/80">
                  <span>Mon – Fri</span>
                  <span>7:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Sat – Sun</span>
                  <span>7:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+17068505656" 
                className="bg-biscuit-gold hover:bg-biscuit-gold-hover text-white text-center py-4 px-6 rounded-sm font-semibold transition-all shadow-lg uppercase tracking-wide flex-1"
              >
                Call to Reserve
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white text-center py-4 px-6 rounded-sm font-semibold transition-all shadow-lg uppercase tracking-wide flex items-center justify-center gap-2 flex-1"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Map/Image Side */}
          <div className="w-full lg:w-1/2 min-h-[400px] relative bg-slate-dark">
            {/* Visual map placeholder with a nice overhead vibe or restaurant exterior */}
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop" 
              alt="Restaurant exterior" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Gradient to blend image nicely into the info panel (hidden on vertical layout) */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-blue to-transparent hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
