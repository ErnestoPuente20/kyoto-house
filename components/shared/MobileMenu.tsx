'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { NAV_LINKS } from '@/constants'

interface MobileMenuProps {
    isOpen: boolean
    closeMenu: () => void
}

export default function MobileMenu({ isOpen, closeMenu } : MobileMenuProps) {
  return (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                /* 🟢 CORRECCIÓN: z-60 para ponerse encima del header y bg-dark total para evitar transparencias rotas */
                className='fixed inset-0 h-screen w-screen bg-dark backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden z-60'
            >
                {/* 🟢 CORRECCIÓN: Añadido pt-20 para asegurar que el contenido jamás se pegue al borde superior bajo ninguna circunstancia */}
                <ul className='flex flex-col gap-10 items-center font-title text-3xl tracking-tighter text-light pt-20'>
                    {NAV_LINKS.map((link, i) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                className='hover:text-cyan-main transition-colors duration-300'
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}
    </AnimatePresence>
  )
}