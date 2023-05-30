import { BooksProps } from '@/@types'
import axios from 'axios'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

export const useBooks = (testament?: 'VT' | 'NT') => {
   const { data } = useQuery<BooksProps[]>({
      queryKey: process.env.NEXT_PUBLIC_BOOKS_KEY,
      queryFn: () => axios.get('/api/books').then((response) => response.data),
      staleTime: 86400000, // 1 dia em milissegundos
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

   const groupes = useMemo(() => {
      if (!data || !testament) return

      const uniqueGroups = data.map((value) => ({
         testament: value.testament,
         group: value.group,
      }))

      const filteredGroups = uniqueGroups.filter(
         (value, index, self) =>
            self.findIndex((v) => v.group === value.group) === index
      )

      const especified = filteredGroups.filter(
         (value) => value.testament === testament
      )

      return especified
   }, [data, testament])

   return { data, oldtestment, newtestment, groupes }
}
