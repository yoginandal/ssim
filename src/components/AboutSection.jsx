import AboutSSIM from "@/assets/about_ssim/aboutssim.webp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <motion.section
      className="container mx-auto px-4 py-8 md:py-16"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 order-2 md:order-1">
          <div className="absolute inset-0 bg-red-600 w-1/4 md:w-1/3 h-full -z-10 rounded-l-lg" />
          <img
            src={AboutSSIM}
            alt="Students at SSIM"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 order-1 md:order-2">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-medium text-mainBlue mb-2">
              About SSIM
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 leading-tight">
              Top Management Institute in Hyderabad
            </h1>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            <p className="max-w-prose">
              Siva Sivani Institute of Management (SSIM) is an integral part of
              the Siva Sivani Group, whose presence in the field of education
              has crossed six decades. SSIM began operating as an autonomous
              institute in 1992 and is approved by the All India Council for
              Technical Education, Ministry of Human Resource Development,
              Government Of India, New Delhi.
            </p>

            <p className="max-w-prose">
              Since its inception, SSIM has a rich tradition of continuing
              academic excellence, and comprehensive personal growth and is
              recognized as Hyderabad&apos;s Top Management Institute.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
