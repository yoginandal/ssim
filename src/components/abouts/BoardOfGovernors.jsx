import { motion } from "framer-motion";
import { useState } from "react";
import Ramana from "../../assets/faculty&research/faculty/Dr. Ramana Rao.webp";
import chandra from "../../assets/faculty&research/faculty/SF Chandra.webp";
import Thirumal from "../../assets/faculty&research/faculty/THIRUMALREDDY.webp";
import DrArij from "../../assets/faculty&research/faculty/DR Arijit.webp";

export default function BoardOfGovernors() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Smt. Arathy Sampathy",
      role: "Chairperson",
      description:
        "Leading SSIM's vision and strategic direction with dedication and expertise.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/09/Smt_Arathy_Sampathy.jpg",
    },
    {
      id: 2,
      name: "Dr. Sailesh Sampathy",
      role: "Vice Chairman",
      description: "Driving innovation and academic excellence at SSIM.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/09/Dr_Sailesh_Sampathy.jpg",
    },
    {
      id: 3,
      name: "Dr. S.V. Ramana Rao",
      role: "Board Member",
      description:
        "Contributing valuable insights to SSIM's governance and development.",
      image: Ramana,
    },
    {
      id: 4,
      name: "Dr. Deepika",
      role: "Board Member",
      description:
        "Bringing expertise in academic leadership and management education.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Deepika-mam_pp.jpg",
    },
    {
      id: 5,
      name: "Dr. Kalakar",
      role: "Board Member",
      description: "Providing strategic guidance for institutional growth.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Kalakar_PP.jpg",
    },
    {
      id: 6,
      name: "Md. Masood Ahmed",
      role: "Board Member",
      description: "Supporting SSIM's mission with industry expertise.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Md_Masood_Ahmed.jpg",
    },
    {
      id: 7,
      name: "Dr. S.F. Chandrasekhar",
      role: "Board Member",
      description: "Guiding academic and administrative excellence.",
      image: chandra,
    },
    {
      id: 8,
      name: "Dr. Arijit Santikary",
      role: "Board Member",
      description: "Contributing to research and academic development.",
      image: DrArij,
    },
    {
      id: 9,
      name: "Dr. Harish",
      role: "Board Member",
      description: "Fostering innovation in management education.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Harish.jpg",
    },
    {
      id: 10,
      name: "Dr. V. Jayalakshmi",
      role: "Board Member",
      description: "Promoting excellence in teaching and research.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Dr.-V.Jayalakshmi_b.jpg",
    },
    {
      id: 11,
      name: "T. Thirumal Reddy",
      role: "Board Member",
      description: "Supporting institutional development and growth.",
      image: Thirumal,
    },
    {
      id: 12,
      name: "Board Member",
      role: "Advisory Member",
      description: "Contributing to SSIM's continued success and development.",
      image: "https://ssim.ac.in/wp-content/uploads/1517690112564.jpg",
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
          Board Of Governers
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
