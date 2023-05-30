'use client'

import { useRandom } from '@/hooks/useRandom'

export const Random = () => {
   const { data } = useRandom('nvi')

   return (
      <main className="flex h-auto w-full flex-col gap-y-3 rounded-md bg-zinc-200 p-5 shadow-md">
         <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Versículo</h2>
         </div>
         {data && (
            <article className="flex flex-col gap-y-2">
               <p className="font-lato text-xl leading-8 first-letter:uppercase">{`"${data.text}"`}</p>

               <span className="text-lg font-medium text-cyan-800">{`${data.book.name} ${data.chapter}:${data.number}`}</span>
            </article>
         )}
      </main>
   )
}
