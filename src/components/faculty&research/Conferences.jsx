import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

import {
  BookOpen,
  Calendar,
  CreditCard,
  Download,
  FileText,
  GraduationCap,
  Menu,
  School,
  Trophy,
  Building,
  Users,
  ListTodo,
  FormInput,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Heading from "../Heading";

// Navigation Data
const navigationSections = [
  { id: "overview", label: "ABOUT SSIM", icon: Building },
  { id: "process", label: "ABOUT THE CONFERENCE", icon: Users },
  { id: "fees", label: "THEMES FOR SAMAROH 2025", icon: ListTodo },
  { id: "dates", label: "CONFERENCE NOTE", icon: FileText },
  { id: "brochure", label: "PUBLISHING OPPORTUNITIES", icon: BookOpen },
  { id: "apply", label: "ONLINE REGISTRATION", icon: FormInput },
];

// Section Data
const overviewData = [
  {
    title: "",
    description: "Publication of Case Study",
    icon: FileText, // Changed to FileText since it's about publishing a case study
  },
  {
    title: "",
    description:
      "Two Paper Presentation in National / International Conferences",
    icon: GraduationCap, // Changed to GraduationCap for academic presentations
  },
  {
    title: "",
    description:
      "Publication of 2 research papers in SCOPUS / ABDC Indexed Journals",
    icon: BookOpen, // Changed to BookOpen for research paper publications
  },
];

const processData = [
  {
    step: 1,
    title: "Eligibility Check",
    description: "Verify if you meet the program requirements.",
    details:
      "Must have MBA/PGDM/PG in Economics/Commerce/Statistics with first class, or CA/ICWA/CS with 60% aggregate.",
  },
  {
    step: 2,
    title: "Target Participant Profile",
    description: "Confirm you belong to eligible participant categories.",
    details:
      "Open to faculty members, government/private executives, postgraduates, and graduates with CA/CMA/CS.",
  },
  {
    step: 3,
    title: "Application & Research Proposal",
    description: "Submit application with research interest abstract.",
    details:
      "Include a 5,000-word tentative research proposal along with complete application form.",
  },
  {
    step: 4,
    title: "Entrance Test",
    description: "Take SRAT entrance test or submit UGC NET scores.",
    details:
      "UGC NET scores after June 1, 2023 are valid for 2024 admission. SRAT is SSIM's admission test.",
  },
  {
    step: 5,
    title: "Research Presentation & Interview",
    description: "Present proposal and attend personal interview.",
    details:
      "Final selection based on entrance scores, academic records, proposal presentation and interview performance.",
  },
];

const feesData = {
  tuitionFees: [
    {
      type: "Acceptance Fee (Non-refundable)",
      amount: "₹60,000",
      dueDate: "July 30, 2024",
      notes: "Initial payment before program commencement",
    },
    {
      type: "First Installment",
      amount: "₹80,000",
      dueDate: "January 30, 2025",
      notes: "First part of balance payment",
    },
    {
      type: "Second Installment",
      amount: "₹80,000",
      dueDate: "July 30, 2025",
      notes: "Second part of balance payment",
    },
    {
      type: "Third Installment",
      amount: "₹80,000",
      dueDate: "July 30, 2026",
      notes: "Final part of balance payment",
    },
  ],
  stipendDetails: [
    {
      year: "First Year",
      amount: "₹20,000",
      frequency: "per month",
      notes: "For eligible full-time scholars",
    },
    {
      year: "Second Year",
      amount: "₹25,000",
      frequency: "per month",
      notes: "For eligible full-time scholars",
    },
    {
      year: "Third Year",
      amount: "₹30,000",
      frequency: "per month",
      notes: "For eligible full-time scholars",
    },
  ],
};

const datesData = [
  {
    date: "September 1, 2024",
    event: "Application Opens",
    description: "Start your application process",
  },
  {
    date: "November 15, 2024",
    event: "Early Decision Deadline",
    description: "Submit for early consideration",
  },
  {
    date: "January 15, 2025",
    event: "Regular Decision Deadline",
    description: "Final application deadline",
  },
  {
    date: "March 31, 2025",
    event: "Decisions Released",
    description: "Check your application status",
  },
];

// Navigation Component
const NavContent = ({ activeSection, setActiveSection, sections }) => (
  <div className="space-y-2">
    {sections.map((section) => {
      const Icon = section.icon;
      return (
        <motion.button
          key={section.id}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveSection(section.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors
            ${
              activeSection === section.id
                ? "bg-mainBlue text-white"
                : "hover:bg-muted text-red-600"
            }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{section.label}</span>
        </motion.button>
      );
    })}
  </div>
);

// Enquire Dialog Component
const EnquireDialog = ({ isOpen, setIsOpen }) => (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Download Brochure</DialogTitle>
        <DialogDescription>
          Please provide your details to receive our comprehensive brochure.
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-mainBlue hover:bg-mainBlue/80 text-white"
          >
            Download Now
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
);

// Section Components
const Overview = () => (
  <div className="space-y-3 p-3">
    <h3 className="font-bold text-mainBlue text-2xl">
      About Siva Sivani Institute of Management
    </h3>
    <p className="text-lg text-gray-700">
      Siva Sivani Institute of Management (SSIM) is an autonomous B-School
      established in 1992 duly approved by All India Council for Technical
      Education (AICTE) and the first standalone B-School in both the Telugu
      speaking state. SSIM is accredited by the prestigious international agency
      South Asian Quality Assurance System (SAQS), as well as accredited by
      National Agencies like: NBA for PGDM Program, NAAC offering PGDM,
      PGDM-BIFS and PGDM-BA. The institute has a rich tradition of pursuing
      academic excellence and overall personal growth. SSIM is consistently
      working on its course to offer the latest and most effective approach
      towards imparting quality education. The courses are designed and updated
      at frequent intervals with the inputs provided by stalwarts both from
      industry and academia to meet the needs of the industry. SSIM located
      amidst greenery as well as far from the madding crowd, SSIM has an
      enviable environment, Serene, Spacious and stupendous. It offers an ideal
      environment for imparting value-based management education.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About London Metropolitan University (LMU)
    </h3>
    <p className="text-gray-700 text-lg">
      Metropolitan University (LMU) is a public research university based in
      London, England. It was formed in 2002 by the merger of London Guildhall
      University and the University of North London. LMU is a dynamic
      institution located in the heart of London. With a rich history and a
      forward-thinking approach, LMU offers diverse programs and research
      opportunities. It fosters a multicultural environment, welcoming students
      and staff from around the world. LMU is renowned for its innovative
      research, strong industry partnerships, and state-of-the-art facilities.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About SP Jain School of Global Management
    </h3>
    <p className="text-gray-700 text-lg">
      SP Jain School of Global Management, an Australian business school with
      campuses in Dubai, Mumbai, Singapore, and Sydney, offers undergraduate,
      postgraduate, and executive programs emphasizing real-world business
      insights. Renowned for international faculty and recognized by Bloomberg,
      Forbes, and Financial Times, the school embodies values like Innovation,
      leadership, and sustainability. Key programs include the Global MBA (#7 in
      Asia Pacific, 2023-24) and Executive MBA.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About Dallas Baptist University
    </h3>
    <p className="text-gray-700 text-lg">
      DBU’s forerunner, Decatur Baptist College, was founded in 1898 as the
      first junior college in Texas, In 1965, the school relocated to the scenic
      foothills of southwest Dallas. Today, DBU offers a variety of degrees at
      the undergraduate, master’s, and doctoral levels. Well into our second
      century, DBU continues to press forward in our mission to produce servant
      leaders who will transform the world. Dallas Baptist University is a
      nationally ranked, comprehensive, global Christ-centered university with a
      mission to produce servant leaders through the integration of faith and
      learning. Dallas Baptist University is a nationally ranked, comprehensive,
      global Christ-centered university with a mission to produce servant
      leaders through the integration of faith and learning. We are thrilled to
      be an educational enterprise home to more than 4,200 students representing
      more than 50 countries around the world.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About Indian Society for Training & Development
    </h3>
    <p className="text-gray-700 text-lg">
      The Indian Society for Training & Development (ISTD), established in April
      1970, is a national level professional & non-profit society registered
      under the Societies Registration Act, 1860. It has a over 11,000
      membership of individuals, over 400 institutional members from 50 chapters
      across the country in the area of training and development of Human
      Resource from Government, Public and Private Sector Organizations &
      Enterprises; Educational and Training Institutions and other Professional
      Bodies. The Society is affiliated to the International Federation of
      Training and Development Organizations (IFTDO), Geneva. ISTD Organizes
      Training Programs, all over the country both at Chapter and National
      Levels.
    </p>
  </div>
);

const Process = () => (
  <div className="space-y-8">
    {processData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-12 group"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
          {item.step}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-mainBlue">{item.title}</h3>
          <p className="text-xl font-semibold text-gray-700">
            {item.description}
          </p>
          <p className="text-lg text-gray-700">{item.details}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const Fees = () => (
  <div className="space-y-8">
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl text-[#002f87]">Fee Structure</CardTitle>
        <CardDescription className="text-lg text-red-600 font-semibold">
          Total Program Fee: ₹3,00,000 (Three Lakhs only)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Regular Fee Structure */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#002f87]">
            Regular Fee Structure
          </h3>
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] bg-[#002f87] text-white text-lg">
                    Payment Type
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Amount
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Due Date
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Notes
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feesData.tuitionFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black text-lg">
                      {fee.type}
                    </TableCell>
                    <TableCell className="text-red-600 font-semibold text-lg">
                      {fee.amount}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {fee.dueDate}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {fee.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Stipend Structure */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#002f87]">
            Financial Support (Full-time Research Scholars)
          </h3>
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] bg-[#002f87] text-white text-lg">
                    Year
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Amount
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Frequency
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Notes
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feesData.stipendDetails.map((stipend, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black text-lg">
                      {stipend.year}
                    </TableCell>
                    <TableCell className="text-red-600 font-semibold text-lg">
                      {stipend.amount}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {stipend.frequency}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {stipend.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-[#002f87]/5 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-[#002f87] text-lg">
            Important Notes:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-lg text-black">
            <li>
              25% fee waiver for Alumni of Siva Sivani Institute of Management
              (SSIM)
            </li>
            <li>
              Eligible students for stipend are exempted from tuition fees
            </li>
            <li>
              Stipend-eligible students need to pay only ₹70,000 (₹60,000
              non-refundable acceptance fee + ₹10,000 refundable security
              deposit)
            </li>
            <li>
              Stipend is subject to regular performance review every six months
            </li>
            <li>Maximum stipend duration is three years</li>
            <li>Students receive access to library and academic resources</li>
            <li>
              Selected scholars must work as teaching/research assistants at
              SSIM
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Dates = () => (
  <Card className="border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-3xl text-mainBlue">Important Dates</CardTitle>
      <CardDescription className="text-lg text-red-600">
        Mark these key dates in your calendar
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-2 gap-6">
        {datesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-card rounded-lg shadow"
          >
            <time className="text-sm text-red-600 font-semibold">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-mainBlue mt-2">
              {item.event}
            </h3>
            <p className="text-gray-700 text-lg mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Brochure = ({ setIsEnquireOpen }) => (
  <Card className="border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-3xl text-center text-red-600">
        Download Our Brochure
      </CardTitle>
      <CardDescription className="text-xl text-center text-gray-700">
        Get detailed information about our programs
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center text-center">
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-gray-700 text-lg">
          Our comprehensive brochure provides in-depth information about our
          academic programs, campus life, and admissions process.
        </p>
        <Button
          size="lg"
          onClick={() => setIsEnquireOpen(true)}
          className="w-full bg-mainBlue hover:bg-mainBlue/80 text-white"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Download Brochure
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Apply = () => (
  <Card className="border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-3xl text-red-600 text-center">
        Apply Now
      </CardTitle>
      <CardDescription className="text-xl text-gray-700 text-center">
        Start your application process
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center text-center">
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-gray-700 text-lg">
          Ready to begin your journey? Click below to start your application.
          Make sure you have all necessary documents ready.
        </p>
        <a
          target="_blank"
          href="https://apply.ssim.ac.in/fellowship-program-application-form"
        >
          <Button
            size="lg"
            className="w-full bg-mainBlue hover:bg-mainBlue/80 text-white"
          >
            Begin Application
          </Button>
        </a>
      </div>
    </CardContent>
  </Card>
);

// const Scholarships = () => <div>Scholarships content here</div>;

// Main Component
const Conferences = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 sm:py-16">
      {/* Hero Section */}
      {/* <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4 pb-4 bg-gradient-to-r from-red-600 to-red-600/60 bg-clip-text text-transparent">
              Begin Your Journey with FPM Program
            </h1>
            <p className="text-xl text-gray-900">
              Take the first step towards your future with our world-class
              education programs.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-3xl" />
          <GraduationCap className="absolute right-10 top-10 w-96 h-96 text-primary/5 rotate-12" />
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <Heading
          title="SAMAROH 2025 - International Conference on Industry 5.0 - Business with Purpose"
          className="text-red-600 sm:!text-4xl"
        />
        <div className="lg:grid lg:grid-cols-[350px_1fr] gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block sticky top-8 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Admissions Guide</CardTitle>
                <CardDescription>
                  Explore our admissions process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavContent
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  sections={navigationSections}
                />
              </CardContent>
            </Card>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Menu className="w-4 h-4" />
                  <span>Navigation Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="py-4">
                  <NavContent
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    sections={navigationSections}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Content Area */}
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-6">
                  {navigationSections.find((s) => s.id === activeSection)
                    ?.icon &&
                    React.createElement(
                      navigationSections.find((s) => s.id === activeSection)
                        ?.icon,
                      { className: "w-8 h-8 text-red-600" }
                    )}
                  <h2 className="text-3xl text-mainBlue font-bold">
                    {
                      navigationSections.find((s) => s.id === activeSection)
                        ?.label
                    }
                  </h2>
                </div>

                {/* Section Content */}
                <Card className="border">
                  <CardContent className="p-6">
                    {(() => {
                      switch (activeSection) {
                        case "overview":
                          return <Overview />;
                        case "process":
                          return <Process />;
                        case "fees":
                          return <Fees />;
                        case "dates":
                          return <Dates />;
                        case "brochure":
                          return (
                            <Brochure setIsEnquireOpen={setIsEnquireOpen} />
                          );
                        case "apply":
                          return <Apply />;
                        // case "scholarships":
                        //   return <Scholarships />;
                        default:
                          return null;
                      }
                    })()}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Enquire Dialog */}
      <EnquireDialog isOpen={isEnquireOpen} setIsOpen={setIsEnquireOpen} />
    </div>
  );
};

export default Conferences;
