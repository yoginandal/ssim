"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  LinkedinIcon,
  DownloadIcon,
  BuildingIcon,
  GraduationCapIcon,
  MapPinIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  TrendingUpIcon,
  UsersIcon,
  Building2Icon as BuildingOffice2Icon,
  PercentIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { studentsData } from "./placementData";

// Enhanced student data with year and salary

const years = Array.from(
  new Set(studentsData.map((student) => student.year))
).sort((a, b) => b - a);
const programs = Array.from(
  new Set(studentsData.map((student) => student.program))
);
const companies = Array.from(
  new Set(studentsData.map((student) => student.company))
);
const locations = Array.from(
  new Set(studentsData.map((student) => student.location))
);

export default function PlacementSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortConfig, setSortConfig] = useState(null);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalPlacements = studentsData.length;
    const totalSalary = studentsData.reduce(
      (acc, curr) => acc + Number(curr.salary.replace(/,/g, "")),
      0
    );
    const averageSalary = totalPlacements
      ? `${(totalSalary / totalPlacements)
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K`
      : "0K";
    const companiesHiring = new Set(studentsData.map((s) => s.company)).size;
    const placementRate = "92%"; // Ideally, calculate based on actual data

    return {
      totalPlacements,
      averageSalary,
      companiesHiring,
      placementRate,
    };
  }, []);

  const filteredStudents = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filtered = studentsData.filter((student) => {
      // Search term filter
      const searchFilter =
        normalizedSearchTerm === "" ||
        student.name.toLowerCase().includes(normalizedSearchTerm) ||
        student.company.toLowerCase().includes(normalizedSearchTerm) ||
        student.program.toLowerCase().includes(normalizedSearchTerm) ||
        student.location.toLowerCase().includes(normalizedSearchTerm) ||
        student.year.toString().includes(normalizedSearchTerm) ||
        student.salary.replace(/,/g, "").includes(normalizedSearchTerm);

      // Individual filters
      const yearFilter =
        selectedYear === "all" || student.year.toString() === selectedYear;
      const programFilter =
        selectedProgram === "all" || student.program === selectedProgram;
      const companyFilter =
        selectedCompany === "all" || student.company === selectedCompany;
      const locationFilter =
        selectedLocation === "all" || student.location === selectedLocation;

      // All filters must pass
      return (
        searchFilter &&
        yearFilter &&
        programFilter &&
        companyFilter &&
        locationFilter
      );
    });

    // Apply sorting if configured
    if (sortConfig) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle numeric sorting for year and salary
        if (sortConfig.key === "salary") {
          aValue = parseInt(aValue.replace(/,/g, ""), 10);
          bValue = parseInt(bValue.replace(/,/g, ""), 10);
        } else if (sortConfig.key === "year") {
          aValue = Number(aValue);
          bValue = Number(bValue);
        } else {
          // For string comparison, convert to lowercase to ensure case-insensitive sorting
          aValue = aValue.toString().toLowerCase();
          bValue = bValue.toString().toLowerCase();
        }

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [
    searchTerm,
    selectedYear,
    selectedProgram,
    selectedCompany,
    selectedLocation,
    sortConfig,
    studentsData, // Added in case studentsData becomes dynamic
  ]);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedProgram("all");
    setSelectedCompany("all");
    setSelectedLocation("all");
    setSearchTerm("");
    setSortConfig(null);
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig?.key !== columnKey) return null;
    return sortConfig.direction === "asc" ? (
      <ChevronUpIcon className="w-4 h-4 inline-block ml-1" />
    ) : (
      <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-16">
      <div className="container max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* Enhanced Header Section */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Student Placements
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our students' success stories and career achievements.
            Filter and sort to find specific placement details.
          </p>
        </div>

        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
            <CardHeader className="pb-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-red-600">
                  {stats.totalPlacements}
                </CardTitle>
                <CardDescription className="text-base">
                  Total Placements
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
            <CardHeader className="pb-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-red-600">
                  {stats.averageSalary}
                </CardTitle>
                <CardDescription className="text-base">
                  Average Salary
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
            <CardHeader className="pb-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                <BuildingOffice2Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-red-600">
                  {stats.companiesHiring}
                </CardTitle>
                <CardDescription className="text-base">
                  Companies Hiring
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
            <CardHeader className="pb-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                <PercentIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-red-600">
                  {stats.placementRate}
                </CardTitle>
                <CardDescription className="text-base">
                  Placement Rate
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Enhanced Filters Section */}
        <div className="rounded-sm border bg-card p-5 space-y-4">
          <h2 className="text-lg font-semibold mb-4">Filter Placements</h2>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="grid grid-cols-1 sm:flex w-full sm:w-auto sm:flex-row sm:flex-wrap gap-3 items-center">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full sm:w-[130px] bg-background">
                  <GraduationCapIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedProgram}
                onValueChange={setSelectedProgram}
              >
                <SelectTrigger className="w-full sm:w-[160px] bg-background">
                  <BuildingIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedCompany}
                onValueChange={setSelectedCompany}
              >
                <SelectTrigger className="w-full sm:w-[160px] bg-background">
                  <BuildingIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  {companies.map((company) => (
                    <SelectItem key={company} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-full sm:w-[160px] bg-background">
                  <MapPinIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 w-full md:max-w-md">
              <Input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background"
              />
            </div>
          </div>

          {/* Enhanced Active Filters */}
          {(selectedYear !== "all" ||
            selectedProgram !== "all" ||
            selectedCompany !== "all" ||
            selectedLocation !== "all" ||
            searchTerm.trim() !== "") && (
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <span className="text-sm text-muted-foreground">
                Active filters:
              </span>
              {selectedYear !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  Year: {selectedYear}
                </Badge>
              )}
              {selectedProgram !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  Program: {selectedProgram}
                </Badge>
              )}
              {selectedCompany !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  Company: {selectedCompany}
                </Badge>
              )}
              {selectedLocation !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  Location: {selectedLocation}
                </Badge>
              )}
              {searchTerm.trim() !== "" && (
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  Search: {searchTerm.trim()}
                </Badge>
              )}
              {(selectedYear !== "all" ||
                selectedProgram !== "all" ||
                selectedCompany !== "all" ||
                selectedLocation !== "all" ||
                searchTerm.trim() !== "") && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  size="sm"
                  className="h-7 px-3"
                >
                  <XIcon className="w-4 h-4 mr-1" />
                  Clear all
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Enhanced Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col h-[calc(100vh-100px)] invisible-scrollbar">
          <Table className="text-base relative">
            <TableHeader className="bg-gray-50 sticky top-0 z-10">
              <TableRow>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center gap-1">
                    Name
                    <SortIcon columnKey="name" />
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("company")}
                >
                  <div className="flex items-center gap-1">
                    Company
                    <SortIcon columnKey="company" />
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("program")}
                >
                  <div className="flex items-center gap-1">
                    Program
                    <SortIcon columnKey="program" />
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("location")}
                >
                  <div className="flex items-center gap-1">
                    Location
                    <SortIcon columnKey="location" />
                  </div>
                </TableHead>
                <TableHead>LinkedIn</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32">
                    <div className="flex flex-col items-center justify-center text-center">
                      <p className="text-muted-foreground">
                        No matching records found
                      </p>
                      <Button
                        variant="link"
                        onClick={clearFilters}
                        className="mt-2"
                      >
                        Clear all filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredStudents.map((student) => (
                  <TableRow
                    key={student.id}
                    className="hover:bg-muted/50 transition-colors cursor-default"
                  >
                    <TableCell className="font-medium">
                      {student.name}
                    </TableCell>
                    <TableCell>{student.company}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>{student.location}</TableCell>
                    <TableCell>
                      {student.linkedin ? (
                        <a
                          href={student.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <LinkedinIcon className="w-5 h-5 text-blue-600" />
                          <span className="inline text-blue-600">Profile</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-blue-600">
                          <LinkedinIcon className="w-5 h-5" />
                          <span className="inline text-blue-600">Profile</span>
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
