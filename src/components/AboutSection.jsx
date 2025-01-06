import AboutSSIM from "@/assets/about_ssim/aboutssim.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  ArrowRight,
  Building2,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stats = [
  {
    icon: <Building2 className="w-6 h-6" />,
    value: "6+",
    label: "Decades of Excellence",
    description: "Leading education since 1960s",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    value: "1992",
    label: "Established",
    description: "As autonomous institute",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "#1",
    label: "in Hyderabad",
    description: "Top management institute",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(white,transparent_85%)] -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="lg:sticky lg:top-20 h-fit">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden border-0 shadow-2xl rounded-none">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      alt="SSIM Campus Life"
                      className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
                      src={AboutSSIM}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-red-600 animate-pulse text-white  backdrop-blur">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Excellence in Education
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:min-h-screen">
            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-medium text-mainBlue mb-2 border-0">
                  About SSIM
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-red-600">
                  Top Management Institute in Hyderabad
                </h2>
                <div className="w-32 h-1.5 bg-red-600/80 rounded-none" />
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Siva Sivani Institute of Management (SSIM) is an integral part
                  of the Siva Sivani Group, whose presence in the field of
                  education has crossed six decades. SSIM began operating as an
                  autonomous institute in 1992.
                </p>
                <p className="text-lg leading-relaxed">
                  Since its inception, SSIM has maintained a rich tradition of
                  continuing academic excellence, and comprehensive personal
                  growth and is recognized as Hyderabad&apos;s Top Management
                  Institute.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-sm bg-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="p-2 bg-red-600 w-fit rounded-lg text-white">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-mainBlue">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className="group gap-0 px-0 py-0 h-0 rounded-none mt-8"
                size="lg"
              >
                <div className="bg-red-600 mt-8 h-11 flex items-center pl-8 pr-4 hover:bg-red-700">
                  Learn More About SSIM
                </div>
                <div className="bg-mainBlue mt-8 h-11 flex items-center px-4">
                  <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
