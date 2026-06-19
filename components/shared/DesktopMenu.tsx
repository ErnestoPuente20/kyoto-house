'use client'
import Link from "next/link"
import {motion} from 'motion/react'
import { NAV_LINKS } from "@/constants"

export default function DesktopMenu() {
  return (
    <ul className="hidden lg:flex gap-10 items-center font-body font-bold tracking-[0.2em] text-sm uppercase text-light">
        {NAV_LINKS.map((link, i) => (
            <motion.li
                key={i}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className="relative group"
            >
                <Link 
                    href={link.href}
                    className="transition-colors duration-300 hover:text-white block py-1"
                >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-linear-to-r from-cyan-main to-purple-main shadow-[0_0_8px_#00f2ff] transition-all duration-300 group-hover:w-full"/>
                </Link>
            </motion.li>
        ))}
    </ul>
  )
}
