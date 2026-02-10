import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import logo from '../../assets/logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // Estado para o dropdown manual

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Produtos', id: 'produtos' },
    { name: 'Sobre Nós', id: 'sobre-nos' },
  ];

  // CONFIGURAÇÃO DOS LINKS - NÚMEROS ATUALIZADOS
  const whatsappPaiUrl = "https://wa.me/5535999300157?text=Olá Rodinere! Gostaria de um orçamento.";
  const whatsappYagoUrl = "https://wa.me/5535997480242?text=Olá Yago! Gostaria de um orçamento.";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <a href="#home">
              <img src={logo} alt="Lima Uniformes" className="h-16 w-auto" />
            </a>
          </motion.div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-8 text-black">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-semibold transition-colors hover:text-[#00a3cc]"
              >
                {link.name}
              </a>
            ))}

            {/* DROPDOWN DE CONTATO MANUAL (Sem erro de scroll) */}
            <div className="relative">
              <Button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="bg-[#00a3cc] hover:bg-[#0088aa] text-white border-0 px-6 gap-2 relative z-[70]"
              >
                Contato <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isContactOpen && (
                <>
                  {/* Overlay invisível para fechar ao clicar fora */}
                  <div 
                    className="fixed inset-0 z-[60] cursor-default" 
                    onClick={() => setIsContactOpen(false)} 
                  />
                  
                  {/* Menu Suspenso */}
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-[70] animate-in fade-in zoom-in duration-200">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2 text-left">Escolha o atendimento</p>
                    
                    <a 
                      href={whatsappPaiUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group"
                      onClick={() => setIsContactOpen(false)}
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-[#25D366]">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-slate-900 text-sm">Vendas (Rodinere)</span>
                        <span className="text-[10px] text-slate-500">Orçamentos e Pedidos</span>
                      </div>
                    </a>

                    <a 
                      href={whatsappYagoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group mt-1"
                      onClick={() => setIsContactOpen(false)}
                    >
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-[#00a3cc]">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-slate-900 text-sm">Vendas (Yago)</span>
                        <span className="text-[10px] text-slate-500">Orçamentos e Pedidos</span>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-slate-200 shadow-xl p-6 space-y-6"
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block text-black text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 space-y-4">
             <p className="text-xs font-bold text-slate-400 uppercase">Fale Conosco</p>
             <a 
               href={whatsappPaiUrl} 
               target="_blank" 
               className="flex items-center gap-3 text-slate-700 font-medium"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <MessageCircle className="text-[#25D366]" /> Vendas (Rodinere)
             </a>
             <a 
               href={whatsappYagoUrl} 
               target="_blank" 
               className="flex items-center gap-3 text-slate-700 font-medium"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <MessageCircle className="text-[#00a3cc]" /> Vendas (Yago)
             </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}