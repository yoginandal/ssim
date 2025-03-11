import logo from "@/assets/ssimlogo.webp";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import aicteapprovals from "@/assets/footer/SSIM-AICTE-EOA-1992-2023.pdf";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      label: "Useful Links",
      items: [
        { name: "About Us", path: "/about/vision-mission" },
        { name: "Rankings & Awards", path: "/about/accreditations-rankings" },
        { name: "Accreditations", path: "/accreditations" },
        { name: "Events", path: "/students-life/life-at-ssim" },
        { name: "Media", path: "/media" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "AICTE Feedback", path: "https://www.aicte-india.org/feedback/" },
        { name: "AICTE Approvals", path: aicteapprovals },
      ],
    },
    {
      label: "Programs Offered",
      items: [
        { name: "PGDM", path: "/programs/pgdm" },
        { name: "PGDM - BIFS", path: "/programs/pgdm-bifs" },
        { name: "PGDM - BA", path: "/programs/pgdm-ba" },
        { name: "FPM", path: "/programs/fpm" },
        { name: "EFPM", path: "/programs/efpm" },
      ],
    },
    {
      label: "Committees",
      items: [
        { name: "Grievance Redressal Mechanism", path: "/grievance" },
        { name: "Internal Complaints Committee", path: "/complaints" },
      ],
    },
    {
      label: "S P Sampathys Siva Sivani Educational Society",
      items: [
        { name: "Siva Sivani Institute of Management", path: "/" },
        { name: "Siva Sivani Degree College", path: "https://ssdc.ac.in" },
        { name: "Siva Sivani Junior College", path: "https://ssjc.ac.in" },
        { name: "Siva Sivani High School", path: "https://ssjc.ac.in" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 pt-16 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Logo and Social Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="flex items-center gap-3 group"
                onClick={scrollToTop}
              >
                <img
                  src={logo}
                  alt="SSIM Logo"
                  className="h-14 cursor-pointer w-auto transition-transform group-hover:scale-105"
                />
              </Link>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    bgColor: "bg-blue-600",
                    label: "Facebook",
                    href: "https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/",
                  },
                  {
                    icon: Instagram,
                    bgColor: "bg-pink-600",
                    label: "Instagram",
                    href: "https://www.instagram.com/ssim_b_school/?hl=en",
                  },
                  {
                    icon: Twitter,
                    bgColor: "bg-sky-500",
                    label: "Twitter",
                    href: "https://x.com/SSIMHyderabad",
                  },
                  {
                    icon: Linkedin,
                    bgColor: "bg-blue-700",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/school/siva-sivani-institute-of-management/",
                  },
                  {
                    icon: Youtube,
                    bgColor: "bg-red-600",
                    label: "YouTube",
                    href: "https://www.youtube.com/@sivasivaniinstituteofmanag3545",
                  },
                ].map((social, index) => (
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      key={index}
                      size="icon"
                      className={`rounded-full transition-all hover:scale-110 text-white ${social.bgColor} hover:bg-${social.bgColor}/80`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-black font-medium mb-3">
                24/7 Women Helpline Number
              </p>
              <a href="tel:+919133305062">
              <Button className="gap-2 bg-mainBlue rounded-full hover:bg-mainBlue/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                91333 05062
              </Button>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="space-y-6">
                <h3 className="text-lg font-semibold text-mainBlue tracking-wide">
                  {section.label}
                </h3>
                <ul className="space-y-3 text-base">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.path.startsWith('https:') || item.path === aicteapprovals ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-[#293794] hover:text-primary transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={scrollToTop}
                          className="group inline-flex items-center gap-1 text-[#293794] hover:text-primary transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-[#293794]" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-base text-muted-foreground">
          <p className="text-mainBlue">
            Copyright © SSIM {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="hover:text-primary text-mainBlue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="hover:text-primary text-mainBlue transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import { Link } from "react-router-dom";
// import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

// export default function Footer() {
//   const footerSections = [
//     {
//       label: "Useful Links",
//       items: [
//         { name: "About Us", path: "/about-us" },
//         { name: "Rankings & Awards", path: "/rankings-awards" },
//         { name: "Accreditations", path: "/accreditations" },
//         { name: "Events", path: "/events" },
//         { name: "Media", path: "/media" },
//         { name: "Blog", path: "/blog" },
//         { name: "Careers", path: "/careers" },
//         { name: "AICTE Feedback", path: "/aicte-feedback" },
//         { name: "AICTE Approvals", path: "/aicte-approvals" },
//       ],
//     },
//     {
//       label: "Programs Offered",
//       items: [
//         { name: "PGDM", path: "/programs/pgdm" },
//         { name: "PGDM - BIFS", path: "/programs/pgdm-bifs" },
//         { name: "PGDM - BA", path: "/programs/pgdm-ba" },
//         { name: "FPM", path: "/programs/fpm" },
//         { name: "EFPM", path: "/programs/efpm" },
//       ],
//     },
//     {
//       label: "Committees",
//       items: [
//         { name: "Grievance Redressal Mechanism", path: "/grievance" },
//         { name: "Internal Complaints Committee", path: "/complaints" },
//       ],
//     },
//     {
//       label: "S P Sampathys Siva Sivani Educational Society",
//       items: [
//         { name: "Siva Sivani Institute of Management", path: "/ssim" },
//         { name: "Siva Sivani Degree College", path: "/degree-college" },
//         { name: "Siva Sivani Junior College", path: "/junior-college" },
//         { name: "Siva Sivani High School", path: "/high-school" },
//       ],
//     },
//   ];

//   const socialIcons = [
//     { name: "Facebook", icon: Facebook, href: "#" },
//     { name: "Instagram", icon: Instagram, href: "#" },
//     { name: "Twitter", icon: Twitter, href: "#" },
//     { name: "LinkedIn", icon: Linkedin, href: "#" },
//     { name: "YouTube", icon: Youtube, href: "#" },
//   ];

//   return (
//     <footer className="bg-gray-300 pt-10">
//       <div className="container max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
//           {/* Logo and Social Section */}
//           <div className="md:col-span-1 text-center md:text-left">
//             <Link to="/" className="block mb-6">
//               <img src={logo} alt="SSIM Logo" className="h-24" />
//               <p className="text-lg mt-2">
//                 SIVA SIVANI INSTITUTE OF MANAGEMENT
//               </p>
//               <p className="text-lg font-semibold">33 Years</p>
//             </Link>

//             <div className="flex justify-center md:justify-start gap-4 mb-6">
//               {socialIcons.map((platform) => (
//                 <a
//                   key={platform.name}
//                   href={platform.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-800 hover:text-blue-600"
//                 >
//                   <platform.icon size={20} />
//                 </a>
//               ))}
//             </div>

//             <div className="mb-6">
//               <p className="font-bold text-lg mb-2">
//                 24/7 Women Helpline Number
//               </p>
//               <a
//                 href="tel:9133305062"
//                 className="bg-blue-800 text-white px-4 py-2 rounded inline-block"
//               >
//                 91333 05062
//               </a>
//             </div>
//           </div>

//           {/* Footer Sections */}
//           <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//             {footerSections.map((section) => (
//               <div key={section.label} className="text-center md:text-left">
//                 <h3 className="text-blue-800 font-bold mb-4 text-xl">
//                   {section.label}
//                 </h3>
//                 <ul className="space-y-2">
//                   {section.items.map((item) => (
//                     <li key={item.name}>
//                       <Link
//                         to={item.path}
//                         className="text-gray-600 hover:text-blue-800 text-base"
//                       >
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t mt-8 py-4 flex justify-center md:justify-start items-center">
//           <p className="text-gray-600  text-lg">Copyright © SSIM 2024</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
