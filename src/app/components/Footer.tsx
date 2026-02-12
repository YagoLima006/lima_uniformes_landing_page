import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, FileText, MessageCircle } from 'lucide-react'; 
import logo from "../../assets/logo.png";

export function Footer() {
  // 1. URLs CONFIGURADAS PARA CADA CONTATO
  const whatsappPaiUrl = "https://wa.me/5535999300157?text=Olá Rodinere! Gostaria de um orçamento.";
  const whatsappYagoUrl = "https://wa.me/5535997480242?text=Olá Yago! Gostaria de um orçamento."; 

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={logo} 
              alt="Lima Uniformes" 
              className="h-16 w-auto mb-4" 
            />
            <p className="text-slate-400 mb-6">
              24 anos de experiência no mercado têxtil, entregando o melhor em fabricação própria há 3 anos.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/uniformeslima/" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#00a3cc] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-[#00a3cc] transition-colors">Home</a></li>
              <li><a href="#produtos" className="text-slate-400 hover:text-[#00a3cc] transition-colors">Produtos</a></li>
              <li><a href="#sobre-nos" className="text-slate-400 hover:text-[#00a3cc] transition-colors">Sobre Nós</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Vestuário Corporativo</li>
              <li>Bordados e Estampas</li>
              <li>Uniformes Agrícolas</li>
              <li>Jaquetas e Inverno</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[#00a3cc]">Fale Conosco</h4>
            <ul className="space-y-6">
              
              <li>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Vendas e Orçamentos</p>
                <a 
                  href={whatsappPaiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#00a3cc] group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block font-medium leading-none mb-1">Fale com Rodinere</span>
                    <span className="text-xs opacity-60">Toque para mensagem</span>
                  </div>
                </a>
              </li>

              <li>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Vendas e Orçamentos</p>
                <a 
                  href={whatsappYagoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#00a3cc] group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block font-medium leading-none mb-1">Fale com Yago</span>
                    <span className="text-xs opacity-60">Toque para mensagem</span>
                  </div>
                </a>
              </li>

              <li className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#00a3cc]" />
                  <span className="text-slate-400 text-sm">Três Pontas - MG</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#00a3cc]" />
                  <span className="text-slate-400 text-xs">CNPJ: 59.352.009/0001-04</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © 2026 Lima Uniformes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
