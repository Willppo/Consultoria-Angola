import { motion } from 'motion/react';
import { Settings, ClipboardCheck, GraduationCap, Image as ImageIcon, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Settings size={32} />,
      title: 'Sistemas de Gestão',
      desc: 'Implementação e manutenção de sistemas de gestão personalizados para a sua empresa.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Auditorias',
      desc: 'Realização de auditorias rigorosas para garantir a conformidade e excelência operacional.',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Formação',
      desc: 'Capacitação técnica e comportamental para elevar o potencial da sua equipa.',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: <ImageIcon size={32} />,
      title: 'Imagem Externa',
      desc: 'Apoio na melhoria da imagem externa e posicionamento de mercado da empresa cliente.',
      color: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">O QUE FAZEMOS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Soluções Especializadas para <span className="text-brand-red">Crescimento Sustentável</span>.
            </h2>
          </div>
          <p className="text-lg text-gray-500 max-w-md">
            Oferecemos uma gama completa de serviços de consultoria para ajudar a sua empresa a destacar-se num mercado competitivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl border border-gray-100 hover:border-brand-red/30 hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-500 bg-white overflow-hidden"
            >
              <div className={`w-16 h-16 ${service.color} ${service.iconColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-red transition-colors">
                Saber Mais
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
              {/* Decorative background circle */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-brand-red/5 rounded-full group-hover:scale-[3] transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[40px] bg-brand-red text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Pronto para elevar o seu negócio?</h3>
              <p className="text-white/80 text-lg">
                Agende uma consulta gratuita com os nossos especialistas e descubra como podemos ajudar.
              </p>
            </div>
            <button className="bg-white text-brand-red px-10 py-5 rounded-full font-bold text-xl hover:bg-white/90 transition-all shadow-xl shadow-white/20 whitespace-nowrap">
              Contactar Agora
            </button>
          </div>
          
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
