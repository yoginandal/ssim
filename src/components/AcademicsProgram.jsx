import { useState } from "react";
import { Users, GraduationCap, Landmark, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WordPullUp from "./ui/word-pull-up";

export default function AcademicPrograms() {
  const [activeVideo, setActiveVideo] = useState(0);

  const features = [
    {
      title: "PGDM",
      subtitle: "Triple Specialisation",
      icon: <GraduationCap className="w-6 h-6" />,
      description:
        "SSIM's two-year Post-Graduation Diploma in Management (PGDM) program is NBA accredited and uniquely designed to push our students to go beyond their boundaries to reach their aspirational careers. The two-year PGDM program will prepare our students with various cross-functional skills and life skills: Communication skills, Decision making, Leadership Skills, Problem-solving, Teamwork, Experiential Learning and several industry-relevant skills to face this VUCA world. These skills will help our students to achieve their career aspirations and learn to exhibit their best selves.",
      videoImg: "https://img.youtube.com/vi/3zQr7bXzYek/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=3zQr7bXzYek",
    },
    {
      title: "PGDM - BIFS",
      subtitle: "Banking, Insurance & Financial Services",
      icon: <Landmark className="w-6 h-6" />,
      description: `SSIM's two-year Post-Graduation Diploma in Management (PGDM) in Banking, Insurance, and Financial Services (BIFS) programme is accredited by NAAC (AICTE). PGDM-BIFS course provides students the opportunity to familiarize themselves with and learn "Value-Creation through Financial Analysis." The two-year PGDM programme equips students with concepts in Banking, Insurance, and Financial Services, along with life skills: Communication, Decision-Making, Leadership, Problem-Solving, Teamwork, and Experiential Learning. It also emphasizes industry-relevant skills to face today's VUCA world, preparing students for careers in both traditional and modern companies.`,
      videoImg: "https://img.youtube.com/vi/X1mXANADbCc/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=X1mXANADbCc",
    },
    {
      title: "PGDM - BA",
      subtitle: "Business Analytics",
      icon: <LineChart className="w-6 h-6" />,
      description: `SSIM's two-year full-time PGDM program in Business Analytics (BA) is a brand new programme added to meet the industry requirement. PGDM – BA at SSIM exemplifies the foresight in uniting Business management, Analytical Mathematics, Statistics and Computer science under one course. SSIM is the first institute, among the Telugu-speaking states, to offer a PGDM program exclusively on Business Analytics.`,
      videoImg: "https://img.youtube.com/vi/39XOoUacs9Q/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=39XOoUacs9Q",
    },
    {
      title: "FPM / EFPM",
      subtitle: "Fellow Program In Management",
      icon: <Users className="w-6 h-6" />,
      description: `SSIM's two-year full-time PGDM program in Business Analytics (BA) is a brand new programme added to meet the industry requirement. PGDM – BA at SSIM exemplifies the foresight in uniting Business management, Analytical Mathematics, Statistics and Computer science under one course. SSIM is the first institute, among the Telugu-speaking states, to offer a PGDM program exclusively on Business Analytics.`,
      videoImg: "https://img.youtube.com/vi/y-GwG39jVZc/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=y-GwG39jVZc",
    },
  ];

  return (
    <div className="container mx-auto pl-4 py-16">
      <div className="relative grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-10">
          <div className="ml-auto max-w-[550px] space-y-8">
            <WordPullUp
              words="Academic Programs"
              className="text-4xl md:text-5xl font-bold tracking-tight text-red-600 sm:text-left mt-8 mb-0 md:mb-6"
            />
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We train our students to master both the technical & management
              aspects of the business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-6 cursor-pointer group`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div
                    className={`w-full min-h-[120px] space-y-[6px] flex flex-col items-center justify-center shadow-2xl text-white flex-shrink-0 ${
                      activeVideo === index ? "bg-red-600" : "bg-mainBlue"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-1">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xs">{feature.title}</h3>
                    <p className="text-[10px] text-white text-center">
                      {feature.subtitle}
                    </p>
                  </div>
                  {/* <div>
                  <h3 className={`text-xl font-semibold transition-colors ${
                    activeVideo === index ? 'text-[#C62B28]' : 'group-hover:text-[#C62B28]'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div> */}
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {features[activeVideo].description}
            </p>
            <Button
              className="group gap-0 px-0 py-0 h-0 rounded-none mt-8"
              size="lg"
            >
              <div className="bg-red-600 mt-8 h-11 flex items-center px-4 hover:bg-red-700">
                Know More
              </div>
              <div className="bg-mainBlue mt-8 h-11 flex items-center px-4">
                <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
            <Button
              className="group gap-0 px-0 py-0 h-0 ml-5 sm:ml-8 rounded-none mt-8"
              size="lg"
            >
              <div className="bg-transparent text-black mt-8 h-11 flex items-center px-4 border border-black border-r-0">
                Apply Now
              </div>
              <div className="bg-red-600 mt-8 h-11 flex items-center px-4">
                <ArrowRight className="w-4 bg-red-600 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          </div>
        </div>

        <div
          className="relative cursor-pointer aspect-square bg-gray-900 overflow-hidden"
          onClick={() =>
            window.open(`${features[activeVideo].video}`, "_blank")
          }
        >
          <img
            className="w-full h-full object-cover"
            src={features[activeVideo].videoImg}
          />
          <div
            className="absolute cursor-pointer inset-0 w-full h-full flex sm:hidden items-center justify-center"
            onClick={() =>
              window.open(`${features[activeVideo].video}`, "_blank")
            }
          >
            <div className="relative">
              <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
              <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
              <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
            </div>
          </div>
        </div>
        <div
          className="absolute cursor-pointer top-1/2 left-[53%] transform -translate-x-[53%] -translate-y-1/2 w-fit h-fit hidden sm:flex items-center justify-center"
          onClick={() =>
            window.open(`${features[activeVideo].video}`, "_blank")
          }
        >
          <div className="relative">
            <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
            </div>
            <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
            <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
