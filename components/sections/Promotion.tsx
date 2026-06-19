'use client'
import { motion } from 'motion/react'
import { Tag, Clock, Sparkles } from 'lucide-react'

export default function Promotions() {
  return (
    <section className="relative w-full py-24 bg-dark overflow-hidden px-6">
      
      {/* Luces de fondo (Auras) de la referencia */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blur-aura pointer-events-none opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blur-aura pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Título con el gradiente animado de la referencia */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="font-title font-black text-5xl md:text-7xl uppercase tracking-tighter text-gradient-anime">
            Ofertas del Futuro
          </h2>
          <p className="font-body text-light/40 mt-4 tracking-[0.2em] uppercase text-sm">
            Tradición japonesa, estética del mañana.
          </p>
        </motion.div>

        {/* Card Estilo "Metaverse" */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative flex flex-col md:flex-row bg-[#0a0a0a] rounded-4xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Brillo en la esquina superior de la card */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-purple-main/5 to-transparent pointer-events-none" />

          {/* Imagen con un filtro más cinematográfico */}
          <div className="w-full md:w-1/2 relative h-80 md:h-125">
            <img 
              src="/productos/ramen-promocion.webp" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
              alt="Promo"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-linear-to-l" />
          </div>

          {/* Contenido de la Card */}
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-cyan-main" />
              <span className="text-cyan-main font-title text-xs tracking-[0.3em] uppercase">Miyazaki Combo</span>
            </div>

            <h3 className="font-title text-4xl md:text-5xl text-light mb-6 leading-tight">
              SABOR QUE <br />
              <span className="text-purple-main">TRASCIENDE</span>
            </h3>

            <p className="text-light/50 font-body text-lg mb-8 leading-relaxed">
              Una mezcla de ramen clásico y tecnología visual. Disfruta del descuento especial de martes.
            </p>

            <div className="flex items-center gap-6 mb-10">
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-title text-light">Bs 19</span>
                <span className="text-light/20 line-through text-sm">Antes Bs 38</span>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-cyan-main/80 text-xs tracking-widest uppercase">
                <Clock size={16} /> 12:00 - 15:00
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}