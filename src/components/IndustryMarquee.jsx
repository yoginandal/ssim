/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

// Import images
import img1 from "../assets/live-projects/akalgroup.png";
import img2 from "../assets/live-projects/beneton.png";
import img3 from "../assets/live-projects/casback.png";
import img4 from "../assets/live-projects/chatter.png";
import img5 from "../assets/live-projects/hcl.png";
import img6 from "../assets/live-projects/hrtz.png";
import img7 from "../assets/live-projects/jio.png";
import img8 from "../assets/live-projects/mankind.png";
import img9 from "../assets/live-projects/panta.png";
import img10 from "../assets/live-projects/pathkind.png";
import img11 from "../assets/live-projects/pladis.png";
import img12 from "../assets/live-projects/reliance-digital.png";
import img13 from "../assets/live-projects/tata_tech2.png";

const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

const LogoCard = ({ img }) => {
  return (
    <div className="flex justify-center items-center p-6 mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 group">
      <img
        src={img}
        alt="Company logo"
        className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
      />
    </div>
  );
};

const IndustryMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-12 rounded-lg bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <Marquee className="py-8" gradientWidth={100} speed={40} pauseOnHover>
        {logos.map((logo, index) => (
          <LogoCard key={index} img={logo} />
        ))}
      </Marquee>
    </div>
  );
};

export default IndustryMarquee;
