import {Plus_Jakarta_Sans, Outfit} from 'next/font/google';

export const sansBody = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: 'swap',
    variable: "--font-jakarta"
})

export const sansTitle = Outfit({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-outfit'
})