import { Links } from '../Links'

export const Navbar = () => {
   return (
      <nav className="hidden lg:flex lg:flex-row">
         <ul className="flex flex-row gap-x-3">
            <Links />
         </ul>
      </nav>
   )
}
