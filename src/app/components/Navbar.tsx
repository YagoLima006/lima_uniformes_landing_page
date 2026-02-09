import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import logo from '../../assets/logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const whatsappUrl = "https://wa.me/5535999300157?text=Olá! Vim pelo site.";

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
        <div className="flex items-center justify-between h-24"> {/* Aumentei a altura do container de h-20 para h-24 para acomodar a logo maior */}
          
          {/* Logo Ampliada */}
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <a href="#home">
              <img 
                src={logo} 
                alt="Lima Uniformes" 
                className="h-16 w-auto transition-all" // Alterado de h-12 para h-16
              />
            </a>
          </motion.div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-black font-semibold transition-colors hover:text-[#00a3cc]"
              >
                {link.name}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#00a3cc] hover:bg-[#0088aa] text-white border-0 px-6">
                Contato
              </Button>
            </a>
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
        <motion.div className="md:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block text-black text-lg font-medium hover:text-[#00a3cc] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}