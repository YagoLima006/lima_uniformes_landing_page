import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, FileText } from 'lucide-react'; 
import logo from "../../assets/logo.png";

export function Footer() {
  const whatsappUrl = "https://wa.me/5535999300157?text=Olá! Vim pelo site.";

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
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
              <li><a href={whatsappUrl} target="_blank" className="text-slate-400 hover:text-[#00a3cc] transition-colors">Contato</a></li>
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
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00a3cc] flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  (35) 99930-0157
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00a3cc] flex-shrink-0 mt-1" />
                <span className="text-slate-400 break-all">limauniformes092@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00a3cc] flex-shrink-0 mt-1" />
                <span className="text-slate-400">Três Pontas - MG</span>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <FileText className="w-5 h-5 text-[#00a3cc] flex-shrink-0 mt-1" />
                <span className="text-slate-400 text-sm">
                  CNPJ: 59.352.009/0001-04 
                </span>
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