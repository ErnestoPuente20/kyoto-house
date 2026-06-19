'use client'
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id='about-us' className="relative w-full py-20 md:py-32 bg-dark overflow-hidden px-6 border-t border-white/5">
      
      {/* Elementos ambientales de fondo */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-main/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-main/5 blur-[120px] pointer-events-none" />

      <div className="lg:max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LADO IZQUIERDO: TEXTO NARRATIVO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-main animate-pulse" />
              <span className="text-cyan-main font-body font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                Est. 1984 / Neo-Nara
              </span>
            </div>
            <h2 className="font-title text-4xl md:text-6xl font-black text-light tracking-tighter leading-none uppercase">
              Donde la Nostalgia se <br className="hidden md:block" /> vuelve <span className="text-purple-main text-glow-purple">Santuario</span>
            </h2>
          </div>

          <div className="space-y-6 text-light/70 leading-relaxed max-w-xl">
            <p className="italic font-body text-lg md:text-xl text-light/50 border-l-2 border-purple-main/30 pl-4">
              "Nuestra historia comenzó en una pequeña aldea cerca de Nara, donde el humo de la leña y el aroma del dashi llenaban las mañanas brumosas. Queríamos traer ese sentimiento de hogar a la ciudad."
            </p>
            <p className="font-body text-sm md:text-base text-light/60">
              <strong className="text-light font-bold">Kyoto House</strong> no es solo un restaurante; es un refugio contra el paso del tiempo. Fusionamos técnicas tradicionales y métodos de cocción lenta que honran a nuestros ancestros con la energía vibrante del futuro.
            </p>
          </div>
          
          <div className="w-20 h-0.5 bg-linear-to-r from-purple-main to-cyan-main shadow-[0_0_10px_#00f2ff]"></div>
        </motion.div>

        {/* LADO DERECHO: COMPOSICIÓN DE FOTOS (ESTILO MARCO HOLOGRÁFICO) */}
        <div className="relative h-112 md:h-140 w-full flex items-center justify-center mt-16 lg:mt-0">
          
          {/* FOTO 1: Fondo Izquierda */}
          <motion.div 
            initial={{ opacity: 0, rotate: -20, x: -50 }}
            whileInView={{ opacity: 1, rotate: -12, x: -60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute -translate-x-12 md:-translate-x-16 translate-y-10 z-10 transition-transform duration-500 hover:z-50 hover:scale-110"
          >
            <div className="bg-[#0c0c0c] p-2 md:p-3 pb-8 md:pb-10 shadow-2xl border border-white/5 rounded-2xl">
              <img 
                src="https://picsum.photos/id/431/400/500" 
                alt="Nara, Japón" 
                className="w-32 h-44 md:w-40 md:h-52 object-cover opacity-60 rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <span className="block mt-3 font-body text-light/30 text-[10px] md:text-xs uppercase tracking-widest text-center">Nara, Japón</span>
            </div>
          </motion.div>

          {/* FOTO 2: Medio Derecha */}
          <motion.div 
            initial={{ opacity: 0, rotate: 20, x: 50 }}
            whileInView={{ opacity: 1, rotate: 12, x: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute translate-x-12 md:translate-x-16 -translate-y-10 z-20 transition-transform duration-500 hover:z-50 hover:scale-110"
          >
            <div className="bg-[#0c0c0c] p-2 md:p-3 pb-8 md:pb-10 shadow-2xl border border-white/5 rounded-2xl">
              <img 
                src="https://picsum.photos/id/429/400/500" 
                alt="Tradición" 
                className="w-32 h-44 md:w-40 md:h-52 object-cover opacity-60 rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <span className="block mt-3 font-body text-light/30 text-[10px] md:text-xs uppercase tracking-widest text-center">Tradición</span>
            </div>
          </motion.div>

          {/* FOTO 3: Principal Frente */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative z-30 transition-all duration-500 hover:z-50 hover:scale-105"
          >
            <div className="bg-[#111111] p-3 md:p-4 pb-8 md:pb-12 shadow-[0_0_40px_rgba(0,0,0,0.7)] border border-white/10 transform -rotate-2 hover:rotate-0 transition-all duration-500 rounded-4xl hover:border-purple-main/40">
              <img 
                src="https://picsum.photos/id/488/500/600" 
                alt="Lacquered Tales" 
                className="w-48 h-60 md:w-60 md:h-72 object-cover rounded-xl opacity-80"
              />
              <p className="mt-4 font-title font-black text-cyan-main text-center text-lg md:text-xl tracking-wider uppercase text-glow-cyan">
                Kyoto House
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}