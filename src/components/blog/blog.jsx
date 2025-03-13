"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("blog-section")?.offsetTop || 0;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    // Set visible immediately if at top of page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const blogPosts = [
    {
      id: 1,
      title: "How to grow your profit through systematic investment",
      description:
        "This blog explores the principles and practices of disciplined investment approaches that can enhance your financial returns.",
      image: "https://ssim.ac.in/wp-content/uploads/pgdm1.jpg",
      imageAlt: "Construction worker using a drill on a brick wall",
      author: {
        name: "Alexa Kimberly",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AK",
      },
      date: "Mar 26, 2024",
      readTime: "5 min read",
      category: "Finance",
    },
    {
      id: 2,
      title: "Tile Renovation Services: Transforming Your Space with Expert",
      description:
        "This blog explores how expert tile renovation services can breathe new life into kitchens, bathrooms, floors, and more.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2023/03/7U5A9291-Small-jpg.webp",
      imageAlt: "Person installing floor tiles",
      author: {
        name: "Emily Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EJ",
      },
      date: "Mar 26, 2024",
      readTime: "4 min read",
      category: "Home Improvement",
    },
  ];

  return (
    <section
      id="blog-section"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-mainBlue inline-block">
            Our recent blogs
          </h2>
          <div className="w-20 h-1 bg-mainBlue mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Discover insights and knowledge from our expert contributors on
            topics that matter to you.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="group bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image container - Fixed the overflow issue */}
                  <div className="md:w-1/2 relative overflow-hidden">
                    <div className="aspect-video md:h-full">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-mainBlue dark:group-hover:text-mainBlue transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-indigo-100 dark:border-gray-700">
                          <AvatarImage
                            src={post.author.avatar}
                            alt={post.author.name}
                          />
                          <AvatarFallback className="bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-300">
                            {post.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{post.author.name}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        behavior: "smooth";
                      }}
                      className="mt-auto"
                    >
                      <Button
                        className="bg-red-600 hover:bg-red-500 text-white px-6 transition-all duration-300 overflow-hidden group-hover:pl-7 group-hover:pr-9"
                        aria-label={`Read more about ${post.title}`}
                      >
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { useState } from "react";
// import Ramana from "../../assets/faculty&research/faculty/Dr. Ramana Rao.webp";
// import chandra from "../../assets/faculty&research/faculty/SF Chandra.webp";
// import Thirumal from "../../assets/faculty&research/faculty/THIRUMALREDDY.webp";
// import DrArij from "../../assets/faculty&research/faculty/DR Arijit.webp";

// export default function BoardOfGovernors() {
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Smt. Arathy Sampathy",
//       role: "Chairperson",
//       description:
//         "Leading SSIM's vision and strategic direction with dedication and expertise.",
//       image:
//         "https://ssim.ac.in/wp-content/uploads/pgdm1.jpg",
//     },
//     {
//       id: 2,
//       name: "Dr. Sailesh Sampathy",
//       role: "Vice Chairman",
//       description: "Driving innovation and academic excellence at SSIM.",
//       image:
//         "https://ssim.ac.in/wp-content/uploads/2023/03/7U5A9291-Small-jpg.webp",
//     },
//   ];

//   return (
//     <section className="container mx-auto px-4 py-16">
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-[2.5rem] font-bold text-mainBlue mb-4 tracking-tight">
//           Our Blog
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:gap-8 gap-4 max-w-7xl mx-auto mb-12">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={member.id}
//             className="grid grid-cols-12 items-start gap-8 group p-4 rounded-lg bg-gray-100"
//             initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             onHoverStart={() => setHoveredMember(member.id)}
//             onHoverEnd={() => setHoveredMember(null)}
//           >
//             <div className={`col-span-12 sm:col-span-4 relative w-full h-full mx-auto sm:mx-0 overflow-hidden rounded-lg ${
//               index % 2 === 0 ? 'sm:order-first' : 'sm:order-last'
//             }`}>
//               <motion.img
//                 src={member.image}
//                 alt={`${member.name} - ${member.role}`}
//                 className="w-full h-full object-cover"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//             <div className={`col-span-12 sm:col-span-8 flex flex-col text-center sm:text-left justify-center ${
//               index % 2 === 0 ? 'sm:order-last' : 'sm:order-first'
//             }`}>
//               <motion.div
//                 initial={false}
//                 animate={{ y: hoveredMember === member.id ? -2 : 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <h3 className="text-xl font-semibold text-zinc-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-indigo-600 font-medium">{member.role}</p>
//                 <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
//                   {member.description}
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
