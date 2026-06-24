import { categories } from "@/data/categories";

interface CategoryFilterProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function CategoryFilter({ selectedId, onSelect }: CategoryFilterProps) {
  return (
    /* CORRECCIÓN: Añadimos pt-4 (padding top) para darle espacio al scale-110 y que no se mutile el borde */
    <div className="w-full flex justify-center md:justify-center overflow-x-auto no-scrollbar pt-4 pb-6 px-4">
      <div className="flex gap-6 md:gap-10 min-w-max">
        {categories.map(({ id, name, icon: Icon }) => {
          const isSelected = selectedId === id;
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              /* 🟢 MEJORA DE COMPATIBILIDAD: Agregamos transform-gpu, backface-hidden y antialiased aquí 
                 Esto le dice al sistema que use la GPU para manejar la animación de transición de manera suave */
              className="flex flex-col items-center gap-3 group transition-all transform-gpu backface-hidden antialiased"
            >
              {/* 🟢 OPTIMIZACIÓN DE BORDES: Subimos sutilmente la opacidad del borde inactivo de white/5 a white/10. 
                  Los bordes extremadamente transparentes (5%) se rompen visualmente en pantallas con baja densidad de píxeles al animarse. */}
              <div className={`p-4 rounded-2xl transition-all duration-300 border ${
                isSelected 
                  ? "bg-purple-main/10 border-purple-main/50 scale-110 shadow-[0_0_20px_rgba(188,26,254,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}>
                <Icon
                  size={24}
                  className={`transition-colors ${
                    isSelected ? "text-cyan-main" : "text-light/40 group-hover:text-light/80"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] md:text-xs font-body font-bold uppercase tracking-[0.2em] transition-colors ${
                  isSelected ? "text-light" : "text-light/50 group-hover:text-light/50"
                }`}
              >
                {name}
              </span>
              {/* Indicador de neón inferior */}
              <div
                className={`h-0.5 bg-cyan-main transition-all duration-500 shadow-[0_0_10px_#00f2ff] ${
                  isSelected ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}