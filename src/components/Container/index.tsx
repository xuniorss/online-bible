import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
   return (
      <div className="flex h-full w-full max-w-5xl flex-row items-center px-4">
         {children}
      </div>
   )
}
