import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Heart,
  Bell,
  Camera,
  CheckCircle,
  Clock,
  Cloud,
  Coffee,
  Eye,
  Music,
} from "lucide-react";

const testimonials = [
  "John: 'Inspiring leadership qualities. Always pushes the team forward.'",
  "Emily: 'Excellent commitment and creativity, always brings fresh ideas.'",
  "Marcus: 'Reliable and punctual in every project. A true professional.'",
  "Sophie: 'Innovative photographer with an eye for detail. Highly recommend.'",
  "Liam: 'Always exceeds expectations with his thorough work and dedication.'",
  "Olivia: 'Expert in time management and efficiency, very organized.'",
  "Noah: 'Cloud computing enthusiast with vast knowledge and experience.'",
  "Ava: 'Coffee lover with great organizational skills, makes mornings better!'",
  "Ethan: 'Keen observer and analytical thinker, always spot-on with his insights.'",
  "Lucas: 'A master of digital media and music production. Great ear for detail.'",
  "Mia: 'Creative designer with innovative solutions and artistic flair.'",
];

const iconComponents = [
  ArrowUp,
  Heart,
  Bell,
  Camera,
  CheckCircle,
  Clock,
  Cloud,
  Coffee,
  Eye,
  Music,
];

const RadialIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

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

  const handleIconClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const circleIconIndices = iconComponents
    .map((_, i) => i)
    .filter((i) => i !== activeIndex);

  const anglePerIcon = 360 / circleIconIndices.length;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div
        ref={containerRef}
        className={`relative w-full md:w-1/3 transition-transform duration-700 ${
          isVisible ? "scale-100" : "scale-0"
        } flex justify-center items-center`}
        style={{ height: "20rem" }}
      >
        {iconComponents.map((Icon, index) => {
          const isActive = index === activeIndex;
          let transform = "none";

          if (!isActive) {
            // Position in a circle
            const idx = circleIconIndices.indexOf(index);
            const angle = anglePerIcon * idx;
            transform = `rotate(${angle}deg) translateX(${
              isVisible ? "8rem" : "0rem"
            }) rotate(-${angle}deg)`;
          }

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                width: "3rem",
                height: "3rem",
                background: "white",
                borderRadius: "50%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.5s ease",
                transform,
                zIndex: isActive ? 10 : 1,
                cursor: isActive ? "default" : "pointer",
              }}
              onClick={() => !isActive && handleIconClick(index)}
            >
              <Icon />
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-2/3 p-4 text-center">
        <p className="text-lg font-semibold">{testimonials[activeIndex]}</p>
      </div>
    </div>
  );
};

export default RadialIcons;
