import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export const footerData = {
  logo: {
    image: "/path-to-ssim-logo.webp",
    text: "SIVA SIVANI INSTITUTE OF MANAGEMENT",
    subtext: "33 Years",
  },

  socialLinks: [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ssim_b_school/?hl=en" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/SSIMHyderabad" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
  ],

  emergencyContact: {
    title: "24/7 Women Helpline Number",
    number: "91333 05062",
  },

  columns: [
    {
      title: "Useful Links",
      links: [
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
      title: "Programs Offered",
      links: [
        { name: "PGDM", path: "/programs/pgdm" },
        { name: "PGDM - BIFS", path: "/programs/pgdm-bifs" },
        { name: "PGDM - BA", path: "/programs/pgdm-ba" },
        { name: "FPM", path: "/programs/fpm" },
        { name: "EFPM", path: "/programs/efpm" },
      ],
    },
    {
      title: "Committees",
      links: [
        { name: "Grievance Redressal Mechanism", path: "/grievance" },
        { name: "Internal Complaints Committee", path: "/complaints" },
      ],
    },
    {
      title: "S P Sampathys Siva Sivani Educational Society",
      links: [
        { name: "Siva Sivani Institute of Management", path: "/ssim" },
        { name: "Siva Sivani Degree College", path: "/degree-college" },
        { name: "Siva Sivani Junior College", path: "/junior-college" },
        { name: "Siva Sivani High School", path: "/high-school" },
      ],
    },
  ],

  copyright: {
    text: "Copyright © SSIM 2024",
    whatsappText: "Admissions Assistant",
  },
};
