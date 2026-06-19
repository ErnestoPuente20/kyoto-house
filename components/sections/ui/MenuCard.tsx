import { PlusCircle, ArrowRight } from "lucide-react";
import type { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
  onOpenModal: (item: MenuItem) => void;
}

export default function MenuCard({ item, onOpenModal }: MenuCardProps) {
  return (
    <div className="group relative bg-[#0a0a0a] rounded-4xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-purple-main/50 hover:shadow-[0_0_30px_rgba(188,26,254,0.15)] flex flex-col h-full">
      
      {/* Imagen con zoom y overlay */}
      <div className="w-full aspect-square overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Degradado inferior para que el nombre se lea bien si la imagen es clara */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Info del Plato */}
      <div className="p-6 flex flex-col grow gap-3 relative z-10">
        <h3 className="text-light font-title text-xl md:text-2xl tracking-tight leading-tight group-hover:text-cyan-main transition-colors">
          {item.name}
        </h3>

        {item.variants ? (
          <button
            onClick={() => onOpenModal(item)}
            className="mt-auto flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-purple-main hover:text-cyan-main transition-colors w-fit pt-4"
          >
            <PlusCircle size={16} />
            Opciones disponibles
          </button>
        ) : (
          <div className="mt-auto flex flex-col gap-4">
            {item.description && (
              <p className="text-sm text-light/40 font-body leading-relaxed line-clamp-2">
                {item.description}
              </p>
            )}
            <div className="flex items-center justify-end pt-2">
              <span className="text-2xl font-title font-black text-light tracking-tighter">
                <span className="text-cyan-main text-base font-normal mr-1">Bs</span>
                {item.price}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Brillo sutil de fondo en la card al hacer hover */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-main/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}