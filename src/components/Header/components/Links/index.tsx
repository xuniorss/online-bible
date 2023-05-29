'use client'

import { navLinks } from '@/constants/NavLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export const Links = () => {
   const pathname = usePathname()

   return (
      <>
         {navLinks.map((link) => (
            <li
               key={link.href}
               className={clsx(
                  `select-none hover:text-zinc-200`,
                  link.href === pathname ? 'text-white' : 'text-gray-50/75'
               )}
            >
               <Link href={link.href}>{link.name}</Link>
            </li>
         ))}
      </>
   )
}
