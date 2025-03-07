import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

// Sample alumni data
const alumniData = [
  {
    id: 1,
    name: "Alex Johnson",
    batch: "2018",
    designation: "Senior Software Engineer",
    company: "Google",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },
  {
    id: 2,
    name: "Sarah Williams",
    batch: "2019",
    designation: "Product Manager",
    company: "Microsoft",
    linkedin: "https://linkedin.com/in/sarahwilliams",
  },
  {
    id: 3,
    name: "Michael Chen",
    batch: "2020",
    designation: "UX Designer",
    company: "Apple",
    linkedin: "https://linkedin.com/in/michaelchen",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    batch: "2018",
    designation: "Data Scientist",
    company: "Amazon",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
  {
    id: 5,
    name: "David Kim",
    batch: "2021",
    designation: "Frontend Developer",
    company: "Netflix",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    id: 6,
    name: "Jessica Lee",
    batch: "2020",
    designation: "DevOps Engineer",
    company: "Spotify",
    linkedin: "https://linkedin.com/in/jessicalee",
  },
  {
    id: 7,
    name: "Robert Taylor",
    batch: "2019",
    designation: "Backend Developer",
    company: "Airbnb",
    linkedin: "https://linkedin.com/in/roberttaylor",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    batch: "2021",
    designation: "AI Researcher",
    company: "OpenAI",
    linkedin: "https://linkedin.com/in/oliviamartinez",
  },
  // ... add more alumni data to test pagination
];

const AlumniSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 10);
    return () => clearTimeout(timer);
  }, []);

  // Filter alumni based on search term and selected year
  const filteredAlumni = alumniData.filter(
    (alumni) =>
      (selectedYear === "all" || alumni.batch === selectedYear) &&
      (alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.batch.includes(searchTerm))
  );

  // Calculate pagination
  const indexOfLastAlumni = currentPage * itemsPerPage;
  const indexOfFirstAlumni = indexOfLastAlumni - itemsPerPage;
  const currentAlumni = filteredAlumni.slice(
    indexOfFirstAlumni,
    indexOfLastAlumni
  );
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get unique years from alumni data
  const years = [...new Set(alumniData.map((alumni) => alumni.batch))].sort(
    (a, b) => b - a
  );

  // Generate pagination items
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5; // Adjust this number to show more or fewer page numbers

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      items.push(1);
      if (currentPage > 3) {
        items.push("...");
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        items.push(i);
      }
      if (currentPage < totalPages - 2) {
        items.push("...");
      }
      items.push(totalPages);
    }

    return items;
  };

  return (
    <div className="container md:max-w-7xl mx-auto px-4 py-12 sm:py-20">
      <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center text-primary">
        Our Alumni Network
      </h2>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
        <div className="relative w-full sm:w-1/2 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, company, or designation..."
            className="pl-10 h-12 rounded-lg"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <Select
          value={selectedYear}
          onValueChange={(value) => {
            setSelectedYear(value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-full sm:w-[180px] h-12 rounded-lg">
            <SelectValue placeholder="Filter by Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Alumni Table */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[800px]">
            {/* Header row */}
            <div className="grid grid-cols-[2fr_1fr_2fr_1.5fr_1fr] gap-4 mb-4 px-6 py-3 bg-mainBlue text-white rounded-lg font-medium text-sm">
              <div className="text-nowrap">Name</div>
              <div className="text-nowrap">Batch</div>
              <div className="text-nowrap">Designation</div>
              <div className="text-nowrap">Company</div>
              <div className="text-nowrap">LinkedIn</div>
            </div>

            {/* Alumni rows */}
            <div className="space-y-2">
              {currentAlumni.length > 0 ? (
                currentAlumni.map((alumni) => (
                  <Card
                    key={alumni.id}
                    className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white"
                  >
                    <div className="grid grid-cols-[2fr_1fr_2fr_1.5fr_1fr] gap-4 p-4 items-center">
                      <div className="font-medium text-nowrap overflow-hidden">
                        {alumni.name}
                      </div>
                      <div className="text-nowrap">
                        <Badge
                          variant="outline"
                          className="bg-primary/5 text-primary font-medium border-primary/20"
                        >
                          {alumni.batch}
                        </Badge>
                      </div>
                      <div className="text-muted-foreground text-nowrap overflow-hidden">
                        {alumni.designation}
                      </div>
                      <div className="text-nowrap overflow-hidden">
                        {alumni.company}
                      </div>
                      <div className="text-nowrap">
                        <a
                          href={alumni.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#0077B5] hover:text-primary/80 transition-colors"
                        >
                          <div className="bg-[#0077B5] h-9 w-9 flex items-center justify-center text-white rounded-full">
                            <Linkedin className="h-5 w-5" />
                          </div>
                          <span className="inline ml-2">Profile</span>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12 text-muted-foreground bg-muted/20 rounded-lg">
                  No alumni found matching your search criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      {filteredAlumni.length > itemsPerPage && (
        <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {generatePaginationItems().map((item, index) =>
            item === "..." ? (
              <span key={index} className="px-2">
                ...
              </span>
            ) : (
              <Button
                key={index}
                variant={currentPage === item ? "default" : "outline"}
                onClick={() => handlePageChange(item)}
                className={`h-10 w-10 rounded-full ${
                  currentPage === item ? "bg-red-600 text-white" : ""
                }`}
              >
                {item}
              </Button>
            )
          )}

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AlumniSection;
