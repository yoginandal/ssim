"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { BookCheck } from "lucide-react";
import { BookUser } from "lucide-react";
import { ChevronDown, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

// Add this at the top of the file, after the imports
const scrollbarStyles = `
  /* For Webkit browsers like Chrome/Safari/Edge */
  .scrollbar-thin::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: rgba(79, 70, 229, 0.2);
    border-radius: 20px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: rgba(79, 70, 229, 0.4);
  }
  /* For Firefox */
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: rgba(79, 70, 229, 0.2) transparent;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const constraintsRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations. Her research on cross-border cooperation has been recognized in multiple academic journals. Emily has spent the last five years working on developing frameworks for sustainable international development, with a focus on education and healthcare initiatives in developing nations. She has participated in numerous field studies across Southeast Asia and Sub-Saharan Africa, documenting the impact of international aid programs and suggesting improvements based on local feedback and cultural contexts. Her approach combines rigorous academic analysis with practical, on-the-ground insights, making her work particularly valuable for policy makers and international organizations seeking to maximize the effectiveness of their programs.",
      course: "International Relations",
    },
    {
      id: 2,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 3,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 4,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 5,
      name: "Zara Mbeki",
      experience: "6 Years",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      area: "Cape Town, South Africa",
      phone: "+27 82 123 4567",
      email: "zara.mbeki@example.com",
      biography:
        "Focused on African Union diplomacy and regional development. Leading research on sustainable economic partnerships between African nations. Her work has been instrumental in developing new frameworks for cross-continental cooperation, with a particular emphasis on trade agreements that prioritize environmental sustainability and social equity. Zara has presented her findings at numerous international conferences and has been invited to consult with policy makers across the African continent. Her approach combines traditional diplomatic principles with innovative economic models, creating pathways for development that respect both cultural heritage and future sustainability. Through her research and advocacy, she has helped to establish several pilot programs that demonstrate the viability of her proposed frameworks, providing tangible evidence of their potential impact on regional economies and communities. Focused on African Union diplomacy and regional development. Leading research on sustainable economic partnerships between African nations. Her work has been instrumental in developing new frameworks for cross-continental cooperation, with a particular emphasis on trade agreements that prioritize environmental sustainability and social equity. Zara has presented her findings at numerous international conferences and has been invited to consult with policy makers across the African continent. Her approach combines traditional diplomatic principles with innovative economic models, creating pathways for development that respect both cultural heritage and future sustainability. Through her research and advocacy, she has helped to establish several pilot programs that demonstrate the viability of her proposed frameworks, providing tangible evidence of their potential impact on regional economies and communities.",
      course: "International Relations",
    },
    {
      id: 1,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 2,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 3,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 4,
      name: "Emmily Patel",
      experience: "12 Years",
      image: "/placeholder.svg?height=300&width=300",
      area: "New York, USA",
      phone: "+1 (555) 123-4567",
      email: "emily.patel@example.com",
      biography:
        "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
      course: "International Relations",
    },
    {
      id: 5,
      name: "Zara Mbeki",
      experience: "6 Years",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      area: "Cape Town, South Africa",
      phone: "+27 82 123 4567",
      email: "zara.mbeki@example.com",
      biography:
        "Focused on African Union diplomacy and regional development. Leading research on sustainable economic partnerships between African nations.",
      course: "International Relations",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsDrawerOpen(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const scroller = document.getElementById("testimonialScroller");
    if (scroller) {
      const thumbnails = Array.from(scroller.children);
      if (thumbnails.length > 0 && thumbnails[activeIndex]) {
        const thumbnail = thumbnails[activeIndex];
        const scrollerRect = scroller.getBoundingClientRect();
        const thumbnailRect = thumbnail.getBoundingClientRect();

        // Calculate the center position
        const centerPosition =
          thumbnail.offsetLeft -
          scrollerRect.width / 2 +
          thumbnailRect.width / 2;

        // Scroll to center the active thumbnail
        scroller.scrollTo({
          left: centerPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  // Close drawer when changing testimonials
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [activeIndex]);

  // Function to check if biography is longer than 3 lines (approximate)
  const isBiographyLong = (text) => {
    return text.length > 180; // Approximate character count for 3 lines
  };

  const currentBiography = testimonials[activeIndex].biography || "";
  const showReadMoreButton = isBiographyLong(currentBiography);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <style>{scrollbarStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="relative">
          {/* Testimonial Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-2"
          >
            <span className="text-indigo-600 text-lg font-semibold tracking-wide uppercase">
              Testimonial
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 leading-tight"
          >
            Our Students Share Their Success
          </motion.h2>

          {/* Testimonial Carousel */}
          <div
            className="flex items-center justify-center mb-16 gap-4"
            ref={constraintsRef}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="text-3xl text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <ArrowLeft />
            </motion.button>

            <div className="relative w-full max-w-3xl overflow-hidden px-4">
              <div
                id="testimonialScroller"
                className="flex gap-8 overflow-x-auto scrollbar-thin py-2 px-1 no-scrollbar"
                style={{
                  scrollBehavior: "smooth",
                  padding: "30px",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border flex-shrink-0 ${
                      index === activeIndex
                        ? "ring-4 ring-indigo-500 ring-offset-4"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      index === activeIndex ? { scale: [1, 1.1, 1] } : {}
                    }
                    transition={{
                      duration: 0.5,
                      repeat:
                        index === activeIndex ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "reverse",
                    }}
                  >
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="text-3xl text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300 z-10"
              aria-label="Next testimonial"
            >
              <ArrowRight />
            </motion.button>
          </div>

          {/* Featured Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Testimonial Image */}
                  <motion.div
                    className="w-full md:w-1/3"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={
                            testimonials[activeIndex].image ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[activeIndex].name}
                          width={300}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Testimonial Content */}
                  <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl font-bold mb-4 text-gray-900"
                      >
                        {testimonials[activeIndex].name || "Amazing Experience"}
                      </motion.h3>

                      {/* Personal Details Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 min-w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                          <span>
                            Course:{" "}
                            {testimonials[activeIndex].course ||
                              "International Relations"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 min-w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>
                            Area:{" "}
                            {testimonials[activeIndex].area || "New York, USA"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 min-w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span>
                            Phone:{" "}
                            {testimonials[activeIndex].phone ||
                              "+1 (555) 123-4567"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 min-w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span>
                            Email:{" "}
                            {testimonials[activeIndex].email ||
                              "student@example.com"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookCheck className="h-5 w-5 text-indigo-600" />
                          <span>
                            Experience:{" "}
                            {testimonials[activeIndex].experience ||
                              "student@example.com"}
                          </span>
                        </div>
                      </motion.div>

                      {/* Biography Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        className=""
                      >
                        <h5 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2">
                          <BookUser className="h-5 w-5 text-indigo-600" />
                          Biography
                        </h5>
                        <div className="relative">
                          <p
                            className={`text-black text-lg ${
                              showReadMoreButton ? "line-clamp-3" : ""
                            }`}
                          >
                            {currentBiography}
                          </p>
                          {showReadMoreButton && (
                            <button
                              onClick={() => setIsDrawerOpen(true)}
                              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1"
                            >
                              Read more <ChevronDown className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Biography Drawer */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerContent>
              <ScrollArea className="h-[50vh] px-4">
                <div className="max-w-4xl mx-auto">
                  <DrawerHeader className="pl-0">
                    <DrawerTitle className="text-left">Biography</DrawerTitle>
                  </DrawerHeader>
                  <DrawerDescription className="text-black text-lg">
                    {currentBiography}
                  </DrawerDescription>
                </div>
              </ScrollArea>
              <DrawerFooter>
                <DrawerClose asChild>
                  <button className="w-full max-w-4xl mx-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    Close
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </section>
  );
}

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { ArrowRight } from "lucide-react";
// import { BookCheck } from "lucide-react";
// import { BookUser } from "lucide-react";

// export default function TestimonialSection() {
//   const [activeIndex, setActiveIndex] = useState(2);
//   const constraintsRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Emmily Patel",
//       experience: "12 Years",
//       image: "/placeholder.svg?height=300&width=300",
//       area: "New York, USA",
//       phone: "+1 (555) 123-4567",
//       email: "emily.patel@example.com",
//       biography:
//         "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
//       course: "International Relations",
//     },
//     {
//       id: 2,
//       name: "Emmily Patel",
//       experience: "12 Years",
//       image: "/placeholder.svg?height=300&width=300",
//       area: "New York, USA",
//       phone: "+1 (555) 123-4567",
//       email: "emily.patel@example.com",
//       biography:
//         "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
//       course: "International Relations",
//     },
//     {
//       id: 3,
//       name: "Emmily Patel",
//       experience: "12 Years",
//       image: "/placeholder.svg?height=300&width=300",
//       area: "New York, USA",
//       phone: "+1 (555) 123-4567",
//       email: "emily.patel@example.com",
//       biography:
//         "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
//       course: "International Relations",
//     },
//     {
//       id: 4,
//       name: "Emmily Patel",
//       experience: "12 Years",
//       image: "/placeholder.svg?height=300&width=300",
//       area: "New York, USA",
//       phone: "+1 (555) 123-4567",
//       email: "emily.patel@example.com",
//       biography:
//         "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations.",
//       course: "International Relations",
//     },
//     {
//       id: 5,
//       name: "Zara Mbeki",
//       experience: "6 Years",
//       image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//       area: "Cape Town, South Africa",
//       phone: "+27 82 123 4567",
//       email: "zara.mbeki@example.com",
//       biography: "Focused on African Union diplomacy and regional development. Leading research on sustainable economic partnerships between African nations.",
//       course: "International Relations",
//     },
//   ];

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowLeft") {
//         handlePrev();
//       } else if (event.key === "ArrowRight") {
//         handleNext();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-grid-gray-100 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

//         <div className="relative">
//           {/* Testimonial Label */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-2"
//           >
//             <span className="text-indigo-600 text-lg font-semibold tracking-wide uppercase">
//               Testimonial
//             </span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 leading-tight"
//           >
//             Our Students Share Their Success
//           </motion.h2>

//           {/* Testimonial Carousel */}
//           <div
//             className="flex items-center justify-center mb-16 gap-4"
//             ref={constraintsRef}
//           >
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handlePrev}
//               className="text-3xl text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300"
//               aria-label="Previous testimonial"
//             >
//               <ArrowLeft />
//             </motion.button>

//             <div className="flex gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.id}
//                   className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border ${
//                     index === activeIndex
//                       ? "ring-4 ring-indigo-500 ring-offset-4"
//                       : ""
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   animate={index === activeIndex ? { scale: [1, 1.1, 1] } : {}}
//                   transition={{
//                     duration: 0.5,
//                     repeat:
//                       index === activeIndex ? Number.POSITIVE_INFINITY : 0,
//                     repeatType: "reverse",
//                   }}
//                 >
//                   <img
//                     src={testimonial.image || "/placeholder.svg"}
//                     alt={testimonial.name}
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handleNext}
//               className="text-3xl text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300"
//               aria-label="Next testimonial"
//             >
//               <ArrowRight />
//             </motion.button>
//           </div>

//           {/* Featured Testimonial */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-5xl mx-auto"
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
//                 <div className="flex flex-col md:flex-row gap-8">
//                   {/* Testimonial Image */}
//                   <motion.div
//                     className="w-full md:w-1/3"
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                   >
//                     <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100">
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <img
//                           src={
//                             testimonials[activeIndex].image ||
//                             "/placeholder.svg"
//                           }
//                           alt={testimonials[activeIndex].name}
//                           width={300}
//                           height={300}
//                           className="w-full h-auto object-cover"
//                         />
//                       </motion.div>
//                     </div>
//                   </motion.div>

//                   {/* Testimonial Content */}
//                   <div className="w-full md:w-2/3 flex flex-col justify-between">
//                     <div>
//                       <motion.h3
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                         className="text-3xl font-bold mb-4 text-gray-900"
//                       >
//                         {testimonials[activeIndex].name || "Amazing Experience"}
//                       </motion.h3>

//                       {/* Personal Details Section */}
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.35 }}
//                         className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-700"
//                       >
//                         <div className="flex items-center gap-2">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 min-w-5 text-indigo-600"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//                           </svg>
//                           <span>
//                             Course:{" "}
//                             {testimonials[activeIndex].course ||
//                               "International Relations"}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 min-w-5 text-indigo-600"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           <span>
//                             Area:{" "}
//                             {testimonials[activeIndex].area || "New York, USA"}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 min-w-5 text-indigo-600"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                           </svg>
//                           <span>
//                             Phone:{" "}
//                             {testimonials[activeIndex].phone ||
//                               "+1 (555) 123-4567"}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 min-w-5 text-indigo-600"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                           </svg>
//                           <span>
//                             Email:{" "}
//                             {testimonials[activeIndex].email ||
//                               "student@example.com"}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <BookCheck className="h-5 w-5 text-indigo-600" />
//                           <span>
//                             Experience:{" "}
//                             {testimonials[activeIndex].experience ||
//                               "student@example.com"}
//                           </span>
//                         </div>
//                       </motion.div>

//                       {/* Biography Section */}
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.45 }}
//                         className=""
//                       >
//                         <h5 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2">
//                           <BookUser className="h-5 w-5 text-indigo-600" />
//                           Biography
//                         </h5>
//                         <p className="text-black text-lg">
//                           {testimonials[activeIndex].biography ||
//                             "A passionate student with a keen interest in international relations and global affairs. Active participant in Model UN and various diplomatic simulations."}
//                         </p>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
