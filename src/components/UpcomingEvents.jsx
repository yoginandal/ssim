import React from "react";
import WordPullUp from "./ui/word-pull-up";

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1541845157-a6d2d100c931",
    className: "",
    title: "Mountain Lake",
    description: "Serene mountain landscape with crystal clear water",
    date: "March 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e",
    className: "",
    title: "Forest Path",
    description: "Winding trail through ancient woods",
    date: "April 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1588117472013-59bb13edafec",
    className: "tall",
    title: "Waterfall",
    description: "Majestic waterfall in spring",
    date: "May 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1587588354456-ae376af71a25",
    className: "wide",
    title: "Coastal Sunset",
    description: "Beautiful evening by the ocean",
    date: "June 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1558980663-3685c1d673c4",
    className: "",
    title: "Mountain View",
    description: "Majestic mountain view",
    date: "July 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1588499756884-d72584d84df5",
    className: "tall",
    title: "Waterfall",
    description: "Majestic waterfall in autumn",
    date: "August 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1588492885706-b8917f06df77",
    className: "big",
    title: "Mountain Peak",
    description: "Sunset view of a mountain peak",
    date: "September 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1588247866001-68fa8c438dd7",
    className: "",
    title: "Forest Path",
    description: "Winding trail through ancient woods",
    date: "October 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311",
    className: "wide",
    title: "Coastal Sunset",
    description: "Beautiful evening by the ocean",
    date: "November 2024",
  },
  //   {
  //     src: "https://images.unsplash.com/photo-1572914857229-37bf6ee8101c",
  //     className: "big",
  //     title: "Mountain Peak",
  //     description: "Sunset view of a mountain peak",
  //     date: "December 2024",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12",
  //     className: "tall",
  //     title: "Waterfall",
  //     description: "Majestic waterfall in winter",
  //     date: "January 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1588414734732-660b07304ddb",
  //     className: "",
  //     title: "Mountain Lake",
  //     description: "Serene mountain landscape with crystal clear water",
  //     date: "February 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1588224575346-501f5880ef29",
  //     className: "",
  //     title: "Forest Path",
  //     description: "Winding trail through ancient woods",
  //     date: "March 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2",
  //     className: "",
  //     title: "Mountain View",
  //     description: "Majestic mountain view",
  //     date: "April 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1547234935-80c7145ec969",
  //     className: "",
  //     title: "Coastal Sunset",
  //     description: "Beautiful evening by the ocean",
  //     date: "May 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1588263823647-ce3546d42bfe",
  //     className: "wide",
  //     title: "Mountain Peak",
  //     description: "Sunset view of a mountain peak",
  //     date: "June 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63",
  //     className: "",
  //     title: "Mountain Lake",
  //     description: "Serene mountain landscape with crystal clear water",
  //     date: "July 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1587897773780-fe72528d5081",
  //     className: "",
  //     title: "Forest Path",
  //     description: "Winding trail through ancient woods",
  //     date: "August 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3",
  //     className: "wide",
  //     title: "Waterfall",
  //     description: "Majestic waterfall in spring",
  //     date: "September 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1587572236558-a3751c6d42c0",
  //     className: "",
  //     title: "Mountain View",
  //     description: "Majestic mountain view",
  //     date: "October 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1583542225715-473a32c9b0ef",
  //     className: "wide",
  //     title: "Coastal Sunset",
  //     description: "Beautiful evening by the ocean",
  //     date: "November 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1527928159272-7d012024eb74",
  //     className: "big",
  //     title: "Mountain Peak",
  //     description: "Sunset view of a mountain peak",
  //     date: "December 2025",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1553984840-b8cbc34f5215",
  //     className: "",
  //     title: "Mountain Lake",
  //     description: "Serene mountain landscape with crystal clear water",
  //     date: "January 2026",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1433446787703-42d5bf446876",
  //     className: "",
  //     title: "Forest Path",
  //     description: "Winding trail through ancient woods",
  //     date: "February 2026",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1541187714594-731deadcd16a",
  //     className: "big",
  //     title: "Mountain Peak",
  //     description: "Sunset view of a mountain peak",
  //     date: "March 2026",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9",
  //     className: "tall",
  //     title: "Waterfall",
  //     description: "Majestic waterfall in spring",
  //     date: "April 2026",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1421930866250-aa0594cea05c",
  //     className: "",
  //     title: "Mountain View",
  //     description: "Majestic mountain view",
  //     date: "May 2026",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1493306454986-c8877a09cbeb",
  //     className: "",
  //     title: "Coastal Sunset",
  //     description: "Beautiful evening by the ocean",
  //     date: "June 2026",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c",
  //     className: "wide",
  //     title: "Mountain Peak",
  //     description: "Sunset view of a mountain peak",
  //     date: "July 2026",
  //   },
];

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <WordPullUp
          words="Upcoming Events"
          className="text-4xl md:text-5xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
        />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore breathtaking landscapes and natural phenomena captured by
          talented photographers around the world.
        </p>
      </div>
      <div className="grid-wrapper">
        {imageData.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden ${image.className}`}
          >
            <img
              src={`${image.src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-300 
                        flex flex-col justify-end p-6"
            >
              <h3
                className="text-white font-bold text-xl transform translate-y-4 
                         group-hover:translate-y-0 transition-transform duration-300"
              >
                {image.title}
              </h3>
              <p
                className="text-white text-sm mt-2 transform translate-y-4 
                       group-hover:translate-y-0 transition-transform duration-300 delay-75"
              >
                {image.description}
              </p>
              <span
                className="text-white/80 text-xs mt-1 transform translate-y-4 
                          group-hover:translate-y-0 transition-transform duration-300 delay-100"
              >
                {image.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
