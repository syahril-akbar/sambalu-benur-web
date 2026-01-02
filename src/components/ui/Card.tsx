import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = false }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300',
        hoverEffect && 'hover:shadow-xl hover:-translate-y-1 hover:border-primary/20',
        className
      )}
    >
      {children}
    </div>
  );
};
