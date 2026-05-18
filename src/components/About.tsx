import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-creamy-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" 
                alt="Cafe interior background" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-biscuit-gold/10 rounded-full z-[-1] blur-2xl"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-biscuit-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              Born in the South, Loved in Athens
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-slate-dark font-bold mb-8 leading-tight">
              Breakfast shouldn't have a curfew.
            </h2>
            <div className="space-y-6 text-slate-blue/80 text-lg leading-relaxed">
              <p>
                At The Flying Biscuit Cafe, we’ve brought our famous "biscuits and grit" to Athens with a simple mission: to serve soulful, Southern-inspired food that makes you feel at home.
              </p>
              <p>
                From our signature biscuits baked fresh every 20 minutes to our award-winning shrimp and grits, every plate is a celebration of Southern hospitality. Whether you're a student seeking comfort food, or a family enjoying a weekend brunch, our doors are open and the coffee is hot.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
