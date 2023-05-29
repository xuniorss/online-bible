'use client'

import { useMenuToggle } from '@/hooks/useMenuToggle'
import { Links } from '../Links'
import { IoClose } from 'react-icons/io5'

export const MobileNav = () => {
   const toggle = useMenuToggle()

   return (
      <>
         {toggle.isOpen && (
            <aside className="fixed z-10 mt-20 flex w-auto rounded-md bg-background/95 p-4 lg:relative">
               <nav className="flex flex-col space-y-4">
                  <div className="flex flex-row justify-end">
                     <IoClose
                        onClick={toggle.onClose}
                        size={20}
                        className="cursor-pointer font-bold text-white"
                     />
                  </div>
                  <ul className="flex flex-col space-y-3">
                     <Links />
                  </ul>
               </nav>
            </aside>
         )}
      </>
   )
}
