import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1590594951430-c750b2aa982a?q=80&w=2600&auto=format&fit=crop", // Close-up biscuits
  "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=2100&auto=format&fit=crop", // Juice / spread
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2100&auto=format&fit=crop", // Coffee & people
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2100&auto=format&fit=crop", // Dining interior
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-creamy-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-biscuit-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            A Taste of Athens
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-dark font-bold">
            The Gallery
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 h-64 md:h-[500px] overflow-hidden rounded-sm"
          >
            <img src={images[0]} alt="Fresh biscuits and honey" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          
          <div className="md:col-span-1 grid grid-rows-2 gap-4 md:gap-6 h-[500px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[240px] md:h-[238px] overflow-hidden rounded-sm relative"
            >
              <img src={images[1]} alt="Delicious beverage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[240px] md:h-[238px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="overflow-hidden rounded-sm"
              >
                <img src={images[2]} alt="Coffee and friends" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="overflow-hidden rounded-sm"
              >
                <img src={images[3]} alt="Cafe interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
