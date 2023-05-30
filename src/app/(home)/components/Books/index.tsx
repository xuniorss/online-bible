'use client'

import { BooksProps } from '@/@types'
import { useBooks } from '@/hooks/useBooks'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { remove } from 'remove-accents'

interface BookProps {
   testament?: 'VT' | 'NT'
}

export const Books = ({ testament }: BookProps) => {
   const [books, setBooks] = useState<BooksProps[]>([])
   const { oldtestment, newtestment, data } = useBooks()

   useEffect(() => {
      if (!oldtestment || !newtestment || !data) return setBooks([])

      if (testament === 'VT') return setBooks(oldtestment)
      if (testament === 'NT') return setBooks(newtestment)

      return setBooks(data)
   }, [testament, data, newtestment, oldtestment])

   return (
      <div className="grid grid-cols-2 gap-y-3 md:grid-cols-3">
         {books.map((book) => {
            const url = book.name
               .toLowerCase()
               .split('de')[0]
               .trim()
               .replace(/\s/g, '')
               .normalize('NFD')
               .replace(/[\u0300-\u036f]/g, '')
               .replace(/ª/g, '_')
               .replace(/º/g, '_')

            return (
               <div key={book.name}>
                  <Link
                     href={`/book/${remove(url)}`}
                     className="text-lg text-blue-600 hover:text-blue-400 hover:underline lg:text-xl"
                  >
                     {book.name}
                  </Link>
               </div>
            )
         })}
      </div>
   )
}
