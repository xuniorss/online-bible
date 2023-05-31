import { BookProps } from '@/@types'
import { api } from '@/services/api'
import { NextResponse } from 'next/server'

export const GET = async (
   req: Request,
   { params }: { params: { abbrev: string } }
) => {
   try {
      const { abbrev } = params

      const { data } = await api.get<BookProps>(`/books/${abbrev}`)

      return NextResponse.json(data)
   } catch (error) {
      return new NextResponse('Internal Error', { status: 500 })
   }
}
