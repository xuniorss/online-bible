import { BooksProps } from '@/@types'
import { api } from '@/services/api'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
   try {
      const { data } = await api.get<BooksProps[]>('/books')

      return NextResponse.json(data)
   } catch (error) {
      return new NextResponse('Internal Error', { status: 500 })
   }
}
