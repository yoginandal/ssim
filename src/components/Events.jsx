import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WordPullUp from "./ui/word-pull-up";

const images = [
  "https://pagedone.io/asset/uploads/1713943683.png",
  "https://pagedone.io/asset/uploads/1713943709.png",
  "https://pagedone.io/asset/uploads/1713943720.png",
  "https://pagedone.io/asset/uploads/1713943731.png",
];

const AUTO_SLIDE_INTERVAL = 1000; // 5 seconds

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
    setIsAutoSliding(false);
  };

  useEffect(() => {
    let intervalId = null;

    if (isAutoSliding) {
      intervalId = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoSliding, nextSlide]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
  };

  const handleMouseEnter = () => setIsAutoSliding(false);
  const handleMouseLeave = () => setIsAutoSliding(true);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="pt-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="mb-16">
          <WordPullUp
            words="Upcoming Events"
            className="text-4xl md:text-5xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
          />
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery's intimate space.
          </p>
        </div>
        <div className="flex flex-col-reverse gap-4 mx-auto">
          <div className="slider-box flex flex-row sm:gap-8 gap-2">
            <div
              className="box xl:w-[1062px] w-full gallery"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative overflow-hidden rounded-3xl h-full">
                <AnimatePresence initial={false} custom={currentIndex}>
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt="Gallery image"
                    className="gallery-image w-full h-full mx-auto object-cover cursor-pointer absolute top-0 left-0"
                    onClick={() => openLightbox(images[currentIndex])}
                    custom={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        nextSlide();
                      } else if (swipe > swipeConfidenceThreshold) {
                        prevSlide();
                      }
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="w-[70px] sm:w-[150px]">
              <div className="nav-for-slider">
                <div className="flex justify-center gap-2 flex-col">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`thumbs-slide w-[70px] sm:!w-[150px] sm:!h-[150px] h-[70px] relative ${
                        index === currentIndex ? "active-thumbnail" : ""
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt="Gallery image"
                        className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 transition-all duration-300 object-cover"
                      />
                      {index === currentIndex && (
                        <motion.div
                          className="absolute inset-0 border-4 border-indigo-600 rounded-2xl"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {lightboxOpen && (
        <Lightbox
          image={lightboxImage}
          onClose={() => {
            setLightboxOpen(false)
            setIsAutoSliding(true)
          }}
        />
      )} */}
    </section>
  );
}
