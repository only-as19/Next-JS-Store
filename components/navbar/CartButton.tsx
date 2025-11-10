import Link from "next/link";
import { Button } from "../ui/button"
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
   const cartItems = 9
  return (
    <Button variant="outline" size="icon" className="flex items-center justify-center relative">
      <Link href="/cart">
        <LuShoppingCart/>
        <span className="absolute -top-3 -right-3 bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">{cartItems}</span>
      </Link>
    </Button>
  )
}

export default CartButton
