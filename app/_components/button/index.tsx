import { Button } from "@/components/ui/button";
import { Bricolage_Grotesque } from "next/font/google";




const bricolageFont = Bricolage_Grotesque({ subsets: ["latin"] });


interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export default function ButtonComp({
  children,
  type,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <Button
      disabled={disabled}
      type={type}
      className={`flex ${bricolageFont.className} text-whiteColor rounded-none hover:translate-x-4 transition-all duration-200 cursor-pointer hover:text-second-color justify-center font-semibold items-center gap-2 text-sm py-2 px-4 hover:bg ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
