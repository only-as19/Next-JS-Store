import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
    className?:string;
    children:ReactNode
}

const Container:React.FC<ContainerProps> = ({className,children}) => {
  return (
    <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8',className)}>
      {children}
    </div>
  )
}

export default Container
