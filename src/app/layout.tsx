import { Header } from '@/components/Header'
import { lato, montserrat } from '@/fonts'
import { ReactNode } from 'react'

import './globals.css'
import { Providers } from './providers'

export const metadata = {
   title: 'Bíblia Online',
   description:
      'Acesse a Bíblia Online - uma ferramenta completa para leitura e estudo da Palavra de Deus. Explore os livros sagrados, versículos inspiradores, estudos bíblicos e recursos adicionais. Desfrute de uma experiência interativa e intuitiva, com busca avançada, marcação de favoritos, compartilhamento de versículos e personalização da leitura. Descubra a sabedoria e a inspiração das Escrituras em qualquer lugar, a qualquer hora, em seu dispositivo preferido. Encontre conforto espiritual, aprendizado e crescimento pessoal através desta aplicação da Bíblia Online.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-BR">
         <body
            className={`${lato.variable} ${montserrat.variable} bg-neutral-100 font-montserrat`}
         >
            <Providers>
               <Header />
               {children}
            </Providers>
         </body>
      </html>
   )
}
