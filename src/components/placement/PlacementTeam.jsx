import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, GraduationCap, Building2, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function PlacementCard({ photo, name, program, company, city, state }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-full mx-auto group"
    >
      <Card className="relative overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 -rotate-45 transform translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-800 rotate-45 transform -translate-x-16 translate-y-16" />

        <CardContent className="relative z-10 p-6">
          <div className="flex gap-12 p-5 items-start justify-center space-y-4">
            {/* Batch Badge */}

            {/* Photo with animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-48 h-48"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-slate-800 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="relative w-48 h-48 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`${name}'s photo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name and Program */}
            <div>
              <div className="text-left space-y-2">
                <h2 className="text-xl font-medium text-slate-800 tracking-tight uppercase">
                  {name}
                </h2>
                <p className="text-base font-normal text-slate-600 w-full mx-auto uppercase">
                  {program}
                </p>
              </div>

              {/* Company and Location */}
              <div className="w-full pt-4 border-t md:border-t-0 border-slate-200 space-y-2">
                <div className="flex justify- items-center space-x-2">
                  <Building2 className="w-4 h-4 text-red-600" />
                  <span className="text-lg font-semibold text-slate-700">
                    {company}
                  </span>
                </div>
                <div className="flex justify- items-center space-x-">
                  <MapPin className="w-4 h-4 text-slate-800" />
                  <span className="text-lg font-medium text-slate-600">
                    {city}, {state}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const placements = [
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "ANJALEENA SARAH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.datedoo.com/seo/resource/id/adedb356cbf8dd1f8d216773a3ee0823.jpg",
    name: "MD DANISH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.mountainviewphoto.com/wp-content/uploads/2015/12/headshots-slide.jpg",
    name: "EHTASAM",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://d2studios.net/wp-content/uploads/blog/2016/01/professional-portrait.jpg",
    name: "DILSHAD",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "ANJALEENA SARAH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.datedoo.com/seo/resource/id/adedb356cbf8dd1f8d216773a3ee0823.jpg",
    name: "MD DANISH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.mountainviewphoto.com/wp-content/uploads/2015/12/headshots-slide.jpg",
    name: "EHTASAM",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://d2studios.net/wp-content/uploads/blog/2016/01/professional-portrait.jpg",
    name: "DILSHAD",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "ANJALEENA SARAH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.datedoo.com/seo/resource/id/adedb356cbf8dd1f8d216773a3ee0823.jpg",
    name: "MD DANISH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.mountainviewphoto.com/wp-content/uploads/2015/12/headshots-slide.jpg",
    name: "EHTASAM",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://d2studios.net/wp-content/uploads/blog/2016/01/professional-portrait.jpg",
    name: "DILSHAD",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "ANJALEENA SARAH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.datedoo.com/seo/resource/id/adedb356cbf8dd1f8d216773a3ee0823.jpg",
    name: "MD DANISH",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://www.mountainviewphoto.com/wp-content/uploads/2015/12/headshots-slide.jpg",
    name: "EHTASAM",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  {
    photo:
      "https://d2studios.net/wp-content/uploads/blog/2016/01/professional-portrait.jpg",
    name: "DILSHAD",
    program: "BSC COMPUTER APPLICATIONS (TRIPLE MAIN)",
    company: "CGI",
    city: "Bangalore",
    state: "Karnataka",
    batch: "2023",
  },
  // Add more placement data here
];

export default function PlacementTeam() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("all");

  const filteredPlacements = placements.filter((placement) => {
    const matchesSearch =
      placement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      placement.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch =
      selectedBatch === "all" || placement.batch === selectedBatch;
    return matchesSearch && matchesBatch;
  });

  const batches = ["2023", "2022", "2021"];

  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-red-600 mr-2" />
            <h1 className="text-4xl font-bold text-slate-800">
              Student Placements
            </h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Celebrating the success of our graduates as they embark on their
            professional journeys with leading companies across India.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by name or company..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedBatch === "all" ? "default" : "outline"}
                onClick={() => setSelectedBatch("all")}
              >
                All Batches
              </Button>
              {batches.map((batch) => (
                <Button
                  key={batch}
                  variant={selectedBatch === batch ? "default" : "outline"}
                  onClick={() => setSelectedBatch(batch)}
                >
                  {batch}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Placement Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPlacements.map((placement, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PlacementCard {...placement} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPlacements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">
              No placements found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}