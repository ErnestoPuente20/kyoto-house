'use client'
import { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion, AnimatePresence } from "motion/react"; // Cambiado a motion/react como el Hero
import '@splidejs/react-splide/css'; // ¡No olvides los estilos del slider!

import CategoryFilter from "./ui/CategoryFilter";
import MenuCard from "./ui/MenuCard";
import { menuItems } from "@/data/menuItems";
import type { MenuItem } from "@/types";
import VariantsModal from "./ui/VariantsModal";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);

  const filtered = menuItems.filter(item => item.categoryId === selectedCategory);

  return (
    <section id="menu" className="w-full py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Título Estilo "Metaverso" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-title text-5xl md:text-6xl uppercase tracking-tighter text-gradient-anime inline-block">
            Explora el Sabor
          </h2>
          <p className="font-body text-light/30 mt-4 uppercase tracking-[0.3em] text-xs">
            Selecciona una categoría
          </p>
        </motion.div>

        {/* El filtro de categorías (lo adaptaremos después) */}
        <CategoryFilter
          selectedId={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Contenedor del Slider */}
        <div className="mt-8 md:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Splide
                options={{
                  type: 'slide',
                  arrows: true,
                  pagination: false,
                  perPage: 4,
                  gap: '2rem',
                  breakpoints: {
                    1280: { perPage: 3 },
                    1024: { perPage: 2, gap: '1.5rem' },
                    640: { 
                      perPage: 1, 
                      padding: { right: '15%' }, 
                      gap: '1rem',
                      arrows: false 
                    }
                  }
                }}
              >
                {filtered.map(item => (
                  <SplideSlide key={item.id} className="py-10"> 
                    <MenuCard item={item} onOpenModal={setModalItem}/>
                  </SplideSlide>
                ))}
              </Splide>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalItem && (
            <VariantsModal
              item={modalItem}
              onClose={() => setModalItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}