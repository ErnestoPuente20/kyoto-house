'use client'
import { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { MenuItem } from "@/types";

interface VariantsModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function VariantsModal({ item, onClose }: VariantsModalProps) {
  
  // Cerrar con Escape y bloquear scroll del fondo
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      
      {/* Overlay - Fondo desenfocado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-dark/90 backdrop-blur-md"
      />

      {/* Contenedor del Modal */}
      {/* CORRECCIÓN: Quitamos overflow-y-auto de aquí. La tarjeta entera mide exactamente el 80% del alto de la pantalla en móvil y NO se mueve */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row w-full max-w-5xl h-[80vh] md:h-auto md:max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Lado Izquierdo: Imagen con gradiente neón */}
        {/* CORRECCIÓN: h-40 para que ocupe un espacio controlado en móvil y deje el resto al contenido */}
        <div className="w-full md:w-1/2 h-40 sm:h-48 md:h-auto relative shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-linear-to-r" />
          
          {/* Badge flotante en la imagen */}
          <div className="absolute bottom-4 left-6 md:bottom-6">
             <h2 className="font-title text-2xl md:text-5xl text-light font-black tracking-tighter leading-none uppercase">
                {item.name}
             </h2>
          </div>
        </div>

        {/* Lado Derecho: Opciones y Detalles */}
        {/* CORRECCIÓN: Forzamos a que este contenedor ocupe todo el espacio vertical disponible (grow) y no se desborde (min-h-0) */}
        <div className="w-full md:w-1/2 flex-1 flex flex-col bg-[#0d0d0d] relative min-h-0">
          
          {/* Botón Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 rounded-full bg-white/5 text-light/50 hover:text-cyan-main hover:bg-white/10 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* CORRECCIÓN: 'overflow-y-auto' va EXCLUSIVAMENTE aquí. Toda la información respira y scrollea en este bloque de manera independiente */}
          <div className="flex flex-col flex-1 p-6 md:p-12 overflow-y-auto overflow-x-hidden custom-scrollbar">
            
            {/* Nota de Ghibli / Especialidad */}
            {item.note && (
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-purple-main/5 border border-purple-main/20 mb-6 md:mb-8">
                <Sparkles className="text-purple-main shrink-0" size={16} />
                <p className="text-xs md:text-sm text-purple-main/80 font-body italic leading-relaxed">
                  {item.note}
                </p>
              </div>
            )}

            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-main font-bold mb-4 md:mb-6">Opciones disponibles</span>

            {/* Lista de Variantes */}
            <div className="flex flex-col gap-4 md:gap-6">
              {item.variants?.map((variant) => (
                <motion.div 
                  key={variant.id} 
                  whileHover={{ x: 5 }}
                  className="group flex justify-between items-center p-4 rounded-2xl border border-white/5 hover:bg-white/[0.02] hover:border-white/10 transition-all"
                >
                  <div className="flex flex-col gap-1 max-w-[70%]">
                    <h3 className="font-title text-sm md:text-lg text-light group-hover:text-cyan-main transition-colors">
                      {variant.name}
                    </h3>
                    {variant.description && (
                      <p className="text-[11px] md:text-xs text-light/40 font-body leading-relaxed whitespace-pre-line">
                        {variant.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base md:text-xl font-title font-black text-light tracking-tighter">
                      <span className="text-cyan-main text-xs font-normal mr-1">Bs</span>
                      {variant.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decoración inferior */}
            <div className="mt-8 md:mt-auto pt-6 text-center shrink-0">
               <p className="text-[9px] text-light/20 uppercase tracking-[0.5em]">
                  Estética Cyber-Ghibli • La Paz
               </p>
            </div>
          </div>
        </div>

        {/* Brillos neón de fondo */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-main/5 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-main/10 blur-[100px] pointer-events-none" />
      </motion.div>
    </div>
  );
}