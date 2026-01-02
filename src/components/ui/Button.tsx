import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/30',
      secondary: 'bg-secondary hover:bg-secondary-light text-white shadow-lg shadow-secondary/30',
      accent: 'bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/30',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : 'w-auto',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
