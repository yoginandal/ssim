import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WordPullUp from "./ui/word-pull-up";

const slides = [
  {
    videoId: "https://www.youtube.com/watch?v=QonokkvYeNs",
    alt: "E S Diwesh Rahul, PGDM Student",
    thumbnail: `https://img.youtube.com/vi/QonokkvYeNs/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=IvXy2S9FUBg",
    alt: "Smily Christine, SSIM",
    thumbnail: `https://img.youtube.com/vi/IvXy2S9FUBg/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=p6sWGcSmBl4",
    alt: "Kanchana I SSIM",
    thumbnail: `https://img.youtube.com/vi/p6sWGcSmBl4/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=_BUXcgQMer8",
    alt: "Shalini EN I PGDM BA Student",
    thumbnail: `https://img.youtube.com/vi/_BUXcgQMer8/maxresdefault.jpg`,
  },
  // {
  //   videoId: "https://www.youtube.com/watch?v=huRs1xw8Cfc",
  //   alt: "Akshita, a PGDM-Triple Specialisation student",
  //   thumbnail: `https://img.youtube.com/vi/huRs1xw8Cfc/maxresdefault.jpg`,
  // },
];

// Add a helper function to extract video ID from URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

function ExcursionCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    timerRef.current = setInterval(() => {
      api.scrollNext();
    }, 5000);

    const onInteract = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    api.on("pointerDown", onInteract);
    api.on("touchStart", onInteract);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      api.off("pointerDown", onInteract);
      api.off("touchStart", onInteract);
    };
  }, [api]);

  // Add modal close handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  // Modify the video click handler
  const handleVideoClick = (videoUrl) => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      setSelectedVideoId(videoId);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-mainBlue flex flex-col items-center justify-center p-4 sm:p-8">
        <WordPullUp
          words="SSIM Stories"
          className="tracking-tigh sm:text-left mt-8 md:mb-6 text-white text-3xl md:text-4xl font-bold text-center mb-8 sm:!mb-12"
        />
        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {slides.map((slide, index) => (
              <>
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 md:basis-4/5 lg:basis-3/4"
                >
                  <div
                    className={`relative transition-all duration-500 ease-in-out ${
                      current === index
                        ? "scale-100 z-20"
                        : `scale-90 opacity-40 z-10 ${
                            index === hoveredIndex ? "opacity-60" : ""
                          }`
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={slide.thumbnail}
                        alt={slide.alt}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white">
                      <h2 className="text-xl sm:text-2xl font-bold truncate">
                        {slide.alt}
                      </h2>
                    </div>
                    <div
                      className="absolute cursor-pointer inset-0 w-full h-full flex items-center justify-center"
                      onClick={() => handleVideoClick(slide.videoId)}
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                        </div>
                        <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
                        <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden w-8 h-8 bg-red-600 text-white sm:flex items-center justify-center -left-4 sm:-left-12" />
          <CarouselNext className="hidden w-8 h-8 bg-red-600 text-white sm:flex items-center justify-center -right-4 sm:-right-12" />
        </Carousel>
        <div className="mt-6 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-6"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add Modal/Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default ExcursionCarousel;

// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const slides = [
//   {
//     videoId: "QonokkvYeNs",
//     alt: "E S Diwesh Rahul, PGDM Student",
//     thumbnail: `https://img.youtube.com/vi/QonokkvYeNs/maxresdefault.jpg`,
//   },
//   {
//     videoId: "IvXy2S9FUBg",
//     alt: "Smily Christine, SSIM",
//     thumbnail: `https://img.youtube.com/vi/IvXy2S9FUBg/maxresdefault.jpg`,
//   },
//   {
//     videoId: "p6sWGcSmBl4",
//     alt: "Kanchana I SSIM",
//     thumbnail: `https://img.youtube.com/vi/p6sWGcSmBl4/maxresdefault.jpg`,
//   },
//   {
//     videoId: "_BUXcgQMer8",
//     alt: "Shalini EN I PGDM BA Student",
//     thumbnail: `https://img.youtube.com/vi/_BUXcgQMer8/maxresdefault.jpg`,
//   },
// ];

// export default function ExcursionCarousel() {
//   const handleVideoClick = (videoId) => {
//     window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
//   };

//   return (
//     <div className="bg-blue-900 py-12 px-4">
//       <div className="w-full max-w-3xl container mx-auto">
//         <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
//           SSIM Stories
//         </h1>

//         <Carousel opts={{ loop: true }} className="relative w-full">
//           <CarouselContent>
//             {slides.map((slide, index) => (
//               <CarouselItem key={index}>
//                 <div
//                   className="relative cursor-pointer"
//                   onClick={() => handleVideoClick(slide.videoId)}
//                 >
//                   <img
//                     src={slide.thumbnail}
//                     alt={slide.alt}
//                     className="w-full aspect-video rounded-lg object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="#641C34"
//                         className="w-8 h-8"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="absolute right-0 top-0 bottom-0 bg-white/80 w-16 flex items-center justify-center">
//                     <span className="text-[#641C34] font-semibold whitespace-nowrap transform -rotate-90">
//                       {slide.alt}
//                     </span>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100" />
//           <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100" />
//         </Carousel>
//       </div>
//     </div>
//   );
// }
