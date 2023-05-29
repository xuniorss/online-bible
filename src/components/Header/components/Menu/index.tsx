'use client'

import { useMenuToggle } from '@/hooks/useMenuToggle'
import { useCallback } from 'react'
import { HiMenu } from 'react-icons/hi'

export const Menu = () => {
   const toggle = useMenuToggle()

   const handleClick = useCallback(() => {
      if (toggle.isOpen) return toggle.onClose()
      return toggle.onOpen()
   }, [toggle])

   return (
      <HiMenu
         onClick={handleClick}
         size={25}
         color="white"
         className="block cursor-pointer lg:hidden"
      />
   )
}
