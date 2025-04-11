import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = ({ children, className, ...props } : ButtonProps) => {
  return (
    <button
      className={`w-full bg-soholights text-siphon py-4 px-6 rounded-xl ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export const CompactButton = ({ children, className, disabled, ...props } : ButtonProps) => {
  return (
    <button
      className={`w-8 aspect-square bg-soholights text-siphon rounded-xl ${className || ''} ${disabled ? 'bg-plum text-ice' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}