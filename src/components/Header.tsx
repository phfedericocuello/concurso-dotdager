import React from 'react';
import { Guitar, Cat, BookOpen, Sandwich } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed w-full bg-zinc-900/90 backdrop-blur-sm text-white py-4 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#Inicio"><div className="text-2xl font-bold text-emerald-400">Dot Dagger</div></a>
        <div className="flex gap-6">
          <a href="#passions" className="hover:text-emerald-400 transition-colors">Pasiones</a>
          <a href="#content" className="hover:text-emerald-400 transition-colors">Contenido</a>
          <a href="#lumber" className="hover:text-emerald-400 transition-colors">Lumber</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">Sobre mi</a>
        </div>
      </div>
    </nav>
  );
}