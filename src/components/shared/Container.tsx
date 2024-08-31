import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
  }


const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-[1920px] mx-auto w-full">{children}</div>
  )
}

export default Container