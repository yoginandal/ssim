"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    videoId: "QonokkvYeNs",
    alt: "E S Diwesh Rahul, PGDM Student",
    thumbnail: `https://img.youtube.com/vi/QonokkvYeNs/maxresdefault.jpg`,
  },
  {
    videoId: "IvXy2S9FUBg",
    alt: "Smily Christine, SSIM",
    thumbnail: `https://img.youtube.com/vi/IvXy2S9FUBg/maxresdefault.jpg`,
  },
  {
    videoId: "p6sWGcSmBl4",
    alt: "Kanchana I SSIM",
    thumbnail: `https://img.youtube.com/vi/p6sWGcSmBl4/maxresdefault.jpg`,
  },
  {
    videoId: "_BUXcgQMer8",
    alt: "Shalini EN I PGDM BA Student",
    thumbnail: `https://img.youtube.com/vi/_BUXcgQMer8/maxresdefault.jpg`,
  },
];

export default function ExcursionCarousel() {
  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="bg-blue-900 py-12 px-4">
      <div className="w-full max-w-3xl container mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
          SSIM Stories
        </h1>

        <Carousel opts={{ loop: true }} className="relative w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleVideoClick(slide.videoId)}
                >
                  <img
                    src={slide.thumbnail}
                    alt={slide.alt}
                    className="w-full aspect-video rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#641C34"
                        className="w-8 h-8"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 bg-white/80 w-16 flex items-center justify-center">
                    <span className="text-[#641C34] font-semibold whitespace-nowrap transform -rotate-90">
                      {slide.alt}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100" />
        </Carousel>
      </div>
    </div>
  );
}
