import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target size={24} />, title: 'Polivalência', desc: 'Capacidade de adaptação face à realidade atual.' },
    { icon: <Users size={24} />, title: 'Determinação', desc: 'Foco na apresentação de soluções sustentáveis.' },
    { icon: <ShieldCheck size={24} />, title: 'Engenho', desc: 'Fatores de diferenciação num mercado competitivo.' },
    { icon: <Zap size={24} />, title: 'Experiência', desc: 'Consolidação de conhecimentos ao longo dos anos.' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Collaboration" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-navy/10 rounded-full blur-3xl z-0" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Sobre a ANGOLA PARTNERS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
            Nascemos da Experiência para <span className="text-brand-red italic">Diferenciar</span> o seu Negócio.
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
            <p>
              A ANGOLA PARTNERS é uma empresa que nasce da experiência acumulada dos técnicos que a compõem. A sua polivalência, determinação e engenho constituem fatores de diferenciação num mercado competitivo, em que é esperado a apresentação de soluções sustentáveis a cada momento.
            </p>
            <p>
              Foi criada para dar resposta a uma necessidade sentida em termos de oferta nas áreas de implementação e manutenção de sistemas de gestão, realização de auditorias, formação e apoio na melhoria da imagem externa da empresa cliente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">{val.title}</h4>
                  <p className="text-sm text-gray-500">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
