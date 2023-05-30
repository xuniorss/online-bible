import { Container } from '@/components/Container'
import { Books } from '../../components/Books'

export default function Newtestment() {
   return (
      <section className="min-h-screen">
         <main className="my-16 flex flex-col items-center">
            <Container>
               <div className="flex flex-col space-y-7">
                  <article className="mt-7 text-black">
                     <h1 className="mb-7 text-2xl font-bold leading-[3rem] md:text-[2rem]">
                        Novo Testamento
                     </h1>
                     <p className="font-lato text-lg font-normal md:text-xl">
                        Novo Testamento é o nome dado à parte da Bíblia Cristã
                        que foi escrita após o nascimento de Jesus. É
                        constituído por 27 livros.
                     </p>
                  </article>

                  <article>
                     <h2 className="text-2xl font-bold leading-9">
                        Livros do Novo Testamento
                     </h2>
                     <div className="mt-7">
                        <Books testament="NT" />
                     </div>
                  </article>
               </div>
            </Container>
         </main>
      </section>
   )
}
