/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";

export function MetricCard({ number, label, sublabel }) {
  const isLPA = label.includes("LPA"); // Check if the label indicates LPA
  const isCR = label.includes("CR"); // Check if the label indicates CR
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const duration = 2000; // total duration for the counter in milliseconds

  // Parse the number to handle different formats
  const endValue = parseFloat(number.replace(/[^\d.-]/g, "")); // Remove non-numeric characters

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            setCount(progress < 1 ? Math.floor(progress * endValue) : endValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const currentRef = ref.current; // Store ref.current in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the variable in cleanup
      }
    };
  }, [endValue]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center p-4"
    >
      <div className="text-2xl lg:text-4xl w-[50%] font-bold mb-2">
        {count}
        {isLPA && <span className="text-lg ml-1">LPA</span>}
        {isCR && <span className="text-lg ml-1">CR</span>}
        {number.includes("+") && <span className="text-lg ml-1">+</span>}
      </div>
      <div className="text-sm max-w-[150px]">
        {label}
        {sublabel && <div className="mt-1">{sublabel}</div>}
      </div>
    </div>
  );
}
