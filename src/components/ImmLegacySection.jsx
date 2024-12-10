import { motion } from "framer-motion";

const ImmLegacySection = () => {
  const stats = [
    {
      number: "55+",
      title: "YEARS",
      description: "of Academic Excellence & Innovations",
    },
    {
      number: "20000+",
      title: "Alumni",
      description: "Across the Globe",
    },
    {
      number: "300+",
      title: "Awards &",
      description: "Recognitions",
    },
    {
      number: "35+",
      title: "International",
      description: "Collaborations",
    },
  ];

  return (
    <section className="w-full py-16 bg-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-800/30 p-8 rounded-lg text-center hover:bg-purple-800/50 transition-all duration-300"
            >
              <h3 className="text-yellow-400 text-4xl font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-yellow-400 text-xl font-semibold mb-1">
                {stat.title}
              </p>
              <p className="text-white text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmLegacySection;
