import { Instagram, Facebook, Map } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-white">
              The Flying Biscuit
            </h2>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Serving Athens’ most iconic all-day breakfast. Freshly baked, Southern-inspired comfort food served with genuine hospitality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-biscuit-gold transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-biscuit-gold transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-biscuit-gold transition-colors text-white">
                <Map className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm text-biscuit-gold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-white transition-colors">Signature Menu</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-white/70 hover:text-white transition-colors">Find Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm text-biscuit-gold mb-6">Information</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} The Flying Biscuit Cafe - Athens. All Rights Reserved.</p>
          <p>Created for Athens, GA</p>
        </div>
      </div>
    </footer>
  );
}
