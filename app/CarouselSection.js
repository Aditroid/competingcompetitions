
'use client';

import { useEffect, useState, useRef } from 'react';
import Featured from '@/components/Featured';
import slides from '@/data/slides';


export default function CarouselSection() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const pauseRef = useRef(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!pauseRef.current) {
          setIndex((prev) => (prev + 1) % slides.length);
        }
      }, 5000);
    };

    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    pauseRef.current = true;
  };

  const handleMouseLeave = () => {
    pauseRef.current = false;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="w-full flex-shrink-0" key={i}>
            <Featured {...slide} />
          </div>
        ))}
      </div>

      {/* Dots over image */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
