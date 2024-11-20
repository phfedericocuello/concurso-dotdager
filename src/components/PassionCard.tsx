import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PassionCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

export default function PassionCard({ title, description, Icon, color }: PassionCardProps) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform border border-zinc-700">
      <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <Icon className="text-zinc-900" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}