"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Articles({ articles }) {
  const sliderRef = useRef(null);
  const timerRef = useRef(null);
  const isHovered = useRef(false);
  const [sliderInstanceRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 556px)": {
        slides: { perView: 1 },
      },
      "(min-width: 557px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    },
    created: (slider) => {
      timerRef.current = setInterval(() => {
        if (!isHovered.current) {
          slider.next();
        }
      }, 7000);
    },
  });

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full mb-10 group"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <div ref={sliderInstanceRef} className="keen-slider">
        {articles.map((article, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="bg-gray-100/25 p-4 min-w-[280px] hover:scale-105 transition duration-300 hover:cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <h3 className="text-md font-semibold line-clamp-2 mt-3">{article.title}</h3>
              <p className="text-xs text-gray-600 mt-1 italic">
                {article.authors?.join(", ")}
              </p>
              <p className="text-xs text-gray-400">{article.date}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-[-2] top-2/5 -translate-y-1/2 z-10 p-2 bg-gray-200 shadow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-300 hover:cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-[-1] top-2/5 -translate-y-1/2 z-10 p-2 bg-gray-200 shadow rounded-full opacity-0 hover:bg-gray-300 hover:cursor-pointer group-hover:opacity-100 transition duration-500"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
