import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WordPullUp from "@/components/ui/word-pull-up";
import Testimonials1 from "../assets/user_images/aditya.jpg";
import Testimonials2 from "../assets/user_images/daniaskhata.jpg";
import Testimonials3 from "../assets/user_images/Itha.jpg";
import Testimonials4 from "../assets/user_images/jaideep.jpg";
import Testimonials5 from "../assets/user_images/niraj.jpg";
import Testimonials6 from "../assets/user_images/Parameshwar.jpg";
import Testimonials7 from "../assets/user_images/swapnil.jpg";
import Testimonials8 from "../assets/user_images/Umesh.jpeg";
import Testimonials9 from "../assets/user_images/Ankit.jpeg";
import Testimonials10 from "../assets/user_images/Venkatesh.jpeg";
import Testimonials11 from "../assets/user_images/women4.jpg";
import goc from "../assets/user_images/goc.png";
import jpmc from "../assets/Home/jpmc-logo.svg";
import naukri from "../assets/Home/naukri.svg";
import microsoft from "../assets/Home/microsoft.png";
import prodapt from "../assets/Home/prodapt.svg";
import sbi from "../assets/Home/SBI_Logo.png";
import citi from "../assets/Home/citi-logo.svg";
import cognizant from "../assets/Home/cognizant.svg";
import dabur from "../assets/Home/dabur.png";
import innova from "../assets/Home/innova-logo.svg";



// Testimonials data
const testimonials = [
  {
    name: "Aditya Datta ",
    role: "Executive Director",
    company:
      jpmc,
    text: "Inspiring leadership qualities. Always pushes the team forward with innovative solutions and creative problem-solving approaches.",
    rating: 5,
  },
  {
    name: "Akshata Dani",
    role: "Technical Writer Specialist",
    company: goc,
    text: "Excellent commitment and creativity. The attention to detail and fresh perspective brings new life to every project we collaborate on.",
    rating: 4,
  },
  {
    name: "Itha Lakshmipathi",
    role: "AVP & Global Head - HR",
    company: prodapt,
    text: "Reliable and punctual in every project. A true professional who consistently delivers outstanding results on time.",
    rating: 5,
  },
  {
    name: "Jaideep Avasarala",
    role: "Talent Acquisition Leader",
    company:
      microsoft,
    text: "An amazing communicator who always keeps the team informed. Her ability to connect with clients is unmatched.",
    rating: 4,
  },
  {
    name: "Niraj Kumar Rana",
    role: "EVP & Head of Sales",
    company:
      naukri,
    text: "Brings incredible data insights to every project. His analytical skills and attention to detail make all the difference.",
    rating: 5,
  },
  {
    name: "Parameshwar N",
    role: "Vice-President Customer Engagement",
    company:
      sbi,
    text: "An extraordinary thinker who knows how to capture the essence of our brand in every piece of content.",
    rating: 5,
  },
  {
    name: "Swapnil Bhele",
    role: "Assistsnt Vice President",
    company: citi,
    text: "A quick problem solver who always finds efficient and scalable solutions. A great team player.",
    rating: 4,
  },
  {
    name: "Umesh Golecha",
    role: "Director",
    company:
      innova,
    text: "Her designs are always fresh and creative, perfectly capturing the essence of every project.",
    rating: 5,
  },
  {
    name: "Ankit Bhadauriya",
    role: "National Key Account Manager",
    company:
      dabur,
    text: "Has a knack for making our systems run smoothly. A key player in maintaining our infrastructure.",
    rating: 4,
  },
  {
    name: "Venkatesh Dixit",
    role: "Presales Consultant",
    company: cognizant,
    text: "Consistently delivers exceptional results in improving our online presence and driving organic traffic.",
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
];

const RadialIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const totalTestimonials = testimonials.length;

  // Auto-change testimonial effect
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1));
          setIsAnimating(false);
        }, 500);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isHovered, totalTestimonials]);

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

  // Handle image click with animation
  const handleImageClick = (index) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Handle navigation buttons with animation
  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? totalTestimonials - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
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
    <div className="bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
      <WordPullUp
        words="Alumni Testimonials"
        className="text-4xl block md:hidden md:text-5xl font-bold tracking-tight text-mainBlue text-center sm:text-left pt-12 mb-0"
      />
      <Card 
        className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-6 max-w-screen-xl mx-auto p-6 md:p-8 border-none shadow-none items-center min-h-screen pb-20 md:min-h-[90vh] bg-inherit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Circular Image Carousel */}
        <CardContent className="col-span-2 flex justify-center items-center relative h-[30rem] md:h-[22rem]">
          <div
            ref={containerRef}
            className={`relative max-w- w-full flex justify-center items-center transition-transform duration-700 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          >
            {images.slice(0, totalTestimonials).map((image, index) => {
              const isActive = index === activeIndex;
              let transform = "none";

              if (!isActive) {
                const idx = circleImageIndices.indexOf(index);
                const angle = anglePerImage * idx;
                // Get window width for responsive transform
                const getTranslateDistance = () => {
                  const width = window.innerWidth;
                  if (width < 370) return "9.5rem";
                  if (width < 640) return "10rem"; // sm
                  if (width > 640) return "12rem";
                };

                transform = `rotate(${angle}deg) translateX(${
                  isVisible ? getTranslateDistance() : "0rem"
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
        <CardContent className="col-span-3 relative flex flex-col justify-between items-center md:items-start text-center md:text-left p-0 md:p-6">
          <WordPullUp
            words="Alumni Testimonials"
            className="text-4xl hidden md:block md:text-5xl font-bold tracking-tight text-mainBlue sm:text-left mt-8 mb-0 md:mb-6 pl-6"
          />
          <div 
            className={`p-0 pb-6 sm:p-6 rounded-md flex-grow w-full max-w-full sm:max-w-2xl mx-auto md:mx-0 transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
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
              <img
                src={activeTestimonial.company}
                alt="Company Logo"
                className="mt-5 h-10"
              />
            </div>
          </div>
          <div className="absolute bottom-[-2rem] md:bottom-4 md:right-4 justify-center md:justify-end w-full flex gap-4">
            <Button
              size="icon"
              onClick={handlePrevious}
              className="rounded-full bg-red-600 hover:bg-red-600/80"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              size="icon"
              onClick={handleNext}
              className="rounded-full bg-red-600 hover:bg-red-600/80"
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
