/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import PulsatingButton from "@/components/ui/pulsating-button";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
// import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [iconsLoaded, setIconsLoaded] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // Animate icons one by one with a delay
    iconsLoaded.forEach((_, index) => {
      setTimeout(() => {
        setIconsLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 150); // 150ms delay between each icon
    });
  }, []);

  const socialIcons = [
    {
      icon: <Instagram className="w-4 h-4" />,
      url: "https://www.instagram.com/ssim_b_school/",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      url: "https://www.linkedin.com/school/siva-sivani-institute-of-management/",
    },
    {
      icon: <Youtube className="w-4 h-4" />,
      url: "https://www.youtube.com/@sivasivaniinstituteofmanag3545",
    },
    {
      icon: <Facebook className="w-4 h-4" />,
      url: "https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      url: "https://x.com/SSIMHyderabad",
    },
  ];

  return (
    <div className="px-5 sm:px-8 py-3 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
      <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
        {/* Social Links */}
        <div className="items-center gap-4 hidden sm:flex">
          <span className="text-gray-600">Follow us</span>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-50 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
                initial={{ y: -50, opacity: 0 }}
                animate={
                  iconsLoaded[index]
                    ? { y: 0, opacity: 1 }
                    : { y: -50, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="text-gray-600 justify-center items-center bg-slate-50 p-3 gap-2 rounded-full border shadow-sm hidden sm:flex">
          <div className="h-2 w-2 bg-pink-900 rounded-full animate-ping"></div>
          <marquee className="font-bold" behavior="scroll" direction="left">
            Welcome to our International Conference! Join us for an amazing
            experience.
          </marquee>
        </div>
        <div className="sm:hidden flex justify-end items-center space-x-4">
          <Link to="/iqac">IQAC</Link>
          <a href="mailto:info@ssim.ac.in" className="flex items-center">
            <Mail size={16} className="text-blue-800 mr-1" />
            <span>info@ssim.ac.in</span>
          </a>
        </div>
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600">
          {/* <PulsatingButton
            size="sm"
            className="text-xs bg-black hover:bg-black/80"
            pulseColor="#000"
          >
            International Conference
          </PulsatingButton> */}
          <a
            href="tel:040-27165451"
            // target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden block"
          >
            <Button
              size="sm"
              className="text-xs bg-black hover:bg-black/80"
              pulseColor="#000"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
          </a>
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            className="hidden sm:block"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="text-xs bg-black hover:bg-black/80"
              pulseColor="#000"
            >
              Apply Now
            </Button>
          </a>
          <a
            // href="https://payment.atomtech.in/payment/form/pay.action?mId=A95D13C110F64630E963122D5321258A"
            target="_blank"
            className="hidden sm:block"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="text-xs bg-black hover:bg-black/80"
              pulseColor="#000"
            >
              Pay Fee
            </Button>
          </a>
          {/* <Link to="/blog">
          <PulsatingButton
            size="sm"
            className="text-xs bg-black hover:bg-black/80"
            pulseColor="#000"
          >
           Blogs
          </PulsatingButton>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
