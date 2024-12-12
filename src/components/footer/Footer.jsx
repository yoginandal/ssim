import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/ssimlogo.webp";

export default function Footer() {
  const footerSections = [
    {
      label: "Useful Links",
      items: [
        { name: "About Us", path: "/about-us" },
        { name: "Rankings & Awards", path: "/rankings-awards" },
        { name: "Accreditations", path: "/accreditations" },
        { name: "Events", path: "/events" },
        { name: "Media", path: "/media" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "AICTE Feedback", path: "/aicte-feedback" },
        { name: "AICTE Approvals", path: "/aicte-approvals" },
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
        { name: "Siva Sivani Institute of Management", path: "/ssim" },
        { name: "Siva Sivani Degree College", path: "/degree-college" },
        { name: "Siva Sivani Junior College", path: "/junior-college" },
        { name: "Siva Sivani High School", path: "/high-school" },
      ],
    },
  ];

  const socialIcons = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-gray-300 pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link to="/" className="block mb-6">
              <img src={logo} alt="SSIM Logo" className="h-24" />
              <p className="text-lg mt-2">
                SIVA SIVANI INSTITUTE OF MANAGEMENT
              </p>
              <p className="text-lg font-semibold">33 Years</p>
            </Link>

            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {socialIcons.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-600"
                >
                  <platform.icon size={20} />
                </a>
              ))}
            </div>

            <div className="mb-6">
              <p className="font-bold text-lg mb-2">
                24/7 Women Helpline Number
              </p>
              <a
                href="tel:9133305062"
                className="bg-blue-800 text-white px-4 py-2 rounded inline-block"
              >
                91333 05062
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="text-center md:text-left">
                <h3 className="text-blue-800 font-bold mb-4 text-lg">
                  {section.label}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-gray-600 hover:text-blue-800 text-lg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 py-4 flex justify-center md:justify-start items-center">
          <p className="text-gray-600  text-lg">Copyright © SSIM 2024</p>
        </div>
      </div>
    </footer>
  );
}
