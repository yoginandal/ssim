import { Eye, MapPin, Target } from "lucide-react";

function VisionMission() {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Section */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="h-1 w-12 bg-teal-500"></div>
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>
            <div className="space-y-8">
              {/* Vision */}
              <div className="flex items-start group">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-50 text-teal-500 rounded-lg transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <Eye size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold mb-2">Vision</h4>
                  <p className="text-zinc-600">
                    To revolutionize the way people connect and collaborate,
                    creating meaningful experiences that transcend boundaries.
                  </p>
                </div>
              </div>
              {/* Missions */}
              <div className="flex items-start group">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-50 text-teal-500 rounded-lg transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold mb-2">Mission</h4>
                  <p className="text-zinc-600">
                    Empowering individuals and organizations through innovative
                    solutions that drive positive change and sustainable growth.
                  </p>
                </div>
              </div>
              {/* Goals */}
              <div className="flex items-start group">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-50 text-teal-500 rounded-lg transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <Target size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold mb-2">Goals</h4>
                  <p className="text-zinc-600">
                    To achieve measurable impact in our community while
                    maintaining the highest standards of excellence and
                    integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative w-full aspect-square max-w-[800px] mx-auto">
              {/* Top Image */}
              <div
                className="absolute w-[300px] h-[300px] bg-cover bg-center transform transition-transform hover:scale-105"
                style={{
                  top: "-1rem",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80)",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              ></div>
              {/* Left Image */}
              <div
                className="absolute w-[300px] h-[300px] bg-cover bg-center transform transition-transform hover:scale-105"
                style={{
                  top: "50%",
                  left: "-1rem",
                  transform: "translate(0, -50%)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80)",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              ></div>
              {/* Bottom Image */}
              <div
                className="absolute w-[300px] h-[300px] bg-cover bg-center transform transition-transform hover:scale-105"
                style={{
                  bottom: "-1rem",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80)",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              ></div>
              {/* Right Large Image */}
              <div
                className="absolute w-[300px] h-[300px] bg-cover bg-center transform transition-transform hover:scale-105"
                style={{
                  top: "50%",
                  right: "-1rem",
                  transform: "translate(0, -50%)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80)",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
