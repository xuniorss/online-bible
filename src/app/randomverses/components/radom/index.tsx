'use client'

import { useRandom } from '@/hooks/useRandom'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

type Version = {
   version: string
}

export const Random = () => {
   const { control, watch, formState } = useForm<Version>()

   const version = watch('version') || 'nvi'

   const { data } = useRandom(version)

   return (
      <main className="flex h-auto w-full flex-col rounded-md bg-zinc-300 p-5 shadow-md">
         <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Versículo</h2>
            <div className="flex flex-row gap-x-3">
               <Controller
                  control={control}
                  name="version"
                  defaultValue="nvi"
                  render={({ field }) => (
                     <select {...field}>
                        <option value="nvi">nvi</option>
                        <option value="acf">acf</option>
                     </select>
                  )}
               />
            </div>
         </div>
         {data && (
            <article>
               <p className="text-xl leading-8">{`"${data.text}"`}</p>
            </article>
         )}
      </main>
   )
}
