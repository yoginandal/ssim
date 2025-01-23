/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

// Import images
import img1 from "../assets/placement-logos/asian-paints.png";
import img2 from "../assets/placement-logos/berkadia.png";
import img3 from "../assets/placement-logos/codeyoung.png";
import img4 from "../assets/placement-logos/deloitte.png";
import img5 from "../assets/placement-logos/fact.png";
import img6 from "../assets/placement-logos/godrej-jersey.png";
import img7 from "../assets/placement-logos/itc.png";
import img8 from "../assets/placement-logos/kpmg.png";
import img9 from "../assets/placement-logos/me-plus.png";
import img10 from "../assets/placement-logos/metrics.png";
import img11 from "../assets/placement-logos/nestle.png";
import img12 from "../assets/placement-logos/oxane.png";
import img13 from "../assets/placement-logos/profectus-capital.png";
import img14 from "../assets/placement-logos/zamoto.png";
import img15 from "../assets/placement-logos/zudio.png";

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
  img14,
  img15,
];

const LogoCard = ({ img }) => {
  return (
    <div className="flex justify-center items-center py-2 px-6 mx-4 bg-white dark:bg-gray-800 rounded-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 group">
      <img
        src={img}
        alt="Company logo"
        className="h-16 w-auto object-contain rounded-sm filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
      />
    </div>
  );
};

const IndustryMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 rounded-sm bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <Marquee className="py-8" gradientWidth={100} speed={100} pauseOnHover>
        {logos.map((logo, index) => (
          <LogoCard key={index} img={logo} />
        ))}
      </Marquee>
    </div>
  );
};

export default IndustryMarquee;
