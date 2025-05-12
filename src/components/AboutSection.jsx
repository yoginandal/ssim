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
  BookCheck,
  Handshake,
  BrainCircuit,
} from "lucide-react";
import WordPullUp from "./ui/word-pull-up";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stats = [
  {
    icon: <Calendar className="w-6 h-6" />,
    value: "30+",
    label: "Years of Excellence",
    description: "Academic excellence since 1992",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    value: "350+",
    label: "Corporate",
    description: "Partners",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    value: "6500+",
    label: "Alumni",
    description: "Network",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "₹90000",
    label: "Merit",
    description: "Scholarship",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    value: "50+",
    label: "New Age",
    description: "Specializations",
  },
  {
    icon: <BookCheck className="w-6 h-6" />,
    value: "9",
    label: "Value Added",
    description: "Certification Programs",
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
                <WordPullUp
                  words="Top Management Institute in Hyderabad"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-red-600 text-left mt-8 mb-0 md:mb-6"
                />
                <div className="w-32 h-1.5 bg-red-600/80 rounded-none" />
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Located in the heart of Hyderabad and Secunderabad, Siva
                  Sivani Institute of Management (SSIM) is a{" "}
                  <strong>
                    premier institution with over three decades of excellence
                  </strong>{" "}
                  in management education. Renowned for its{" "}
                  <strong>strong ethical foundation</strong>, this{" "}
                  <strong>SAQS, AIU, NBA, NAAC and AICTE accredited institution</strong>{" "}
                  delivers industry-relevant learning through an{" "}
                  <strong>
                    innovative curriculum and experienced faculty blending
                    academic and corporate insights
                  </strong>
                  .
                </p>

                <p className="text-lg leading-relaxed">
                  Recognized as an{" "}
                  <strong>
                    A<sup>+++</sup> B-School by Business India (2024)
                  </strong>
                  , SSIM ranks{" "}
                  <strong>
                    21st among private standalone B-Schools in India (Outlook
                    2024) and 2nd in Telangana
                  </strong>{" "}
                  (Outlook, CSR, and GHRDC Times 2024). Its{" "}
                  <strong>
                    vibrant, extremely qualified, and talented alumni network
                    spans across the globe
                  </strong>
                  , fostering valuable professional connections and success
                  stories across industries, domains, and profiles.
                </p>

                <p className="text-lg leading-relaxed">
                  With a focus on{" "}
                  <strong>holistic development of individuals</strong> with
                  special inclination towards{" "}
                  <strong>
                    critical decision-making bordering on creativity,
                    innovation, sustainability, ethics, and practical
                    applicability
                  </strong>
                  , SSIM continues to shape future-ready leaders year-on-year.
                </p>

                <p className="text-lg leading-relaxed">
                  Embark on your transformative journey with SSIM today and
                  unlock limitless opportunities of growth and success ready to
                  embrace you!!!
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-sm bg-white shadow-lg hover:shadow-xl transition-shadow ${
                      index === 2 ? "col-span-2" : ""
                    } sm:col-span-1`}
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
