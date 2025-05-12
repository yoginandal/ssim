/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/hooks/research";
//import Testimonial from "@/components/Testimonial";
import LatestBlogsAndEvents from "@/components/LatestBlogs&Events";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import ImmLegacySection from "../components/ImmLegacySection";
import AcademicPrograms from "@/components/AcademicsProgram";
import HeroSlider from "@/components/HeroSlider";
import LiveProjects from "@/components/LiveProjects";
import RadialIcons from "@/components/RadialIcons";
import UpcomingEvents from "@/components/UpcomingEvents";
//import AwardsSection from "@/components/AwardsSection";
// import AnimatedBeamShowcase from "@/components/animated-beam-showcase";
import Events from "@/components/Events";
import { Fragment } from "react";
// import Page from "@/components/page"

const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const mobileSectionVariants = {
  hidden: { scale: 1, opacity: 1 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  const variants = isMobile ? mobileSectionVariants : sectionVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <>
      <div>
        {[
          <HeroSlider key="hero-slider" />,
          <AboutSection key="about-section" />,
          <AcademicPrograms key="academic-programs" />,
          // <ImmLegacySection key="imm-legacy-section" />,
          <Carousel key="carousel" />,
          <LatestBlogsAndEvents key="latest-blogs-and-events" />,
          <RadialIcons key="testimonial" />,
          <Events key="events" />,
          // <UpcomingEvents key="upcoming-events" />,
          <LiveProjects key="live-projects" />,
        ].map((Section, index) => (
          <SectionWrapper key={index}>{Section}</SectionWrapper>
        ))}
      </div>
    </>
  );
}
