import Link from 'next/link'
import { Container } from '../Container'
import { Menu } from './components/Menu'
import { MobileNav } from './components/MobileNav'
import { Navbar } from './components/Navbar'

export const Header = () => {
   return (
      <>
         <header className="fixed top-0 z-10 flex h-16 w-full max-w-full flex-col items-center justify-center bg-background">
            <Container>
               <div className="flex w-full flex-row items-center justify-between">
                  <Link href="/" className="text-2xl font-bold text-white">
                     Bíblia{' '}
                     <span className="text-lemon" role="link">
                        online
                     </span>
                  </Link>

                  <Navbar />
                  <Menu />
               </div>
            </Container>
         </header>

         <div className="relative z-10 flex justify-end px-4 lg:hidden">
            <MobileNav />
         </div>
      </>
   )
}
