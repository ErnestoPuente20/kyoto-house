'use client'

import { MapPin, Phone, Clock } from 'lucide-react';
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contacto' className="w-full bg-dark px-2 md:px-4 pt-12">
      {/* Contenedor fondo - Estética de capsula integrada al fondo oscuro */}
      <div className='max-w-360 mx-auto bg-[#070707] text-light rounded-t-[2.5rem] md:rounded-t-[3rem] border-t border-x border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden relative'>
        
        {/* Efectos de luz neón ambiental en las esquinas del footer */}
        <div className="absolute top-0 left-12 w-48 h-48 bg-purple-main/5 blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 right-12 w-48 h-48 bg-cyan-main/5 blur-[80px] pointer-events-none" />

        {/* Contenedor del contenido */}
        <div className='max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-10 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative'>

            {/* Divisor vertical - Solo visible en escritorio */}
            <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5' />
            
            {/* Columna 1: Info y Branding */}
            <div className='flex flex-col space-y-10 md:space-y-12'>
              <div className='space-y-4 text-center md:text-left'>
                <Link href='/' className='z-50 relative'>
                    Kyoto House
                </Link>
                <p className='font-body italic text-sm md:text-base text-purple-main tracking-wide uppercase text-glow-purple'>
                  Magia hecha receta • Futuro hecho tradición
                </p>
              </div>

              {/* Grid de Datos de Contacto */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10'>
                
                {/* Horario */}
                <div className='space-y-3 group'>
                  <h3 className='flex items-center justify-center md:justify-start gap-3 font-title font-bold text-cyan-main uppercase text-xs tracking-[0.2em] transition-colors group-hover:text-glow-cyan'>
                    <Clock size={16} strokeWidth={2.5} className="text-cyan-main"/> Horario
                  </h3>
                  <p className='text-sm md:text-base text-light/60 leading-relaxed text-center md:text-left font-body'>
                    Lunes a Sábado <br />
                    <span className="text-light/80">11:30 AM - 22:00 PM</span>
                  </p>
                </div>

                {/* Contacto */}
                <div className='space-y-3 group'>
                  <h3 className='flex items-center justify-center md:justify-start gap-3 font-title font-bold text-cyan-main uppercase text-xs tracking-[0.2em] transition-colors group-hover:text-glow-cyan'>
                    <Phone size={16} strokeWidth={2.5} className="text-cyan-main"/> Contacto
                  </h3>
                  <p className='text-sm md:text-base text-light/60 text-center md:text-left font-body hover:text-cyan-main transition-colors duration-300'>
                    +591 75891###
                  </p>
                </div>

                {/* Dirección */}
                <div className='space-y-3 sm:col-span-2 group'>
                  <h3 className='flex items-center justify-center md:justify-start gap-3 font-title font-bold text-cyan-main uppercase text-xs tracking-[0.2em] transition-colors group-hover:text-glow-cyan'>
                    <MapPin size={16} strokeWidth={2.5} className="text-cyan-main"/> Dirección
                  </h3>
                  <p className="text-sm md:text-base text-light/60 text-center md:text-left font-body leading-relaxed">
                    Sopocachi N° 5124, La Paz - Bolivia
                  </p>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className='flex justify-center md:justify-start gap-6 pt-2'>
                {[
                  { icon: FaTiktok, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaWhatsapp, link: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.link} 
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='text-light/40 hover:text-purple-main transition-colors p-3 rounded-xl bg-white/2 border border-white/5 hover:border-purple-main/30'
                  >
                    <social.icon size={20}/>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Columna 2 - Mapa Estilo Cyberpunk */}
            <div className="relative h-72 md:h-auto min-h-72 lg:min-h-100">
              <div className="w-full h-full rounded-4xl overflow-hidden border border-white/5 md:border-white/10 opacity-50 grayscale contrast-125 brightness-75 hover:opacity-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <iframe
                  title="Ubicación Lacquered Tales"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650.593560578203!2d-68.13361825495289!3d-16.511108150480943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2062f0e41dbf%3A0x73ae886bde581ec9!2sSopocachi%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1779138010814!5m2!1ses!2sbo" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              {/* Marco de luz decorativo sobre el mapa */}
              <div className="absolute inset-0 rounded-4xl pointer-events-none border border-cyan-main/10 group-hover:border-cyan-main/30 transition-colors duration-1000" />
            </div>
          </div>

          {/* Línea final de Copyright */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-light/20 font-medium text-center">
            <p>© {currentYear} Lacquered Tales. Todos los derechos reservados.</p>
            <p className="text-light/10 text-[9px] tracking-[0.5em]">Diseñado por Ernesto Puente</p>
          </div>
        </div>
      </div>
    </footer>
  );
}