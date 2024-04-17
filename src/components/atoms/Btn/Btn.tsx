import { ButtonProps } from "./types";
import { getTotalBtnClassName } from "./utils";

export const Btn = ({ children, onClick, type, color }: ButtonProps) => {
  const className = getTotalBtnClassName({ color, type });

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
