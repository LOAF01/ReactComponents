import { type ReactNode } from "react";

interface ComponentButtonProps {
  children: ReactNode;
  className?: string;
}

const ComponentButton = ({
  children,
  className = "",
}: ComponentButtonProps) => {
  return (
    <button
      className={`flex justify-center bg-yellow-01 rounded-xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default ComponentButton;
