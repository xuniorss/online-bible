import { create } from 'zustand'

type toggleStore = {
   isOpen: boolean
   onOpen: () => void
   onClose: () => void
}

export const useMenuToggle = create<toggleStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}))
