import { Container } from '@/components/Container'
import { Books } from '../../components/Books'

export default function Oldtestment() {
   return (
      <section className="min-h-screen">
         <main className="my-16 flex flex-col items-center">
            <Container>
               <div className="flex flex-col space-y-7">
                  <article className="mt-7 text-black">
                     <h1 className="mb-7 text-2xl font-bold leading-[3rem] md:text-[2rem]">
                        Antigo Testamento
                     </h1>
                     <p className="font-lato text-lg font-normal md:text-xl">
                        O Antigo Testamento, também conhecido como Velho
                        Testamento, é a primeira parte da Bíblia Cristã. É
                        constituído por 39 livros.
                     </p>
                  </article>

                  <article>
                     <h2 className="text-2xl font-bold leading-9">
                        Livros do Antigo Testamento
                     </h2>
                     <div className="mt-7">
                        <Books testament="VT" />
                     </div>
                  </article>
               </div>
            </Container>
         </main>
      </section>
   )
}
