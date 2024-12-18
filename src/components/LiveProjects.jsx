import IndustryMarquee from "./IndustryMarquee";

const LiveProjects = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="inline-block text-base font-semibold bg-blue-600 text-white dark:bg-blue-500 px-4 py-2 rounded-full tracking-wide uppercase">
              IIM India
            </h2>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Live Projects
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                International and National
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto leading-relaxed">
              Gain hands-on experience through our industry-integrated live
              projects, where students work directly with leading companies to
              solve real business challenges and implement innovative solutions.
            </p>
          </div>
          <IndustryMarquee />
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white dark:bg-gray-900 text-lg font-medium text-gray-900 dark:text-white">
                Empowering Future Leaders
              </span>
            </div>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our live projects provide invaluable exposure to real-world business
            scenarios, enabling students to apply classroom learning to
            practical situations while building strong industry connections and
            enhancing their professional portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
