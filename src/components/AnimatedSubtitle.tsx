import React from 'react';
import { useTypewriter } from './useTypewriter';

interface AnimatedSubtitleProps {
  text: string;
  className?: string;
}

export default function AnimatedSubtitle({ text, className = '' }: AnimatedSubtitleProps) {
  const displayText = useTypewriter(text);
  
  return (
    <div className={`${className} flex items-center`}>
      <span>{displayText}</span>
      <span className="w-0.5 h-6 bg-emerald-400 ml-1 animate-pulse"></span>
    </div>
  );
}