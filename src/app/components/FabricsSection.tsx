import { motion } from 'motion/react';

import imgFabric from '../../assets/camisa-uv-mesa.png';

export function FabricsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-slate-900 font-bold">
            Tecidos de Alta Performance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Resultado de 24 anos de experiência no setor têxtil, selecionando apenas materiais de primeira linha.
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-[#00a3cc] to-[#0088aa] rounded-3xl p-12 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl mb-8 font-semibold">Engenharia Têxtil</h3>
              <p className="text-xl text-cyan-50 mb-10 leading-relaxed">
                Nossos tecidos são projetados para oferecer o máximo desempenho em campo, 
                unindo resistência industrial com o conforto necessário para a jornada diária.
              </p>
              
              <div className="space-y-5">
                {[
                  {
                    title: 'Proteção UV 50+',
                    description: 'Bloqueio solar integrado diretamente nas fibras do tecido.',
                  },
                  {
                    title: 'Tecnologia Anti-pilling',
                    description: 'Alta resistência à abrasão, evitando a formação de "bolinhas".',
                  },
                  {
                    title: 'Fácil Manutenção',
                    description: 'Tecidos que secam rápido e exigem pouco ou nenhum ferro.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_#67e8f9]" />
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-cyan-100 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px]"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={imgFabric}
                  alt="Detalhe tecnológico do tecido"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white text-[#00a3cc] px-8 py-6 rounded-2xl shadow-2xl border border-cyan-100"
              >
                <div className="text-4xl font-bold mb-1">UV50+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Proteção Certificada</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}