import { motion } from 'motion/react';

const signatureDishes = [
  {
    name: "The High Flyer",
    description: "Two thick slices of French toast, two eggs any style, and our signature chicken sausage. Served with a side of 'heavenly' grits.",
    image: "https://images.unsplash.com/photo-1628198535081-37d45f3484f9?q=80&w=2942&auto=format&fit=crop",
    signature: true
  },
  {
    name: "The Southern Sandwich Trio",
    description: "Our legendary flaky biscuits piled high with crispy fried chicken, pimento cheese, and tomato jam. A local Athens favorite.",
    image: "https://images.unsplash.com/photo-1626200257007-6bcfc23cd8d8?q=80&w=2835&auto=format&fit=crop",
    signature: false
  },
  {
    name: "Shrimp & Grits",
    description: "Creamy, dreamy white cheddar grits topped with blackened shrimp and a warm tomato-basil gravy.",
    image: "https://images.unsplash.com/photo-1634818456578-8ba9fb17dc6f?q=80&w=2940&auto=format&fit=crop",
    signature: false
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-slate-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-biscuit-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            The Hall of Fame
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6">
            Signature Dishes
          </h2>
          <p className="text-white/70 text-lg">
            Honest, soul-warming Southern classics prepared with love and served with a smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-slate-dark rounded-sm overflow-hidden border border-white/5 shadow-2xl flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {dish.signature && (
                  <div className="absolute top-4 right-4 bg-biscuit-gold text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                    Signature
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-white group-hover:text-biscuit-gold transition-colors">
                  {dish.name}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base flex-1">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
