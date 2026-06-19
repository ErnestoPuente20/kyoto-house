import { Soup, GlassWater, Coffee, Martini, Dessert, Beer } from 'lucide-react'
import type { Category } from "../types"; // Verifica que la ruta suba los niveles correctos

export const categories: Category[] = [
  {
    id: 1,
    name: 'Ramen & Más', // Un nombre un poco más específico para el estilo
    icon: Soup
  },
  {
    id: 2,
    name: 'Brebajes',
    icon: GlassWater
  },
  // {
  //   id: 3,
  //   name: 'Infusiones',
  //   icon: Coffee
  // },
  {
    id: 4,
    name: 'Cocteles',
    icon: Martini
  },
  {
    id: 5,
    name: 'Postres',
    icon: Dessert
  },
  // {
  //   id: 6,
  //   name: 'Cervezas',
  //   icon: Beer
  // },
]