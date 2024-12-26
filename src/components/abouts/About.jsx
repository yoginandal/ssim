import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="SSIM Campus"
          width={1600}
          height={800}
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-7xl">
              About SSIM
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light md:text-xl">
              Shaping Future Leaders in Management Education Since 1992
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            S.P Sampathy&apos;s Siva Sivani Institute of Management is promoted
            by the Siva Sivani Group of Educational Institutions, delivering
            excellence in management education for over four decades.
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col items-center p-6 text-center">
                <Calendar className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Established 1992</h3>
                <p className="text-muted-foreground">
                  Operating as an autonomous institute since inception
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col items-center p-6 text-center">
                <MapPin className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Prime Location</h3>
                <p className="text-muted-foreground">
                  Situated in Secunderabad, 6km from Bowenpally along NH-7
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col items-center p-6 text-center">
                <Award className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">AICTE Approved</h3>
                <p className="text-muted-foreground">
                  Recognized by Ministry of HRD, Government of India
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg bg-primary/5 p-8 md:p-12"
        >
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Our Vision
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            The founders started the institute with the vision of creating a
            premier management institute which significantly contributes to the
            corporate world and society. SSIM provides a perfect setting for
            delivering value-based management education with a focus on holistic
            development.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
