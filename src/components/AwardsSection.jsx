/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const awards = [
  {
    rank: "A++",
    category: "Best B-Schools",
    organization: "Business India",
    year: "2024",
  },
  {
    rank: "21",
    category: "Top Private Standalone B-school",
    organization: "Outlook",
    year: "2024",
  },
  {
    rank: "15",
    category: "Top leading B-school of Super Excellence",
    organization: "CSR",
    year: "2024",
  },
  {
    rank: "28",
    category: "Best Private B-school",
    organization: "IIRF",
    year: "2023",
  },
];

const AwardCard = ({ award }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const rankNumber = parseInt(award.rank) || 100;
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= rankNumber) {
          clearInterval(timer);
          return rankNumber;
        }
        return prevCount + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [award.rank]);

  return (
    <motion.div
      className="bg-gradient-to-br from-white via-white to-blue-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 border-2 border-blue-100"
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-gradient-to-br from-amber-100 to-yellow-200 p-4 rounded-2xl shadow-lg shadow-yellow-200/50">
        <Award className="w-12 h-12 text-amber-600" />
      </div>
      <div className="text-6xl font-extrabold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
        {award.rank === "A++" ? award.rank : count}
        <span className="text-lg font-semibold align-top bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
          {award.rank !== "A++" && "th"}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 px-4 leading-tight">
        {award.category}
      </h3>
      <div className="flex items-center space-x-3 text-base">
        <span className="font-semibold text-blue-800">
          {award.organization}
        </span>
        <span className="text-blue-400">•</span>
        <span className="text-blue-600">{award.year}</span>
      </div>
    </motion.div>
  );
};

export default function EnhancedAwardsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-100 via-white to-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6 bg-gradient-to-r from-blue-100 to-amber-100 px-6 py-2 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-900 to-amber-700 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SSIM All India Rankings
          </motion.h2>
          <motion.p
            className="text-xl text-blue-600 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Setting New Standards in Business Education Excellence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>

        <motion.div
          className="flex justify-center items-center mt-20 space-x-4 text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-100 py-6 px-10 rounded-2xl mx-auto w-fit shadow-lg shadow-amber-100/50"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgb(251 191 36 / 0.1)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Star className="w-8 h-8 fill-current" />
          <p className="text-xl font-bold">
            Consistently Ranked Among Top B-Schools in India
          </p>
          <Star className="w-8 h-8 fill-current" />
        </motion.div>
      </div>
    </section>
  );
}
