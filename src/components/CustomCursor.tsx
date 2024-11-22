import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; timestamp: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let trailTimeout: NodeJS.Timeout;
    const maxTrail = 3;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prevTrail => {
        const timestamp = performance.now();
        const newTrail = [...prevTrail];
        newTrail.push({ x: e.clientX, y: e.clientY, timestamp });
        if (newTrail.length > maxTrail) {
          newTrail.shift();
        }
        return newTrail;
      });

      clearTimeout(trailTimeout);
      trailTimeout = setTimeout(() => setTrail([]), 100);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      clearTimeout(trailTimeout);
    };
  }, [])};
