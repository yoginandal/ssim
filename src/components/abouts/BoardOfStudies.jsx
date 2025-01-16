import { motion } from "framer-motion";
import { useState } from "react";

export default function BoardOfStudies() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sailesh Sampathy",
      role: "Chairman",
      description: "Leading SSIM's Board of Studies with strategic vision and academic excellence.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/09/Dr_Sailesh_Sampathy.jpg"
    },
    {
      id: 2,
      name: "Dr. Kalakar",
      role: "Member",
      description: "Contributing expertise in academic planning and curriculum development.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Kalakar_PP-1.jpg"
    },
    {
      id: 3,
      name: "Dr. S.V. Raman Rao",
      role: "Member",
      description: "Providing valuable insights for academic growth and innovation.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_S.V._Raman_Rao.jpg"
    },
    {
      id: 4,
      name: "Dr. R.K. Mishra",
      role: "Member",
      description: "Guiding curriculum enhancement and academic standards.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/R_K_Mishra.jpg"
    },
    {
      id: 5,
      name: "Dr. Jagan Mohan Reddy",
      role: "Member",
      description: "Supporting academic excellence and program development.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Jagan_Mohan_Reddy.jpg"
    },
    {
      id: 6,
      name: "Dr. Choudhary Prasad",
      role: "Member",
      description: "Contributing to academic policy and quality assurance.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Choudhary_Prasad.jpg"
    },
    {
      id: 7,
      name: "Dr. Kumar Chunduri",
      role: "Member",
      description: "Advancing research initiatives and academic partnerships.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Kumar-Chunduri.jpg"
    },
    {
      id: 8,
      name: "Prof. Y. Lakshman Kumar",
      role: "Member", 
      description: "Fostering innovation in teaching methodologies.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Prof_Y_Lakshman-Kumar.jpg"
    },
    {
      id: 9,
      name: "Dr. Kishore NK",
      role: "Member",
      description: "Enhancing academic programs and student outcomes.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Kishore-NK.jpg"
    },
    {
      id: 10,
      name: "Sri Ravi Tanniru",
      role: "Member",
      description: "Supporting industry-academia collaboration.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Sri_Ravi_Tanniru.jpg"
    },
    {
      id: 11,
      name: "Dr. A. Sudhakar",
      role: "Member",
      description: "Driving academic excellence and innovation.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_A_Sudhakar-1.jpg"
    },
    {
      id: 12,
      name: "Dr. Anand S. Upadhyaya",
      role: "Member",
      description: "Contributing to curriculum development and academic planning.",
      image: "https://ssim.ac.in/wp-content/uploads/1.-Dr.-Anand-S-Upadhyaya.jpg"
    },
    {
      id: 13,
      name: "Dr. Durga Prasad M",
      role: "Member",
      description: "Advancing research and academic standards.",
      image: "https://ssim.ac.in/wp-content/uploads/2.-Dr.-Durga-Prasad-M.jpg"
    },
    {
      id: 14,
      name: "Dr. S. Anand Reddy",
      role: "Member",
      description: "Supporting program development and quality assurance.",
      image: "https://ssim.ac.in/wp-content/uploads/4.-Dr.-S.-Anand-Reddy.jpg"
    },
    {
      id: 15,
      name: "Prof. Mahananda Chalise",
      role: "Member",
      description: "Contributing to academic excellence and innovation.",
      image: "https://ssim.ac.in/wp-content/uploads/5.-Prof.-Mahananda-Chalise.jpg"
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[2.5rem] font-bold text-mainBlue mb-4 tracking-tight">
          Board Of Studies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 sm:gap-8 gap-4 max-w-7xl mx-auto mb-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="flex flex-col items-center sm:flex-row gap-8 group p-4 rounded-lg bg-gray-100"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onHoverStart={() => setHoveredMember(member.id)}
            onHoverEnd={() => setHoveredMember(null)}
          >
            <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
              <motion.img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col text-center sm:text-left justify-center">
              <motion.div
                initial={false}
                animate={{ y: hoveredMember === member.id ? -2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
