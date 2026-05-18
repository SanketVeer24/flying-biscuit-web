import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590595183424-d2e73752e008?q=80&w=2938&auto=format&fit=crop"
          alt="Warm freshly baked biscuits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-dark/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/70 via-transparent to-slate-dark/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 border border-biscuit-gold/50 bg-slate-dark/50 backdrop-blur-md text-biscuit-gold rounded-full text-xs font-semibold tracking-widest uppercase mb-6 shadow-xl">
            Athens' Favorite All-Day Breakfast
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
            Southern Comfort, <br />
            <span className="text-biscuit-gold italic font-normal">Redefined.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Serving Athens’ most iconic all-day breakfast and Southern staples since day one. Experience the fluffiest biscuits in the South, right here in the heart of Georgia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#location"
              className="w-full sm:w-auto bg-biscuit-gold hover:bg-biscuit-gold-hover text-white px-8 py-4 rounded-sm font-semibold transition-all duration-300 shadow-xl uppercase tracking-wide flex items-center justify-center"
            >
              Reserve a Table
            </a>
            <a
              href="tel:+17068505656"
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-sm font-semibold transition-all duration-300 shadow-xl uppercase tracking-wide flex items-center justify-center"
            >
              Order for Pickup
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
