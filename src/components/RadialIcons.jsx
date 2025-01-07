import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WordPullUp from "@/components/ui/word-pull-up";
import Testimonials1 from "../assets/user_images/man1.jpg";
import Testimonials2 from "../assets/user_images/man2.jpg";
import Testimonials3 from "../assets/user_images/man3.jpg";
import Testimonials4 from "../assets/user_images/man4.jpg";
import Testimonials5 from "../assets/user_images/man5.jpg";
import Testimonials6 from "../assets/user_images/man6.jpg";
import Testimonials7 from "../assets/user_images/man7.jpg";
import Testimonials8 from "../assets/user_images/women1.jpg";
import Testimonials9 from "../assets/user_images/women2.jpg";
import Testimonials10 from "../assets/user_images/women3.jpg";
import Testimonials11 from "../assets/user_images/women4.jpg";

// Testimonials data
const testimonials = [
  {
    name: "John Davis",
    role: "Software Engineer",
    text: "Inspiring leadership qualities. Always pushes the team forward with innovative solutions and creative problem-solving approaches.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "UX Designer",
    text: "Excellent commitment and creativity. The attention to detail and fresh perspective brings new life to every project we collaborate on.",
    rating: 4,
  },
  {
    name: "Marcus Johnson",
    role: "Project Manager",
    text: "Reliable and punctual in every project. A true professional who consistently delivers outstanding results on time.",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    role: "Marketing Specialist",
    text: "An amazing communicator who always keeps the team informed. Her ability to connect with clients is unmatched.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    text: "Brings incredible data insights to every project. His analytical skills and attention to detail make all the difference.",
    rating: 5,
  },
  {
    name: "Isabella Martinez",
    role: "Content Strategist",
    text: "An extraordinary thinker who knows how to capture the essence of our brand in every piece of content.",
    rating: 5,
  },
  {
    name: "William Taylor",
    role: "Full-Stack Developer",
    text: "A quick problem solver who always finds efficient and scalable solutions. A great team player.",
    rating: 4,
  },
  {
    name: "Ava Wilson",
    role: "Graphic Designer",
    text: "Her designs are always fresh and creative, perfectly capturing the essence of every project.",
    rating: 5,
  },
  {
    name: "James White",
    role: "DevOps Engineer",
    text: "Has a knack for making our systems run smoothly. A key player in maintaining our infrastructure.",
    rating: 4,
  },
  {
    name: "Olivia Turner",
    role: "SEO Specialist",
    text: "Consistently delivers exceptional results in improving our online presence and driving organic traffic.",
    rating: 5,
  },
  {
    name: "Ethan Miller",
    role: "Product Manager",
    text: "Keeps the team aligned and focused on our goals. A true leader who inspires everyone to perform their best.",
    rating: 5,
  },
];

// Image data
const images = [
  Testimonials1,
  Testimonials2,
  Testimonials3,
  Testimonials4,
  Testimonials5,
  Testimonials6,
  Testimonials7,
  Testimonials8,
  Testimonials9,
  Testimonials10,
  Testimonials11,
];

const RadialIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const totalTestimonials = testimonials.length;

  // Intersection Observer for visibility animation
  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  // Handle image click
  const handleImageClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Handle navigation buttons
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? totalTestimonials - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1));
  };

  // Circle image indices (excluding active image)
  const circleImageIndices = images
    .slice(0, totalTestimonials)
    .map((_, i) => i)
    .filter((i) => i !== activeIndex);

  // Angle per image for circular arrangement
  const anglePerImage = 360 / circleImageIndices.length;

  // Safeguard against undefined testimonials
  const activeTestimonial = testimonials[activeIndex] || {
    name: "Anonymous",
    role: "Unknown Role",
    text: "No testimonial available.",
    rating: 0,
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-200">
      <Card className="grid grid-cols-1 md:grid-cols-5 md:gap-6 max-w-screen-xl mx-auto p-6 md:p-8 border-none shadow-none items-center min-h-screen py-20 md:min-h-[90vh] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
        {/* Circular Image Carousel */}
        <CardContent className="col-span-2 flex justify-center items-center relative h-[30rem] md:h-[22rem]">
          <div
            ref={containerRef}
            className={`relative w-full flex justify-center items-center transition-transform duration-700 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          >
            {images.slice(0, totalTestimonials).map((image, index) => {
              const isActive = index === activeIndex;
              let transform = "none";

              if (!isActive) {
                const idx = circleImageIndices.indexOf(index);
                const angle = anglePerImage * idx;
                transform = `rotate(${angle}deg) translateX(${
                  isVisible ? "12rem" : "0rem"
                }) rotate(-${angle}deg)`;
              }

              return (
                <div
                  key={index}
                  style={{
                    scale: "0.9",
                    position: "absolute",
                    width: isActive ? "9rem" : "6rem",
                    height: isActive ? "9rem" : "6rem",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.5s ease",
                    transform,
                    zIndex: isActive ? 10 : 1,
                    cursor: isActive ? "default" : "pointer",
                  }}
                  onClick={() => !isActive && handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </CardContent>

        {/* Testimonial Content */}
        <CardContent className="col-span-3 relative flex flex-col justify-between items-center md:items-start text-center md:text-left p-2 md:p-6">
          <WordPullUp
            words="Alumni Testimonials"
            className="text-4xl text-mainBlue md:text-5xl font-bold mt-8 mb-0 md:mb-6 p-6 font-serif"
          />
          <div className="p-6 rounded-md flex-grow w-full max-w-2xl mx-auto md:mx-0">
            <div className="flex justify-center md:justify-start items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < activeTestimonial.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              {activeTestimonial.text}
            </p>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {activeTestimonial.name}
              </p>
              <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
            </div>
          </div>
          <div className="absolute bottom-[-2rem] md:bottom-4 md:right-4 justify-center md:justify-end w-full flex gap-4">
            <Button
              size="icon"
              onClick={handlePrevious}
              className="rounded-full bg-red-600"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              size="icon"
              onClick={handleNext}
              className="rounded-full bg-red-600"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RadialIcons;
