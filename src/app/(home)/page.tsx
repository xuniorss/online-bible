import { Container } from '@/components/Container'
import { Books } from './components/Books'

export default function Home() {
   return (
      <section className="h-auto">
         <main className="mt-16 flex flex-col items-center">
            <Container>
               <div className="flex flex-col space-y-7">
                  <article className="mt-7 text-black">
                     <h1 className="mb-7 text-2xl font-bold leading-[3rem] md:text-[2rem]">
                        Bíblia Sagrada Online
                     </h1>
                     <p className="font-lato text-lg font-normal md:text-xl">
                        A{' '}
                        <span className="font-bold">
                           Bíblia Sagrada Online,
                        </span>{' '}
                        versão NVI, é uma bíblia evangélica fácil de entender.
                        Na Bíblia online de estudo vai encontrar mensagens e
                        versículos perfeitos para cada ocasião.
                     </p>
                  </article>

                  <article>
                     <h2 className="text-2xl font-bold leading-9">
                        Livros da Bíblia
                     </h2>
                     <div className="mt-7">
                        <h3 className="mb-10 text-xl font-semibold text-gray-500">
                           Antigo testamento
                        </h3>
                        <Books testament="VT" />
                     </div>
                     <div>
                        <h3 className="my-10 text-xl font-semibold text-gray-500">
                           Novo testamento
                        </h3>
                        <Books testament="NT" />
                     </div>
                  </article>
               </div>
            </Container>
         </main>
      </section>
   )
}
