
type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = ({ children, ...props } : ButtonProps) => {
  return (
    <button
      className="w-full bg-soholights text-siphon py-4 px-6 rounded-xl"
      {...props}
    >
      {children}
    </button>
  );
}

export const CompactButton = ({ children, disabled, ...props } : ButtonProps) => {
  return (
    <button
      className={`w-8 aspect-square bg-soholights text-siphon rounded-xl ${disabled ? 'bg-plum text-ice' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}