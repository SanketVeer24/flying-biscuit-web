import { Clock, Coffee, Heart, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Coffee className="w-8 h-8 text-biscuit-gold" />,
    title: "Freshly Baked Every 20 Mins",
    description: "We don't do 'stale.' Our ovens are always running to ensure every biscuit is pillowy and warm."
  },
  {
    icon: <Clock className="w-8 h-8 text-biscuit-gold" />,
    title: "All-Day, Everyday",
    description: "Whether it’s 7 AM on a Monday or 2 PM on a Sunday, your breakfast cravings are honored here."
  },
  {
    icon: <MapPin className="w-8 h-8 text-biscuit-gold" />,
    title: "Athens Proud",
    description: "We source local ingredients and support the Georgia community that supports us."
  },
  {
    icon: <Heart className="w-8 h-8 text-biscuit-gold" />,
    title: "Family-Focused",
    description: "A warm, inviting atmosphere where kids, students, and grandparents all feel at home."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-creamy-white border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-biscuit-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            The Flying Biscuit Standard
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-dark font-bold">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 p-4 rounded-full bg-slate-blue/5 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-slate-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-blue/80 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
