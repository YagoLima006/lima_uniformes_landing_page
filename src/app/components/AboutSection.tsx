import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

import imgAboutShirt from '../../assets/dellas-mesa.png';

export function AboutSection() {
  return (
    <section id="sobre-nos" className="py-24 bg-gradient-to-br from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-slate-900 font-bold">
            Sobre a Lima Uniformes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            24 anos de trajetória unindo a visão de representação comercial à excelência da fabricação própria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={imgAboutShirt}
                alt="Camisa Profissional Lima Uniformes"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00a3cc]/10 to-transparent" />
            </div>

            {/* Selo de 24 Anos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-[#00a3cc] text-white p-8 rounded-2xl shadow-xl"
            >
              <div className="text-5xl mb-2 font-bold">24</div>
              <div className="text-sm uppercase tracking-wider">Anos de Trajetória</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl mb-6 text-slate-900 font-semibold">
              Da Representação à Fábrica
            </h3>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              A história da Lima Uniformes é marcada por duas décadas de expertise. Tudo começou com a sólida jornada de seu fundador como representante comercial, entendendo profundamente as demandas e desafios das empresas no setor têxtil.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Há 3 anos, transformamos essa vasta experiência em produção real, inaugurando nossa fabricação própria. Hoje, unimos o olhar estratégico de quem conhece o cliente com o rigor técnico de uma fábrica moderna.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: '24 Anos', label: 'de Mercado' },
                { number: '3 Anos', label: 'Fabricação' },
                { number: '100%', label: 'Compromisso' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-white rounded-xl shadow-md border border-[#00a3cc]/20"
                >
                  <div className="text-2xl font-bold mb-2 text-[#00a3cc]">{stat.number}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Missão',
              description: 'Projetar e fabricar uniformes que unam o conforto necessário para o dia a dia com a imagem profissional que sua marca merece.',
            },
            {
              icon: Eye,
              title: 'Visão',
              description: 'Ser a principal escolha em uniformização personalizada, reconhecida pela durabilidade dos produtos e excelência no atendimento.',
            },
            {
              icon: Award,
              title: 'Valores',
              description: 'Transparência comercial, qualidade técnica, respeito aos prazos e evolução constante em nossos processos produtivos.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#00a3cc]/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#00a3cc]/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#00a3cc]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl mb-3 text-slate-900 font-semibold">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}