import { Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://lh3.googleusercontent.com/d/1FPRK70r4eV_hO35njYC2Sp1Ly-UOFDlb" 
                alt="Angola Partners Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-xl tracking-tight">
                ANGOLA PARTNERS
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Consultoria especializada em implementação de sistemas de gestão, auditorias e formação em Luanda, Angola.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              {['Sobre Nós', 'Serviços', 'Blog', 'Contactos', 'Carreiras'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-red transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              {['Sistemas de Gestão', 'Auditorias', 'Formação', 'Imagem Externa', 'Consultoria Estratégica'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-red transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscreva para receber as últimas novidades e insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-red transition-all flex-grow"
              />
              <button className="bg-brand-red text-white px-4 py-3 rounded-xl font-bold hover:bg-brand-red-dark transition-all">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ANGOLA PARTNERS. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-brand-red hover:text-brand-red-light transition-all font-bold"
            >
              Voltar ao Topo
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
