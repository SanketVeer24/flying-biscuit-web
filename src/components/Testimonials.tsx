import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The best breakfast in Athens, period. Those biscuits really do 'fly'—they're so light! The service is always fast and friendly.",
    author: "Sarah J.",
    role: "UGA Alumna"
  },
  {
    quote: "I dream about the pimento cheese sandwiches. It’s my go-to spot for a weekend brunch with the family.",
    author: "Mark D.",
    role: "Athens Resident"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-dark text-white relative overflow-hidden">
      {/* Subtle background texture/overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <span className="text-biscuit-gold font-bold tracking-widest uppercase text-sm mb-4 block">
          What the Locals Say
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16">
          Loved by Athens
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-biscuit-gold/50 transition-colors"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-biscuit-gold fill-biscuit-gold" />
                ))}
              </div>
              <p className="font-playfair text-xl italic text-white/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <span className="block font-bold text-lg text-white">{testimonial.author}</span>
                <span className="block text-sm text-white/60 tracking-wider uppercase mt-1">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
