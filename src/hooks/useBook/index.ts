import { BookProps } from '@/@types'
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

export const useBook = () => {
   const [abbrev, setAbrrev] = useState<string | null>(null)

   useEffect(() => {
      const storage = sessionStorage.getItem(
         process.env.NEXT_PUBLIC_BOOKS_ABBREV as string
      )

      if (!storage) return

      setAbrrev(JSON.parse(storage))
   }, [])

   const { data } = useQuery<BookProps>({
      queryKey: process.env.NEXT_PUBLIC_BOOKS_ABBREV,
      queryFn: () =>
         axios.get(`/api/book/${abbrev}`).then((response) => response.data),
      enabled: !!abbrev,
   })

   const chapters = useMemo(() => {
      if (!data) return []

      const qtd = data.chapters

      const chapter: Array<string> = []

      for (let i = 1; i <= qtd; i++) {
         chapter.push(`Capítulo ${i}`)
      }

      return chapter
   }, [data])

   return { data, chapters }
}
