import { VerseProps } from '@/@types'
import { api } from '@/services/api'
import { NextResponse } from 'next/server'

export const GET = async (
   req: Request,
   { params }: { params: { version: string } }
) => {
   try {
      const { version } = params

      const v = version || 'nvi'

      const { data } = await api.get<VerseProps>(`/verses/${v}/random`)

      return NextResponse.json(data)
   } catch (error) {
      return new NextResponse('Internal Error', { status: 500 })
   }
}
