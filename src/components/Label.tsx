import { ReactNode } from "react";


interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-large font-medium text-white mb-1 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
