'use client'

import { useBook } from '@/hooks/useBook'
import { useEffect, useState } from 'react'

export const Verses = () => {
   const { chapters } = useBook()

   return (
      <div className="mt-7 flex flex-col rounded-sm border border-gray-400 p-4 md:grid-cols-3">
         <div className="flex w-full flex-col gap-x-4 ">{chapters}</div>
      </div>
   )
}
