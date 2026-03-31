import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">CONTACTOS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
              Vamos <span className="text-brand-red">Trabalhar</span> Juntos.
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-lg">
              Estamos prontos para ouvir as suas necessidades e apresentar soluções sustentáveis para o seu negócio.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">Telefone</h4>
                  <p className="text-gray-500 text-lg">938 649 922</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">Email</h4>
                  <p className="text-gray-500 text-lg">geral@angolapartners.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">Localização</h4>
                  <p className="text-gray-500 text-lg">Condomínio Bengo, R. Fernão de Sousa, Edif. A, 9º, Luanda</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">Horário</h4>
                  <p className="text-gray-500 text-lg">Segunda - Sexta: 08:30 - 17:30</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-brand-navy/5 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Assunto</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red focus:bg-white outline-none transition-all appearance-none">
                  <option>Implementação de Sistemas</option>
                  <option>Auditorias</option>
                  <option>Formação</option>
                  <option>Outros</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Como podemos ajudar?" 
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-red-dark transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-red/20">
                Enviar Mensagem
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
