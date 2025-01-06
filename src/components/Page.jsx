// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   GraduationCap,
//   LineChart,
//   Landmark,
//   Users,
// } from "lucide-react";

// export default function AcademicPrograms() {
//   const [activeTab, setActiveTab] = useState("pgdm");
//   const contentRef = useRef(null);
//   const [fixedHeight, setFixedHeight] = useState(0);

//   const programs = [
//     {
//       id: "pgdm",
//       title: "PGDM",
//       subtitle: "Triple Specialisation",
//       icon: <GraduationCap className="w-5 h-5" />,
//       description: `SSIM's two-year Post-Graduation Diploma in Management (PGDM) program is NBA accredited and uniquely designed to push our students to go beyond their boundaries to reach their aspirational careers. The two-year PGDM program will prepare our students with various cross-functional skills and life skills: Communication skills, Decision making, Leadership Skills, Problem-solving, Teamwork, Experiential Learning and several industry-relevant skills to face this VUCA world. These skills will help our students to achieve their career aspirations and learn to exhibit their best selves.`,
//       videoId: "3zQr7bXzYek",
//     },
//     {
//       id: "pgdm-bifs",
//       title: "PGDM - BIFS",
//       subtitle: "Banking, Insurance & Financial Services",
//       icon: <Landmark className="w-5 h-5" />,
//       description: `SSIM's two-year Post-Graduation Diploma in Management (PGDM) in Banking, Insurance, and Financial Services (BIFS) programme is accredited by NAAC (AICTE). PGDM-BIFS course provides students the opportunity to familiarize themselves with and learn "Value-Creation through Financial Analysis." The two-year PGDM programme equips students with concepts in Banking, Insurance, and Financial Services, along with life skills: Communication, Decision-Making, Leadership, Problem-Solving, Teamwork, and Experiential Learning. It also emphasizes industry-relevant skills to face today's VUCA world, preparing students for careers in both traditional and modern companies.`,
//       videoId: "X1mXANADbCc",
//     },
//     {
//       id: "pgdm-ba",
//       title: "PGDM - BA",
//       subtitle: "Business Analytics",
//       icon: <LineChart className="w-5 h-5" />,
//       description: `SSIM's two-year full-time PGDM program in Business Analytics (BA) is a brand new programme added to meet the industry requirement. PGDM – BA at SSIM exemplifies the foresight in uniting Business management, Analytical Mathematics, Statistics and Computer science under one course. SSIM is the first institute, among the Telugu-speaking states, to offer a PGDM program exclusively on Business Analytics.`,
//       videoId: "39XOoUacs9Q",
//     },
//     {
//       id: "fpm-efpm",
//       title: "FPM / EFPM",
//       subtitle: "Fellow Program In Management",
//       icon: <Users className="w-5 h-5" />,
//       description: `Fellow Program in Management at SSIM is uniquely designed to nurture world-class researchers from academia and industry in the fields of management. We at SSIM, strive to bridge the gap between industry and academia through cutting-edge research. Our FPM suits individuals who are passionate towards teaching, researching and identifying solutions to real-life business problems with their research.`,
//       videoId: "y-GwG39jVZc",
//     },
//   ];

//   useEffect(() => {
//     const calculateFixedHeight = () => {
//       if (contentRef.current) {
//         const isMobile = window.innerWidth < 1024; // lg breakpoint
//         if (isMobile) {
//           setFixedHeight(200); // Fixed height for mobile
//         } else {
//           setFixedHeight(contentRef.current.offsetHeight); // Match RHS height on desktop
//         }
//       }
//     };

//     calculateFixedHeight();
//     window.addEventListener("resize", calculateFixedHeight);

//     return () => window.removeEventListener("resize", calculateFixedHeight);
//   }, [activeTab]); // Also recalculate when tab changes

//   return (
//     <motion.section
//       className="w-full py-12 bg-gradient-to-b from-white to-gray-50/50 flex justify-center items-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       exit={{ opacity: 0, y: 20 }}
//     >
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center space-y-4 text-center mb-8">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
//             Academic Programs
//           </h2>
//           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             We train our students to master both the technical & management
//             aspects of the business.
//           </p>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Left Side: Thumbnail with Play Button */}
//           <div className="order-2 lg:order-1 lg:w-full w-[90%] mx-auto">
//             <div
//               className="rounded-xl overflow-hidden relative mx-auto"
//               style={{
//                 height: `${fixedHeight}px`,
//                 maxHeight: "100%",
//               }}
//             >
//               {programs.map((program) => (
//                 <motion.div
//                   key={program.id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeTab === program.id ? 1 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   style={{
//                     display: activeTab === program.id ? "block" : "none",
//                     height: "100%",
//                   }}
//                 >
//                   <div
//                     className="relative w-full h-full cursor-pointer"
//                     onClick={() =>
//                       window.open(
//                         `https://www.youtube.com/watch?v=${program.videoId}`,
//                         "_blank"
//                       )
//                     }
//                   >
//                     {/* YouTube Thumbnail */}
//                     <img
//                       src={`https://img.youtube.com/vi/${program.videoId}/maxresdefault.jpg`}
//                       alt={`${program.title} Thumbnail`}
//                       className="w-full h-full object-cover"
//                     />
//                     {/* Play Button */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="w-6 h-6 text-red-600"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//           {/* Right Side: Tab Content */}
//           <div className="order-1 lg:order-2" ref={contentRef}>
//             <div className="w-full">
//               <div className="grid grid-cols-2 gap-4 bg-transparent h-auto p-0">
//                 {programs.map((program) => (
//                   <div
//                     key={program.id}
//                     onClick={() => setActiveTab(program.id)}
//                     className={`cursor-pointer relative h-auto flex flex-col items-center justify-center gap-1 p-2 rounded-lg border-2 transition-all bg-mainBlue text-white text-sm ${
//                       activeTab === program.id
//                         ? "border-red-600 shadow-lg bg-red-600"
//                         : "border-muted hover:border-primary/50"
//                     }`}
//                   >
//                     <div className="flex items-center justify-center mb-1">
//                       {program.icon}
//                     </div>
//                     <h3 className="font-semibold text-xs">{program.title}</h3>
//                     <p className="text-[10px] text-white">{program.subtitle}</p>
//                   </div>
//                 ))}
//               </div>
//               {programs.map((program) => (
//                 <div
//                   key={program.id}
//                   style={{
//                     display: activeTab === program.id ? "block" : "none",
//                   }}
//                 >
//                   <div className="mt-6 border-none bg-transparent">
//                     <div className="p-0">
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="flex flex-col items-start space-y-4"
//                       >
//                         <p className="text-gray-500 md:text-lg/relaxed text-center md:text-left">
//                           {program.description}
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center w-full">
//                           <div className="flex flex-row w-full justify-center md:justify-start gap-8">
//                             <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
//                               Know More
//                             </button>
//                             <button className="px-4 py-2 border-primary text-primary border rounded-lg flex items-center">
//                               Apply Now
//                               <ArrowRight className="ml-2 h-4 w-4" />
//                             </button>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
