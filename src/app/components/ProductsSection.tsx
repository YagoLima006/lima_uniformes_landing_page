import { motion } from 'motion/react';
import { useState } from 'react';

import imgManguito from '../../assets/manguito.png';
import imgMangaLongaField from '../../assets/cdt-manga-curta.png'; 
import imgMangaCurtaStore from '../../assets/cdt-manga-longa.png'; 
import imgJaqueta from '../../assets/jaqueta-cocatrel.png';
import imgCasaco from '../../assets/casaco-body.png';
import imgCafe from '../../assets/camisa-cafe.jpeg'; 
import imgMangaCurtaCdt from '../../assets/manga-curta-cdt.png';

const products = [
  {
    id: 1,
    name: 'Manguito de Proteção UV50+',
    category: 'Campo / Proteção',
    image: imgManguito,
    description: 'Acessório indispensável para proteção solar, garantindo conforto e segurança em trabalhos externos.',
  },
  {
    id: 2,
    name: 'Camisa Operacional Manga Curta',
    category: 'Comércio / Logística',
    image: imgMangaCurtaStore,
    description: 'Design funcional com tecido respirável, ideal para uniformizar equipes de atendimento e varejo.',
  },
  {
    id: 3,
    name: 'Camisa Agrícola Manga Longa UV50+',
    category: 'Agronegócio',
    image: imgMangaLongaField,
    description: 'Alta durabilidade e proteção térmica desenvolvida especialmente para o dia a dia no campo.',
  },
  {
    id: 4,
    name: 'Jaqueta Puffer',
    category: 'Inverno / Premium',
    image: imgJaqueta,
    description: 'Isolamento térmico de alto padrão com personalização exclusiva para cooperativas e empresas.',
  },
  {
    id: 5,
    name: 'Casaco Esportivo Body Health',
    category: 'Fitness / Academia',
    image: imgCasaco,
    description: 'Tecido tecnológico de alta performance que oferece flexibilidade para instrutores e funcionários .',
  },
  {
    id: 6,
    name: 'Camisa Manga Curta UV50+ CDT',
    category: 'Campo/Proteção',
    image: imgMangaCurtaCdt,
    description: 'Camisa de manga curta com proteção UV50+, ideal para atividades ao ar livre, garantido conforto e segurança para os trabalhadores expostos ao sol.',
  }
];

export function ProductsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-slate-900 font-bold">Nosso Catálogo</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uniformes personalizados com a qualidade que sua empresa exige.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <div className="relative h-[450px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h3 className="text-2xl mb-3 font-semibold">{product.name}</h3>
                  <p className="text-slate-600 text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}