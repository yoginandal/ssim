/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";

export function PackageMetric({ lpa, companies, className = "" }) {
  const [countLPA, setCountLPA] = useState(0);
  const [countCompanies, setCountCompanies] = useState(0);
  const ref = useRef(null);
  const duration = 2000; // total duration for the counter in milliseconds
  const lpaEndValue = parseInt(lpa, 10);
  const companiesEndValue = parseInt(companies, 10);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Calculate the current value based on the progress
      setCountLPA(Math.floor(progress * lpaEndValue));
      setCountCompanies(companiesEndValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, lpaEndValue, companiesEndValue]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center text-center p-4 border-l first:border-l-0 border-black/20 ${className}`}
    >
      <div className="text-3xl font-bold mb-1">
        {countLPA}
        <span className="text-lg ml-1">LPA</span>
      </div>
      <div className="text-sm max-w-[150px]">
        Package Offered by
        <br />
        {countCompanies} Companies
      </div>
    </div>
  );
}
