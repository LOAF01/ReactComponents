import { type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";

interface ComponentButtonProps {
  children: ReactNode;
  path: string;
  className?: string;
}

const ComponentButton = ({
  children,
  path,
  className = "",
}: ComponentButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleClick = () => {
    navigate(path);
  };
  return (
    <button
      className={`flex justify-center rounded-xl cursor-pointer
        ${isActive ? "bg-yellow-01" : "hover:bg-yellow-01"}
        ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ComponentButton;
