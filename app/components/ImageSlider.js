"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageSlider() {
  const images = [
    "/minigame-poster/MiniGames.jpg",
    "/minigame-poster/SpotTheIssue.jpg",
    "/minigame-poster/QuestionHunting.jpg",
    "/minigame-poster/RightOrRisk.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Set smaller target size matching MiniGame poster dimensions
  // Adjust these values if your actual MiniGame images have different size
  const IMAGE_WIDTH = 600;
  const IMAGE_HEIGHT = 338;

  return (
    <div className="w-full mx-auto" style={{ maxWidth: IMAGE_WIDTH }}>
      <div className="relative overflow-hidden rounded-3xl"
        style={{
          width: '100%',
          height: IMAGE_HEIGHT,
          backgroundColor: 'black'
        }}
      >
        {/* Always render the current slide on top of the black container */}
        <div className="relative w-full h-full">
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            priority={current === 0}
          />
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-6 bg-purple-600"
                : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
``