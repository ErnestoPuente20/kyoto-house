import type { Metadata } from "next";
import { sansBody, sansTitle } from "@/app/fonts";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Restaurante Sopocachi | Sabor Tradicional",
  description: "Disfruta de la mejor experiencia gastronómica en el corazón de Sopocachi, La Paz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sansBody.variable} ${sansTitle.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar/>
        <main className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
