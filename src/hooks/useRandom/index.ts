import { VerseProps } from '@/@types'
import axios from 'axios'
import { useQuery } from 'react-query'

export const useRandom = (version?: string) => {
   const v = version || 'nvi'

   const { data } = useQuery<VerseProps>({
      queryKey: process.env.NEXT_PUBLIC_VERSES_RANDOM_KEY,
      queryFn: () =>
         axios.get(`/api/verses/${v}`).then((response) => response.data),
      enabled: !!v,
   })

   return { data }
}
