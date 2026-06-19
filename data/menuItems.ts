import type { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
    {
      id: 1,
      categoryId: 1,
      name: "Onigiris",
      variants: [
          { id: 1, name: "3 Onigiris normales", price: 29 },
          { id: 2, name: "3 Onigiris fritos", price: 33 },
      ],
      image: "/productos/onigiris.webp"
    },

    {
      id: 2,
      categoryId: 1,
      name: "Ramen",
      note: "Shoyu: Salsa Soya Coreana · Miso: Salsa de frijol fermentado",
      variants: [
        { id: 1, name: "Ramen Miso de Cerdo", description: "Cerdo, fideos artesanales, naruto, alga nori, cebollín, sésamo molido, bok choy y huevo (aji tamago)", price: 49 },
        { id: 2, name: "Ramen Shoyu de Cerdo", description: "Cerdo, fideos artesanales, naruto, alga nori, cebollín, sésamo molido, bok choy y huevo (aji tamago)", price: 49 },
        { id: 3, name: "Ramen Shoyu de Pollo", description: "Pollo, fideos artesanales, naruto, brotes de alfalfa, cebollín, sésamo molido, bok choy y huevo (aji tamago)", price: 59 },
      ],
      image: "/productos/ramen.webp"
    },
    {
      id: 3,
      categoryId: 1,
      name: "Yakisoba",
      variants: [
          { id: 1, name: "Yakisoba de  cerdo", price: 45 },
          { id: 2, name: "Yakisoba de pollo", price: 45 },
          { id: 3, name: "Yakisoba de mariscos (Katsuobushi)", price: 65 },
      ],
      image: "/productos/yakisoba.webp"
    },
    {
      id: 4,
      categoryId: 1,
      name: "Gyosas",
      description: "Seis gyosas de cerdo en salsa curry acompañado de teriyaki de maracuyá",
      price: 39,
      image: "/productos/gyosas.webp"
    },
    {
      id: 5,
      categoryId: 1,
      name: "Banderillas",
      variants: [
          { id: 1, name: "Banderilla de queso mozarella", price: 45 },
          { id: 2, name: "Banderilla Mixta (queso mozarella y salchicha)", price: 45 },
          { id: 3, name: "Banderilla de salchicha", price: 65 },
      ],
      image: "/productos/banderillas.webp"
    },
    {
      id: 6,
      categoryId: 2,
      name: "Calmante de Totoro",
      description: "Soda artesanal de melón japonés con una bola de helado de vainilla flotante. Verde brillante y nostálgico.",
      image: "/productos/brebajes.webp",
      price: 18
    },
    {
      id: 7,
      categoryId: 2,
      name: "Lluvia de Neo-Tokio",
      description: "Limonada negra activada con carbón de bambú, jarabe de lavanda y destellos plateados comestibles.",
      image: "/productos/neo-tokyo.webp",
      price: 20
    },
    {
      id: 8,
      categoryId: 2,
      name: "Elixir de Calcifer",
      description: "Refresco efervescente de jengibre ahumado, maracuyá y un toque de chile de árbol que te encenderá el espíritu.",
      image: "/productos/calcifer.webp",
      price: 22
    },
    {
      id: 9,
      categoryId: 2,
      name: "Lágrimas de Kodama",
      description: "Agua tónica infusionada con pepino, menta de altura y un toque de agua de azahar. Cristalina y refrescante.",
      image: "/productos/brebajes.webp",
      price: 19
    },
    {
      id: 10,
      categoryId: 2,
      name: "Burbujas de Chihiro",
      description: "Ramune tradicional (soda de canica) reinterpretada con infusión fría de frutos rojos y espuma de lichi.",
      image: "/productos/chihiro.webp",
      price: 19
    },
    {
      id: 11,
      categoryId: 4,
      name: "Zima Blue",
      description: "Gin local, sake seco, licor de Curaçao azul y una esfera de hielo cristalino que brilla bajo luz ultravioleta.",
      image: "/productos/zima.webp",
      price: 45
    },
    {
      id: 12,
      categoryId: 4,
      name: "Atardecer en la Ciénaga",
      description: "Whisky japonés, reducción de chicha morada artesanal, amargo de angostura y humo de madera de cerezo.",
      image: "/productos/cienaga.webp",
      price: 42
    },
    {
      id: 13,
      categoryId: 4,
      name: "Cyber Geisha",
      description: "Vodka infusionado con té de hibisco (flor de pascua), licor de lichi y un borde de azúcar neón púrpura.",
      image: "/productos/geisha.webp",
      price: 40
    },
    {
      id: 14,
      categoryId: 4,
      name: "Ronin Solitario",
      description: "Mezcal artesanal balanceado con sake macerado en pepino, wasabi sutil y zumo de lima ácida.",
      image: "/productos/ronin.webp",
      price: 45
    },
    {
      id: 15,
      categoryId: 4,
      name: "Yubaba’s Gold",
      description: "Licor de melón Midori, sake espumoso, tónica y láminas flotantes de oro comestible de 24k.",
      image: "/productos/yubaba.webp",
      price: 48
    },
    {
      id: 16,
      categoryId: 5,
      name: "Mochi Holográfico",
      description: "Trío de mochis tradicionales rellenos de helado (matcha, sésamo negro y maracuyá) envueltos en un velo translúcido de azúcar.",
      image: "/productos/mochi.webp",
      price: 24
    },
    {
      id: 17,
      categoryId: 5,
      name: "Tarta de Queso Ghibli",
      description: "El famoso cheesecake japonés ultra esponjoso, servido tibio con una jalea densa de frutos del bosque al cardamomo.",
      image: "/productos/tarta.webp",
      price: 28
    },
    {
      id: 18,
      categoryId: 5,
      name: "Taiyaki del Espacio",
      description: "Bizcocho crujiente en forma de pez relleno de Nutella oscura o pasta dulce de poroto rojo (Anko), espolvoreado con polvo de plata.",
      image: "/productos/taiyaki.webp",
      price: 26
    },
    {
      id: 19,
      categoryId: 5,
      name: "Parfait Neo-Nara",
      description: "Capas de gelatina de sake dulce, crema batida de matcha, bizcocho de vainilla y perlas de tapioca bañadas en sirope de taro púrpura.",
      image: "/productos/parfait.webp",
      price: 32
    },
    {
      id: 20,
      categoryId: 5,
      name: "Dorayaki de la Casa",
      description: "Dos panqueques esponjosos estilo anime rellenos de crema de castañas locales y chocolate blanco texturizado.",
      image: "/productos/dorayaki.webp",
      price: 22
    },
]