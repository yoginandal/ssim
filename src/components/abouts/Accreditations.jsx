import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineItems = [
  {
    year: 2023,
    title: "Top 50 Global Universities",
    description:
      "Ranked #42 in the Times Higher Education World University Rankings",
    icon: "🌍",
  },
  {
    year: 2022,
    title: "AACSB Accreditation Renewed",
    description: "Business School maintains prestigious AACSB accreditation",
    icon: "🏛️",
  },
  {
    year: 2021,
    title: "#1 in Innovation",
    description: "Recognized as the most innovative university in the nation",
    icon: "💡",
  },
  {
    year: 2020,
    title: "Carnegie R1 Classification",
    description: "Achieved 'Very High Research Activity' status",
    icon: "🔬",
  },
  {
    year: 2019,
    title: "Top 100 in Engineering",
    description: "Engineering programs ranked in the top 100 globally",
    icon: "⚙️",
  },
];

const TimelineItem = ({ year, title, description, icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center mb-24 ${
        isEven ? "sm:flex-row-reverse" : "sm:flex-row"
      } flex-row`}
    >
      <motion.div
        className={`hidden sm:block w-5/12 ${isEven ? "sm:pl-12" : "sm:pr-12"}`}
        initial={{ x: isEven ? 20 : -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
          <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-2xl mr-4 shadow-md">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-primary">{title}</h3>
            </div>
            <p className="text-muted-foreground text-lg">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="w-2/12 flex justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          type: "spring",
          stiffness: 150,
        }}
      >
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center z-10 shadow-xl">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
              <Badge variant="secondary" className="text-xl md:text-2xl font-bold bg-transparent">
                {year}
              </Badge>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 border-4 border-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
      <motion.div
        className="block sm:hidden w-10/12 pl-6"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl mr-4 shadow-md">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-primary">{title}</h3>
            </div>
            <p className="text-muted-foreground text-base">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default function Accreditations() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-12">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 md:mb-24 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
      >
        Accreditations & Rankings
      </motion.h2>
      <div className="relative">
        <motion.div
          className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-foreground to-primary"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div
          className="block sm:hidden absolute left-[8.33%] transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-foreground to-primary"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={item.year}
            {...item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
