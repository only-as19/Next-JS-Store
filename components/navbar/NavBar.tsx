import CartButton from "./CartButton"
import LinkDropDown from "./LinksDropDown"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import DarkMode from "./DarkMode"
import Container from "../global/Container"
const Navbar = () => {
  return (
    <nav className="border-b">
        <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8">
            <Logo/>
            <NavSearch/>
            <div className="flex items-center gap-4">
                <CartButton/>
                <DarkMode/>
                <LinkDropDown/>
            </div>
        </Container>
    </nav>
      
  )
}

export default Navbar
