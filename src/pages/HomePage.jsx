/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Testimonial from "@/components/Testimonial";
import LatestBlogsAndEvents from "@/components/LatestBlogs&Events";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import ImmLegacySection from "../components/ImmLegacySection";
import AcademicPrograms from "@/components/AcademicsProgram";
import HeroSlider from "@/components/HeroSlider";
import LiveProjects from "@/components/LiveProjects";
//import AwardsSection from "@/components/AwardsSection";
// import AnimatedBeamShowcase from "@/components/animated-beam-showcase";

import { Fragment } from "react";

const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <Fragment>
      <div>
        {[
          <HeroSlider key="hero-slider" />,
          <AboutSection key="about-section" />,
          <AcademicPrograms key="academic-programs" />,
          <ImmLegacySection key="imm-legacy-section" />,
          <Carousel key="carousel" />,
          <LatestBlogsAndEvents key="latest-blogs-and-events" />,
          <Testimonial key="testimonial" />,

          <LiveProjects key="live-projects" />,
        ].map((Section, index) => (
          <SectionWrapper key={index}>{Section}</SectionWrapper>
        ))}
      </div>
    </Fragment>
  );
}
