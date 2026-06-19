'use client'
import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from 'motion/react'

const palabras = ["Magia", "Fantasía", "Tradición"]

const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % palabras.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark">
      
      {/* 1. Luces de fondo (Auras) para dar profundidad al video */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blur-aura pointer-events-none opacity-50 z-1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blur-aura pointer-events-none opacity-30 z-1" />

      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4"/>
        </video>
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-linear-to-b from-dark/80 via-dark/40 to-dark z-1"/>

      {/* Contenido central */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge de ubicación */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="mb-8 flex items-center gap-4 text-cyan-main font-body text-xs md:text-sm uppercase tracking-[0.4em]"
        >
          <span className="w-8 h-px bg-cyan-main/40"/>
            Sopocachi • La Paz
          <span className="w-8 h-px bg-cyan-main/40"/>
        </motion.div>

        {/* Titulo principal con Outfit */}
        <motion.h1
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="font-title text-5xl md:text-7xl lg:text-8xl text-light leading-[0.9] tracking-tighter uppercase font-black"
        >
          UN FESTÍN <br />
          <span className="flex items-center justify-center gap-x-4 flex-wrap mt-2">
            QUE ES PURA
            {/* Palabra fija con gradiente y espacio para que no se corte */}
            <span className="text-gradient-anime italic px-2">
              Magia
            </span>
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="visible"
          className="mt-10 font-body text-light/50 text-base md:text-xl max-w-2xl leading-relaxed"
        >
          Ramen artesanal inspirado en la magia de <span className="text-light font-bold">Studio Ghibli</span>. 
          Cada tazón es una historia servida bajo luces de neón.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
          className="mt-14 flex flex-col md:flex-row items-center gap-10"
        >
          <a href="#menu">
            <button className="group relative px-12 py-5 bg-purple-main text-white font-title text-sm font-bold uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_40px_rgba(188,26,254,0.5)] active:scale-95">
              <span className="relative z-10">Ver Menú</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-main to-purple-main opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </a>
          <div className="flex items-center gap-6 border-l border-white/10 pl-10">
            <div className="text-left">
              <span className="block font-title text-cyan-main text-3xl font-black leading-none tracking-tighter">ABIERTO</span>
              <span className="text-[14px] text-light/40 uppercase tracking-[0.3em] font-body mt-1 block">12:00 — 22:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}