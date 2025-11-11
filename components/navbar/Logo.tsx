import { FaCode } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button asChild size="icon">
      <Link href="/">
        <FaCode className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
