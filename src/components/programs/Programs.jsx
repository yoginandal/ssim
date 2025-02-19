"use client";

import { Calendar } from "../ui/calendar";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Search,
  BarChart2,
  Menu,
  Clock,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskRoundIcon as Flask,
  Users,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "../ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CheckCircle, ArrowRight } from "lucide-react";
import { CalendarRange } from "lucide-react";

const programs = [
  { id: "fpm/efpm", name: "FPM/EFPM" },
  { id: "pgdm-ba", name: "PGDM BA" },
  { id: "pgdm-bifs", name: "PGDM BIFS" },
  { id: "pgdm-triple-specialisation", name: "PGDM Triple Specialisation" },
];

const sections = [
  { id: "about", name: "About", icon: ChevronRight },
  { id: "specializations", name: "Specializations", icon: ChevronRight },
  { id: "differentiators", name: "Differentiators", icon: ChevronRight },
  { id: "curriculum", name: "Curriculum", icon: ChevronRight },
  { id: "eligibility", name: "Eligibility & Admission", icon: ChevronRight },
];

const programData = {
  "fpm/efpm": {
    name: "FPM/EFPM",
    keyInfo: {
      duration: "3 years",
      credits: "36",
      startDate: "July 2024",
      location: "Full-time On-campus",
      degree: "Fellow Program in Management (FPM)",
    },
    specializations: [
      {
        title: "Accounting & Finance",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/5410839.png",
      },
      {
        title: "Organizational Behavior / Human Resource",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/human-resource.png",
      },
      {
        title: "Marketing",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/marketing.png",
      },
      {
        title: "Economics",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/economics.png",
      },
      {
        title: "Operations Management",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/OM.png",
      },
      {
        title: "General Management",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/GM.png",
      },
      {
        title: "Strategic Management",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/SM.png",
      },
    ],
    differentiators: [
      {
        title: "Research Focus",
        description:
          "Rigorous interdisciplinary research in contemporary areas of management",
      },
      {
        title: "Publication Support",
        description:
          "Focus on publishing 2 research papers in Scopus indexed journals and 1 case study",
      },
      {
        title: "Financial Support",
        description:
          "Monthly stipend of ₹20,000-30,000 for qualified full-time scholars",
      },
    ],
    curriculum: [
      {
        name: "Module I (15 credits)",
        semesters: [
          {
            name: "Core Courses",
            courses: [
              "Course 1",
              "Course 2",
              "Course 3",
              "Course 4",
              "Credit Seminar (Case Study)",
            ],
          },
        ],
      },
      {
        name: "Module II (12 credits)",
        semesters: [
          {
            name: "Specialization Phase",
            courses: [
              "Stream Specific Course 1",
              "Stream Specific Course 2",
              "Stream Specific Course 3",
              "Credit Seminar (Specific)",
            ],
          },
        ],
      },
      {
        name: "Module III (9 credits)",
        semesters: [
          {
            name: "Research Phase",
            courses: [
              "Advanced Research Methodology",
              "Design Thinking/Teaching Pedagogy",
              "Review Paper (Research Area)",
            ],
          },
        ],
      },
    ],
    eligibility: [
      "MBA/PGDM/PG in allied subjects with first class aggregate marks",
      "Graduate with CA/ICWA/CS qualification (minimum 60% aggregate)",
      "Must complete comprehensive examination after coursework",
      "Must submit thesis after minimum 2 years of registration",
    ],
    admission: [
      "Submit application form",
      "Pay acceptance fee of ₹60,000 (non-refundable)",
      "Complete course work and comprehensive examination",
      "Submit research proposal to Research Advisory Committee",
      "Complete thesis work and defense",
    ],
    stats: {
      programFee: 300000,
      stipendYear1: 240000,
      stipendYear2: 300000,
      stipendYear3: 360000,
      maxDuration: 5,
      minThesisPeriod: 2,
    },
  },
  "pgdm-ba": {
    name: "PGDM BA",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "2024",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management - Business Analytics",
    },
    specializations: [
      {
        title: "Marketing Analytics",
        icon: "📊",
      },
      {
        title: "Financial Analytics",
        icon: "💹",
      },
      {
        title: "HR Analytics",
        icon: "👥",
      },
      {
        title: "Operational Analytics",
        icon: "⚙️",
      },
      {
        title: "Artificial Intelligence",
        icon: "🤖",
      },
      {
        title: "Big Data Analytics",
        icon: "📈",
      },
      {
        title: "Cloud Computing",
        icon: "☁️",
      }
    ],
    differentiators: [
      {
        title: "Harvard Business School Certification",
        description: "Embedded with Harvard Business School Online Business Analytics certification",
      },
      {
        title: "Software Exposure",
        description: "Exposure to wide range of software, programming languages and big data processing tools",
      },
      {
        title: "Experiential Learning",
        description: "Learning through simulations, gamifications, and practical applications",
      },
      {
        title: "Expert Faculty",
        description: "Eminent faculty members with industry, academia and research experience",
      },
      {
        title: "International Exchange",
        description: "Exchange programs for students with Herzing University, Atlanta (USA)",
      },
      {
        title: "Paid Internships",
        description: "Earn-while-you-learn through paid summer internships",
      }
    ],
    curriculum: [
      {
        name: "Core Areas",
        semesters: [
          {
            name: "Business Foundation",
            courses: [
              "Business Management",
              "Analytical Mathematics",
              "Statistics",
              "Computer Science",
            ],
          },
          {
            name: "Analytics Applications",
            courses: [
              "Marketing Analytics",
              "Financial Analytics",
              "HR Analytics",
              "Operational Analytics",
            ],
          }
        ]
      },
      {
        name: "Advanced Technologies",
        semesters: [
          {
            name: "Emerging Technologies",
            courses: [
              "Artificial Intelligence",
              "Neural Networks",
              "Advanced Machine Learning",
              "Big Data Analytics",
              "Cloud Computing Techniques"
            ],
          }
        ]
      }
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong analytical and quantitative skills",
      "Interest in data-driven decision making",
      "Basic understanding of mathematics and statistics"
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile"
    ],
    stats: {
      programHighlights: {
        dataGenerated: "2.5 quintillion bytes daily",
        growthRate: "25%",
        growthPeriod: "2020-2030",
        uniquePosition: "First institute in Telugu states offering specialized PGDM in Business Analytics"
      }
    }
  },
  "pgdm-bifs": {
    name: "PGDM BIFS",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "2024",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management - Banking, Insurance and Financial Services",
    },
    specializations: [
      {
        title: "Banking Stream",
        icon: "🏦",
        description: "Retail banking, Digital banking, Risk and Treasury management in banks"
      },
      {
        title: "Insurance Stream",
        icon: "🛡️",
        description: "Insure-tech, Fraud risk management in insurance reinsurance management"
      },
      {
        title: "Analytical Stream",
        icon: "📊",
        description: "Fraud risk analytics, Financial analytics and Algo trading with Python"
      }
    ],
    differentiators: [
      {
        title: "III Accreditation",
        description: "Program is accredited by Insurance Institute of India (III)"
      },
      {
        title: "Advanced Labs",
        description: "NSE Assisted Finance Lab, Equity Levers Certification, CESIM Simulations"
      },
      {
        title: "Experiential Learning",
        description: "Corporate interviews, Industrial Visits, NGO Visits, and Simulations"
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)"
      },
      {
        title: "Industry Integration",
        description: "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations"
      },
      {
        title: "Outcome Based Education",
        description: "Focus on practical skills and industry readiness"
      }
    ],
    curriculum: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Foundation Courses",
            courses: [
              "Economics",
              "Finance",
              "Marketing",
              "Human Resources",
              "Quantitative Techniques",
              "Information Technology",
              "Communication",
              "Operations"
            ]
          }
        ]
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Specialization Courses",
            courses: [
              "Banking",
              "Insurance",
              "Security Analysis",
              "Portfolio Management",
              "Capital Markets",
              "Strategy",
              "Entrepreneurship",
              "Project Management",
              "Governance and Ethics"
            ]
          }
        ]
      }
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong interest in Banking, Insurance and Financial Services",
      "Analytical and quantitative aptitude",
      "Good communication skills"
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile"
    ],
    stats: {
      careerOptions: [
        "NAV Analysts in Fintech Companies",
        "Private & Public Sector Banks",
        "Life Insurance Companies",
        "General Insurance & Health Insurance Companies",
        "Insurance Intermediaries",
        "Stock Broking Firms",
        "Mutual Fund Companies",
        "Marketing Research Companies",
        "Bancassurance channels"
      ],
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge"
      ],
      placementRate: 100
    }
  },
  "pgdm-triple-specialisation": {
    name: "PGDM Triple Specialisation",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "2024",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management",
    },
    specializations: [
      {
        title: "Finance",
        icon: "💰"
      },
      {
        title: "Marketing",
        icon: "📊"
      },
      {
        title: "Human Resource",
        icon: "👥"
      },
      {
        title: "Operations Management",
        icon: "⚙️"
      },
      {
        title: "Business Analytics",
        icon: "📈"
      },
      {
        title: "Digital Marketing",
        icon: "🌐"
      },
      {
        title: "Banking & Insurance",
        icon: "🏦"
      },
      {
        title: "Retail Management",
        icon: "🏪"
      },
      {
        title: "Entrepreneurship",
        icon: "🚀"
      },
      {
        title: "Agribusiness Management",
        icon: "🌾"
      },
      {
        title: "Technology Management",
        icon: "💻"
      },
      {
        title: "Pharma Management",
        icon: "💊"
      }
    ],
    differentiators: [
      {
        title: "NBA & NAAC Accreditation",
        description: "Program is accredited by NBA and NAAC"
      },
      {
        title: "Triple Specialization",
        description: "Unique opportunity to specialize in three different areas"
      },
      {
        title: "Cross Functional Skills",
        description: "Develop skills across multiple business domains"
      },
      {
        title: "Entrepreneurial Focus",
        description: "Greater scope to develop entrepreneurial skills"
      },
      {
        title: "Simulation Labs",
        description: "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations"
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)"
      }
    ],
    curriculum: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Core Courses",
            courses: [
              "Business Management Fundamentals",
              "Marketing Management",
              "Financial Management",
              "Human Resource Management",
              "Operations Management",
              "Business Analytics"
            ]
          }
        ]
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Specialization Phase",
            description: "Students choose 10 electives across different areas apart from compulsory courses"
          }
        ]
      }
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong academic background",
      "Leadership potential",
      "Good communication skills"
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile"
    ],
    stats: {
      placementRate: 100,
      facultyCount: {
        fullTime: "25+",
        visiting: "50+"
      },
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge"
      ],
      experientialLearning: [
        "Corporate Interviews",
        "Industrial Visits",
        "NGO Visits",
        "Simulations",
        "Student Clubs",
        "Event Organization"
      ]
    }
  },
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const ProgramStats = ({ programId }) => {
  const program = programData[programId];

  const data = [
    { name: "Applicants", value: program.stats.applicants },
    { name: "Enrolled", value: program.stats.enrolled },
    { name: "Graduates", value: program.stats.graduates },
    { name: "Avg. Salary", value: program.stats.avgSalary / 1000 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{program.name} Statistics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <p>Employment Rate: {program.stats.employmentRate}%</p>
        <p>Average Time to Graduate: {program.stats.avgTimeToGraduate} years</p>
      </div>
    </div>
  );
};

const ProgramComparison = ({ programs }) => {
  const comparisonData = [
    { feature: "Duration", key: "duration" },
    { feature: "Credits", key: "credits" },
    { feature: "Start Date", key: "startDate" },
    { feature: "Location", key: "location" },
    { feature: "Degree", key: "degree" },
    { feature: "Applicants", key: "applicants" },
    { feature: "Enrolled", key: "enrolled" },
    { feature: "Graduates", key: "graduates" },
    { feature: "Employment Rate", key: "employmentRate" },
    { feature: "Avg. Salary", key: "avgSalary" },
    { feature: "Avg. Time to Graduate", key: "avgTimeToGraduate" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Program Comparison</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            {programs.map((program) => (
              <TableHead key={program.id}>{program.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map(({ feature, key }) => (
            <TableRow key={key}>
              <TableCell className="font-medium">{feature}</TableCell>
              {programs.map((program) => (
                <TableCell key={program.id}>
                  {key in programData[program.id].keyInfo
                    ? programData[program.id].keyInfo[key]
                    : key in programData[program.id].stats
                    ? key === "avgSalary"
                      ? `$${programData[program.id].stats[
                          key
                        ].toLocaleString()}`
                      : key === "employmentRate" || key === "avgTimeToGraduate"
                      ? `${programData[program.id].stats[key]}%`
                      : programData[program.id].stats[key].toLocaleString()
                    : "N/A"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const KeyInformation = ({ info }) => {
  const iconMap = {
    duration: Clock,
    credits: BookOpen,
    startDate: CalendarRange,
    location: MapPin,
    degree: GraduationCap,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Key Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(info).map(([key, value]) => {
          const Icon = iconMap[key];
          return (
            <Card key={key} className="overflow-hidden">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-mainBlue rounded-full p-3 flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-base text-gray-800 capitalize">
                    {key}
                  </h4>
                  <p className="text-lg font-semibold text-red-600 break-words">
                    {value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Specializations = ({ specializations }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Specializations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-row items-center gap-4 p-2"
          >
            {spec.icon.startsWith('http') ? (
              <img src={spec.icon} alt={spec.title} className="w-20 h-20" />
            ) : (
              <div className="w-20 h-20 flex items-center justify-center text-4xl bg-gray-50 rounded-lg">
                {spec.icon}
              </div>
            )}
            <CardTitle className="text-xl text-red-600">{spec.title}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Differentiators = ({ differentiators }) => {
  const iconMap = {
    0: Briefcase,
    1: Flask,
    2: Users,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Program Differentiators
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {differentiators.map((diff, index) => {
          const Icon = iconMap[index] || Users;
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="bg-mainBlue rounded-full p-2">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-red-600">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{diff.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Curriculum = ({ curriculum }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Curriculum Overview
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {curriculum.map((year, yearIndex) => (
          <AccordionItem key={yearIndex} value={`year-${yearIndex}`}>
            <AccordionTrigger className="text-lg font-medium">
              {year.name}
            </AccordionTrigger>
            <AccordionContent>
              {year.semesters.map((semester, semesterIndex) => (
                <div key={semesterIndex} className="mb-4">
                  <h4 className="font-semibold mb-2">{semester.name}</h4>
                  <ul className="space-y-2">
                    {semester?.courses?.map((course, courseIndex) => (
                      <li
                        key={courseIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const EligibilityAdmission = ({ eligibility, admission }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Eligibility Criteria
        </h3>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              {eligibility.map((criteria, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{criteria}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Admission Procedure
        </h3>
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-4">
              {admission.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                  {index < admission.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProgramSection = ({ programId, activeSection }) => {
  const program = programData[programId];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-mainBlue">
        {program.name} Program
      </h2>
      {activeSection === "about" && <KeyInformation info={program.keyInfo} />}
      {activeSection === "specializations" && (
        <Specializations specializations={program.specializations} />
      )}
      {activeSection === "differentiators" && (
        <Differentiators differentiators={program.differentiators} />
      )}
      {activeSection === "curriculum" && (
        <Curriculum curriculum={program.curriculum} />
      )}
      {activeSection === "eligibility" && (
        <EligibilityAdmission
          eligibility={program.eligibility}
          admission={program.admission}
        />
      )}
    </div>
  );
};

const ProgramsOverview = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0].id);
  const [activeSection, setActiveSection] = useState("about");
  const [searchTerm, setSearchTerm] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const filteredSections = sections.filter((section) =>
    section.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Overlay = isDesktop ? Dialog : Drawer;
  const OverlayContent = isDesktop ? DialogContent : DrawerContent;

  const SidebarContent = () => (
    <>
      {/* <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div> */}
      {/* <ScrollArea className="h-[calc(100vh-200px)] lg:h-auto"> */}
      <ul className="space-y-2">
        {filteredSections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                setActiveSection(section.id);
                if (!isDesktop) setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                {section.name}
                {activeSection === section.id ? (
                  <ChevronDown className="ml-auto" />
                ) : (
                  <ChevronRight className="ml-auto" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {/* </ScrollArea> */}
      {/* <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Button
          onClick={() => {
            setShowComparison(!showComparison);
            if (!isDesktop) setSidebarOpen(false);
          }}
          className="w-full sm:flex-1"
        >
          {showComparison ? "Hide Comparison" : "Compare Programs"}
        </Button>
        <Overlay>
          <OverlayContent className="sm:max-w-[425px]">
            <ProgramStats programId={activeProgram} />
          </OverlayContent>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              <BarChart2 className="h-4 w-4 mr-2" />
              <span>View Statistics</span>
            </Button>
          </DialogTrigger>
        </Overlay>
      </div> */}
    </>
  );

  return (
    <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-20">
      <h1 className="text-4xl font-bold mb-16 text-center text-primary">
        Graduate Programs
      </h1>
      <Tabs
        value={activeProgram}
        onValueChange={setActiveProgram}
        className="mb-8"
      >
        <TabsList className="w-full flex flex-wrap text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 justify-center gap-2 p-1 h-auto">
          {programs.map((program) => (
            <TabsTrigger
              key={program.id}
              value={program.id}
              className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
            >
              {program.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex flex-col lg:flex-row gap-8">
        {isDesktop ? (
          <nav className="lg:w-1/4">
            <SidebarContent />
          </nav>
        ) : (
          <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden mb-4 w-full justify-between"
              >
                <span className="flex items-center">
                  <Menu className="mr-2 h-4 w-4" />
                  Menu
                </span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                <SidebarContent />
              </div>
              <DrawerClose asChild>
                <Button className="mt-4">Close</Button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        )}
        <main className="lg:w-3/4 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showComparison ? (
              <motion.div
                key={`${activeProgram}-${activeSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramSection
                  programId={activeProgram}
                  activeSection={activeSection}
                />
              </motion.div>
            ) : (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramComparison programs={programs} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ProgramsOverview;
