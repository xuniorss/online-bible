'use client'

import { Container } from '@/components/Container'
import { useBook } from '@/hooks/useBook'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Verses } from './components/Verses'

export default function Book() {
   const pathname = usePathname()

   const book = useMemo(() => {
      const check = pathname.includes('_')

      if (!check) {
         return pathname
            .slice(1, pathname.length)
            .slice(0, 1)
            .toUpperCase()
            .concat(pathname.slice(2, pathname.length))
      }

      return pathname
         .slice(1, pathname.length)
         .replace('_', ' ')
         .slice(0, 3)
         .toUpperCase()
         .concat(pathname.slice(4, pathname.length))
   }, [pathname])

   return (
      <section className="min-h-screen">
         <main className="my-16 flex flex-col items-center">
            <Container>
               <div className="flex w-full flex-col space-y-7">
                  <header className="mt-7 text-black">
                     <h1 className="mb-7 text-2xl font-bold leading-[3rem] md:text-[2rem]">
                        {book}
                     </h1>

                     <h3 className="text-lg font-normal text-black">
                        <span className="font-bold">Livro de {book}</span>{' '}
                        completo, versão NVI, com todos os capítulos e
                        versículos na Bíblia.
                     </h3>
                  </header>

                  <article className="w-full">
                     <h2 className="text-2xl font-semibold leading-9">
                        Capítulos do Livro de {book}
                     </h2>

                     <Verses />
                  </article>
               </div>
            </Container>
         </main>
      </section>
   )
}
