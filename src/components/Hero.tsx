import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-brand-navy"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Consultoria de Excelência em Angola
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Soluções <span className="text-brand-red">Sustentáveis</span> para o seu Negócio.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            A ANGOLA PARTNERS nasceu da experiência acumulada para oferecer polivalência, determinação e engenho num mercado competitivo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-red-dark transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-red/20">
              Nossos Serviços
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-red/30 text-brand-red px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-red/5 transition-all flex items-center justify-center gap-2">
              Sobre Nós
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={18} className="text-brand-red" />
              <span>Sistemas de Gestão</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={18} className="text-brand-red" />
              <span>Auditorias & Formação</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              alt="Business Meeting" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl max-w-[240px] z-20"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-navy">4.02</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Google Reviews</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              "Fatores de diferenciação num mercado competitivo."
            </p>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-brand-red/20 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-brand-red/20 rounded-br-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
