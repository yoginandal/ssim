import logo from "@/assets/ssimlogo.webp";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import Drawer from "./Drawer";

export default function BannerNav() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm block">
      <div className="container mx-auto flex justify-between sm:items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              alt="Indo Global Group of Colleges"
              className="h-12 sm:h-16 object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex justify-end sm:items-center space-x-4">
            <Link to="/iqac">IQAC</Link>
            <a
              href="https://maps.app.goo.gl/HhbEn3qSWAFCeuKR7"
              target="_blank"
              className="flex items-center"
            >
              <MapPin size={16} className="text-blue-800 mr-1" />
              <span>NH 44, Kompally,Secunderabad, Telangana - 500100.</span>
            </a>
            <a href="mailto:info@ssim.ac.in" className="flex items-center">
              <Mail size={16} className="text-blue-800 mr-1" />
              <span>info@ssim.ac.in</span>
            </a>

            <div className="flex items-center gap-1">
              <Phone size={16} className="text-blue-800 min-w-4 mr-1" />
              <span className="flex items-center">
                <a href="tel:+91-040-27165451" className="flex items-center">
                  040-2716 5451
                </a>
                <span className="text-gray-500">/</span>
                <a href="tel:+91-040-27165453" className="flex items-center">
                  53
                </a>
                <span className="text-gray-500">/</span>
                <a href="tel:+91-040-27165454" className="flex items-center">
                  54
                </a>
              </span>
            </div>
          </div>
          <Drawer className="text-black bg-black" />
        </div>
      </div>
    </div>
  );
}
