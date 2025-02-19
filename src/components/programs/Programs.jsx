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
      duration: "2 years",
      credits: "120",
      startDate: "September 2023",
      location: "On-campus & Online",
      degree: "Master of Science in Computer Science",
    },
    specializations: [
      {
        title: "Software Engineering",
        description:
          "Focus on advanced software development methodologies and practices",
        skills: ["Agile", "DevOps", "Microservices", "Cloud-native"],
      },
      {
        title: "Cybersecurity",
        description: "Explore advanced security techniques and threat analysis",
        skills: [
          "Network Security",
          "Cryptography",
          "Ethical Hacking",
          "Risk Management",
        ],
      },
      {
        title: "Artificial Intelligence",
        description: "Develop intelligent systems and machine learning models",
        skills: [
          "Machine Learning",
          "Natural Language Processing",
          "Computer Vision",
          "Deep Learning",
        ],
      },
    ],
    differentiators: [
      {
        title: "Industry Partnerships",
        description: "Collaborate with leading tech companies",
      },
      {
        title: "Research Opportunities",
        description: "Engage in cutting-edge computer science research",
      },
      {
        title: "Interdisciplinary Approach",
        description: "Combine CS with other fields like biology or economics",
      },
    ],
    curriculum: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Advanced Algorithms",
              "Machine Learning",
              "Database Systems",
              "Software Engineering",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "Artificial Intelligence",
              "Computer Networks",
              "Distributed Systems",
              "Elective",
            ],
          },
        ],
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Cloud Computing",
              "Data Mining",
              "Computer Vision",
              "Elective",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "Capstone Project",
              "Ethics in Computer Science",
              "Elective",
              "Elective",
            ],
          },
        ],
      },
    ],
    eligibility: [
      "Bachelor's degree in Computer Science or related field",
      "Minimum GPA of 3.0 on a 4.0 scale",
      "GRE scores (optional)",
      "TOEFL or IELTS scores for international students",
    ],
    admission: [
      "Submit online application",
      "Provide official transcripts",
      "Submit letters of recommendation",
      "Write a statement of purpose",
      "Pay application fee",
      "Interview (if required)",
    ],
    stats: {
      applicants: 1000,
      enrolled: 200,
      graduates: 180,
      employmentRate: 95,
      avgSalary: 95000,
      avgTimeToGraduate: 2.2,
    },
  },
  "pgdm-ba": {
    name: "PGDM BA",
    keyInfo: {
      duration: "1.5 years",
      credits: "90",
      startDate: "January 2024",
      location: "On-campus",
      degree: "Master of Science in Data Science",
    },
    specializations: [
      {
        title: "Big Data Analytics",
        description:
          "Master techniques for processing and analyzing large-scale datasets",
        skills: ["Hadoop", "Spark", "NoSQL", "Data Warehousing"],
      },
      {
        title: "Machine Learning",
        description: "Develop advanced machine learning models and algorithms",
        skills: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforcement Learning",
          "Deep Learning",
        ],
      },
      {
        title: "Data Visualization",
        description: "Create compelling visual representations of complex data",
        skills: ["D3.js", "Tableau", "Power BI", "Data Storytelling"],
      },
    ],
    differentiators: [
      {
        title: "Real-world Projects",
        description:
          "Work on actual data science problems from industry partners",
      },
      {
        title: "Data Science Lab",
        description:
          "Access to high-performance computing resources for big data processing",
      },
      {
        title: "Interdisciplinary Approach",
        description:
          "Combine data science with domain expertise in various fields",
      },
    ],
    curriculum: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Statistical Methods",
              "Machine Learning",
              "Big Data Systems",
              "Data Visualization",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "Deep Learning",
              "Natural Language Processing",
              "Time Series Analysis",
              "Elective",
            ],
          },
        ],
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Capstone Project",
              "Ethics in Data Science",
              "Elective",
              "Elective",
            ],
          },
        ],
      },
    ],
    eligibility: [
      "Bachelor's degree in Data Science, Statistics, Computer Science, or related field",
      "Minimum GPA of 3.2 on a 4.0 scale",
      "GRE scores required",
      "TOEFL or IELTS scores for international students",
    ],
    admission: [
      "Submit online application",
      "Provide official transcripts",
      "Submit letters of recommendation",
      "Write a statement of purpose",
      "Submit a portfolio of data science projects (optional)",
      "Pay application fee",
      "Interview (if shortlisted)",
    ],
    stats: {
      applicants: 800,
      enrolled: 150,
      graduates: 140,
      employmentRate: 97,
      avgSalary: 100000,
      avgTimeToGraduate: 1.8,
    },
  },
  "pgdm-bifs": {
    name: "PGDM BIFS",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "September 2023",
      location: "On-campus & Online",
      degree: "Master of Science in Artificial Intelligence",
    },
    specializations: [
      {
        title: "Natural Language Processing",
        description:
          "Develop systems that can understand, interpret, and generate human language",
        skills: [
          "Text Analysis",
          "Speech Recognition",
          "Machine Translation",
          "Chatbots",
        ],
      },
      {
        title: "Computer Vision",
        description:
          "Create AI systems that can process, analyze, and understand visual information",
        skills: [
          "Image Processing",
          "Object Detection",
          "Facial Recognition",
          "Scene Understanding",
        ],
      },
      {
        title: "Robotics",
        description: "Design and develop intelligent robotic systems",
        skills: [
          "Robot Kinematics",
          "Perception",
          "Path Planning",
          "Human-Robot Interaction",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI Research Center",
        description:
          "Collaborate with leading AI researchers on cutting-edge projects",
      },
      {
        title: "Industry Internships",
        description: "Gain hands-on experience with AI in real-world settings",
      },
      {
        title: "Ethical AI Focus",
        description:
          "Learn to develop AI systems with a strong emphasis on ethics and societal impact",
      },
    ],
    curriculum: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Machine Learning",
              "Neural Networks",
              "AI Ethics",
              "Probability and Statistics for AI",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Reinforcement Learning",
            ],
          },
        ],
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Advanced AI Algorithms",
              "Robotics",
              "AI in Healthcare",
              "Elective",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "AI Capstone Project",
              "AI and Society",
              "Elective",
              "Elective",
            ],
          },
        ],
      },
    ],
    eligibility: [
      "Bachelor's degree in Computer Science, AI, or related field",
      "Minimum GPA of 3.2 on a 4.0 scale",
      "GRE scores required",
      "TOEFL or IELTS scores for international students",
      "Strong programming skills (Python, C++)",
    ],
    admission: [
      "Submit online application",
      "Provide official transcripts",
      "Submit letters of recommendation",
      "Write a statement of purpose",
      "Submit a portfolio of AI projects (optional)",
      "Pay application fee",
      "Technical interview (if shortlisted)",
    ],
    stats: {
      applicants: 1200,
      enrolled: 180,
      graduates: 160,
      employmentRate: 98,
      avgSalary: 110000,
      avgTimeToGraduate: 2.1,
    },
  },
  "pgdm-triple-specialisation": {
    name: "PGDM Triple Specialisation",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "September 2023",
      location: "On-campus & Online",
      degree: "Master of Science in Artificial Intelligence",
    },
    specializations: [
      {
        title: "Natural Language Processing",
        description:
          "Develop systems that can understand, interpret, and generate human language",
        skills: [
          "Text Analysis",
          "Speech Recognition",
          "Machine Translation",
          "Chatbots",
        ],
      },
      {
        title: "Computer Vision",
        description:
          "Create AI systems that can process, analyze, and understand visual information",
        skills: [
          "Image Processing",
          "Object Detection",
          "Facial Recognition",
          "Scene Understanding",
        ],
      },
      {
        title: "Robotics",
        description: "Design and develop intelligent robotic systems",
        skills: [
          "Robot Kinematics",
          "Perception",
          "Path Planning",
          "Human-Robot Interaction",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI Research Center",
        description:
          "Collaborate with leading AI researchers on cutting-edge projects",
      },
      {
        title: "Industry Internships",
        description: "Gain hands-on experience with AI in real-world settings",
      },
      {
        title: "Ethical AI Focus",
        description:
          "Learn to develop AI systems with a strong emphasis on ethics and societal impact",
      },
    ],
    curriculum: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Machine Learning",
              "Neural Networks",
              "AI Ethics",
              "Probability and Statistics for AI",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Reinforcement Learning",
            ],
          },
        ],
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Fall Semester",
            courses: [
              "Advanced AI Algorithms",
              "Robotics",
              "AI in Healthcare",
              "Elective",
            ],
          },
          {
            name: "Spring Semester",
            courses: [
              "AI Capstone Project",
              "AI and Society",
              "Elective",
              "Elective",
            ],
          },
        ],
      },
    ],
    eligibility: [
      "Bachelor's degree in Computer Science, AI, or related field",
      "Minimum GPA of 3.2 on a 4.0 scale",
      "GRE scores required",
      "TOEFL or IELTS scores for international students",
      "Strong programming skills (Python, C++)",
    ],
    admission: [
      "Submit online application",
      "Provide official transcripts",
      "Submit letters of recommendation",
      "Write a statement of purpose",
      "Submit a portfolio of AI projects (optional)",
      "Pay application fee",
      "Technical interview (if shortlisted)",
    ],
    stats: {
      applicants: 1200,
      enrolled: 180,
      graduates: 160,
      employmentRate: 98,
      avgSalary: 110000,
      avgTimeToGraduate: 2.1,
    },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specializations.map((spec, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-mainBlue">
              <CardTitle className="text-white">{spec.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-base">{spec.description}</p>
              <div className="flex flex-wrap gap-2">
                {spec.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${
                      [
                        "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700",
                        "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700",
                        "bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700",
                        "bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700",
                        "bg-orange-50 text-orange-600 hover:bg-orange-100 hover:text-orange-700",
                        "bg-teal-50 text-teal-600 hover:bg-teal-100 hover:text-teal-700",
                        "bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-700",
                        "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700",
                        "bg-yellow-50 text-yellow-600 hover:bg-yellow-100 hover:text-yellow-700",
                        "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700",
                        "bg-lime-50 text-lime-600 hover:bg-lime-100 hover:text-lime-700",
                        "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700",
                        "bg-violet-50 text-violet-600 hover:bg-violet-100 hover:text-violet-700",
                        "bg-fuchsia-50 text-fuchsia-600 hover:bg-fuchsia-100 hover:text-fuchsia-700",
                        "bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700",
                        "bg-amber-50 text-amber-600 hover:bg-amber-100 hover:text-amber-700",
                      ][skillIndex % 16]
                    } transition-colors inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-gray-500/10 ring-inset`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
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
                    {semester.courses.map((course, courseIndex) => (
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
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
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
