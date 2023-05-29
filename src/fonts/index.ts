import { Lato, Montserrat } from 'next/font/google'

export const lato = Lato({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-lato',
})

export const montserrat = Montserrat({
   subsets: ['latin'],
   variable: '--font-montserrat',
})
