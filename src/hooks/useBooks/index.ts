import { BooksProps } from '@/@types'
import axios from 'axios'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

export const useBooks = () => {
   const { data } = useQuery<BooksProps[]>({
      queryKey: process.env.NEXT_PUBLIC_BOOKS_KEY,
      queryFn: () => axios.get('/api/books').then((response) => response.data),
   })

   const oldtestment = useMemo(() => {
      if (!data) return

      const vt = data.filter((value) => value.testament === 'VT')
      return vt
   }, [data])

   const newtestment = useMemo(() => {
      if (!data) return

      const nt = data.filter((value) => value.testament === 'NT')
      return nt
   }, [data])

   return { data, oldtestment, newtestment }
}
