import { Container } from '@/components/Container'
import { Random } from './components/radom'

export default function Randomverses() {
   return (
      <section className="min-h-screen">
         <main className="my-16 flex flex-col items-center">
            <Container>
               <div className="flex w-full flex-col space-y-7">
                  <article className="mt-7 text-black">
                     <h1 className="mb-7 text-2xl font-bold leading-[3rem] md:text-[2rem]">
                        Versículos aleatórios
                     </h1>
                     <p className="font-lato text-lg font-normal md:text-xl">
                        Versículo ou passagem bíblica para melhorar e inspirar o
                        seu dia.
                     </p>
                  </article>

                  <article className="w-full">
                     <Random />
                  </article>
               </div>
            </Container>
         </main>
      </section>
   )
}
