import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path as needed
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"; // Adjust path as needed
import { Skeleton } from "@/components/ui/skeleton"; // Adjust path as needed
import WordPullUp from "../ui/word-pull-up";

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Categories array
const categories = [
  { id: "all", label: "All", icon: "📸" },
  { id: "campus", label: "Campus", icon: "🏛️" },
  { id: "infrastructure", label: "Infrastructure", icon: "🏗️" },
  { id: "labs", label: "Labs", icon: "🔬" },
  { id: "events", label: "Events", icon: "🎉" },
  { id: "sports", label: "Sports", icon: "⚽" },
  { id: "campus1", label: "Campus", icon: "🏛️" },
  { id: "infrastructure1", label: "Infrastructure", icon: "🏗️" },
  { id: "labs1", label: "Labs", icon: "🔬" },
  { id: "events1", label: "Events", icon: "🎉" },
  { id: "sports1", label: "Sports", icon: "⚽" },
];

// Gallery items array
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=${Math.floor(
    Math.random() * 200 + 300
  )}&width=${Math.floor(Math.random() * 200 + 400)}`,
  category: categories[Math.floor(Math.random() * categories.length)].id,
  alt: `Gallery image ${i + 1}`,
  title: `Gallery Item ${i + 1}`,
  description: `Description for gallery item ${i + 1}`,
}));

const ImageDialog = ({
  isOpen,
  onOpenChange,
  currentImage,
  onPrevious,
  onNext,
}) => {
  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl p-0 pt-6">
        <DialogDescription className="sr-only">
          Image gallery viewer showing {currentImage.title}
        </DialogDescription>
        <div className="relative flex-1 flex items-center justify-center p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-50 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={onPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="w-full h-full flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={onNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="w-full bg-background p-6 rounded-b-lg">
          <h2 className="text-xl font-semibold text-center">
            {currentImage.title}
          </h2>
          <p className="text-sm text-muted-foreground text-center mt-1">
            {currentImage.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function LifeAtSsim() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handlePrevious = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  }, [filteredItems]);

  const handleKeyPress = useCallback(
    (e) => {
      if (isDialogOpen) {
        if (e.key === "ArrowLeft") handlePrevious();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setIsDialogOpen(false);
      }
    },
    [isDialogOpen, handlePrevious, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="container mx-auto px-4 py-8 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-7"
      >
        <WordPullUp
          words="Explore Life at SSIM"
          className="text-3xl md:text-4xl font-bold tracking-tight text-mainBlue mt-8 mb-0 md:mb-6"
        />
        <p className="text-base max-w-6xl mx-auto text-gray-600">
          Siva Sivani strongly believes in motivating the students to become
          leaders by giving them ample opportunities to explore the talent
          within them. In order to provide such opportunities SSIM has designed
          various Extra Curricular Activities to enable the students to
          understand the importance of co-ordination, teamwork, group dynamics,
          oneness etc. To give a structure to these, SSIM has named these
          activities uniquely starting the first letter of every activity with
          an ’S’ as in ‘Siva Sivani’. The programmes are detailed below
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto w-full mb-8 px-4">
        {/* Navigation buttons */}
        <div className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
            onClick={() => {
              const container = document.querySelector(".filter-scroll");
              if (container)
                container.scrollBy({ left: -200, behavior: "smooth" });
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter Scroll */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-2 max-w-7xl mx-auto overflow-x-auto hide-scrollbar filter-scroll py-2"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 },
              }}
              className="flex-none first:ml-8 sm:first:ml-2 last:mr-8 sm:last:mr-2"
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-sm hover:shadow-md",
                  activeCategory === category.id &&
                    "ring-2 ring-primary/20 bg-primary text-primary-foreground font-medium"
                )}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
            onClick={() => {
              const container = document.querySelector(".filter-scroll");
              if (container)
                container.scrollBy({ left: 200, behavior: "smooth" });
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Gallery Items */}
      <motion.div
        layout
        className="grid mx-auto max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="wait">
          {isLoading
            ? Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Skeleton className="w-full aspect-[4/3] rounded-xl" />
                </motion.div>
              ))
            : filteredItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer group relative overflow-hidden rounded-xl shadow-lg bg-white"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsDialogOpen(true);
                      }}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center text-white">
                          <ImageIcon className="h-8 w-8" />
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                </Dialog>
              ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Dialog */}
      <ImageDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentImage={filteredItems[currentImageIndex]}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
