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
  Info,
  Award,
  TrendingUp,
  Globe,
  BriefcaseBusiness,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// Navigation Data
const navigationSections = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "programs", label: "Programs Offered", icon: BriefcaseBusiness },
  { id: "process", label: "Admission Process", icon: GraduationCap },
  { id: "fees", label: "Fee Structure", icon: CreditCard },
  { id: "dates", label: "Important Dates", icon: Calendar },
  { id: "brochure", label: "Brochure", icon: BookOpen },
  { id: "apply", label: "Apply Now", icon: School },
  { id: "scholarships", label: "Scholarships", icon: Trophy },
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

const programsOffered = [
  {
    minor: "Banking",
    sectoral: "Entrepreneurship",
  },
  {
    minor: "Human Resource",
    sectoral: "Digital Marketing",
  },
  {
    minor: "Insurance",
    sectoral: "Analytics",
  },
  {
    minor: "Analytics",
    sectoral: "Pharma Management",
  },
  {
    minor: "Operations",
    sectoral: "Hospitality & Tourism Marketing",
  },
  {
    minor: "Agri Business Management",
    sectoral: "Retail Management",
  },
  {
    minor: "Marketing",
    sectoral: "Real Estate Management",
  },
  {
    minor: "Technology Management",
  },
];

const processData = [
  {
    step: 1,
    title: "Aptitude Test Scores",
    description:
      "Submit scores from accepted entrance exams like CAT/XAT/MAT/CMAT/ATMA/GMAT or State Government Exam",
    details:
      "Percentile / Scores of Aptitude Test (CAT/XAT/MAT/CMAT/ATMA/GMAT/State Government Exam)",
  },
  {
    step: 2,
    title: "Academic Records",
    description: "Submit academic scores from Class X through Graduation",
    details: "Academic Scores in Xth Class, XIIth Class and Graduation",
  },
  {
    step: 3,
    title: "Experience & Certifications",
    description:
      "Submit work experience (optional) and details of extracurricular activities/certifications",
    details:
      "Work Experience (Not mandatory) | Extra Curricular Acvtivities/Certification Courses",
  },
  {
    step: 4,
    title: "SOP & Interview",
    description:
      "Submit Statement of Purpose, video introduction and attend personal interview",
    details: "SOP | Video Introducon | Personal Interview",
  },
];

const feesData = {
  tuitionFees: [
    {
      type: "Admission Fee",
      amount: "₹50,000",
      dueDate: "As Per Provisional Admission Letter",
    },
    {
      type: "Alumni Association Fee",
      amount: "₹10,000",
      dueDate: "As Per Provisional Admission Letter",
    },
    {
      type: "1st Installment",
      amount: "₹1,35,000",
      dueDate: "As per Communication From Admissions Department",
    },
    {
      type: "2nd Installment",
      amount: "₹1,35,000",
      dueDate: "4th November 2025",
    },
    {
      type: "3rd Installment",
      amount: "₹1,10,000",
      dueDate: "5th February 2026",
    },
    {
      type: "4th Installment",
      amount: "₹1,50,000",
      dueDate: "31st July 2026",
    },
    {
      type: "5th Installment",
      amount: "₹1,00,000",
      dueDate: "8th November 2026",
    },
  ],
  transportFees: [
    {
      distance: "0 to 10 kms",
      amount: "₹40,000",
    },
    {
      distance: "10 to 15 kms",
      amount: "₹45,000",
    },
    {
      distance: "15+ kms",
      amount: "₹50,000",
    },
  ],
  hostelFees: [
    {
      type: "A/C Single Occupancy",
      amount: "₹1,97,500",
    },
    {
      type: "Non A/C Single Occupancy",
      amount: "₹1,85,000",
    },
    {
      type: "A/C Double Occupancy",
      amount: "₹1,67,500",
    },
    {
      type: "Non A/C Double Occupancy",
      amount: "₹1,55,000",
    },
  ],
  importantNotes: [
    `Caution money deposit of ₹25,000 (refundable upon exit) should be deposited along with the 1st installment fee`,
    "Fee structure includes Admission fee, Course fee and regular Examination fee",
    "Institute provides Laptop, Business Suit and Textbooks (As per Book Bank Policy) to every student",
    "Late payment fines: ₹100/day (days 1-10) and ₹500/day (days 11-15)",
    "Names of defaulters will be removed from rolls after 15 days of due date",
    "Students must report within 10 days of specified date or admission will be cancelled",
  ],
  totalFee: "₹6,90,000",
  batch: "2025-27",
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
    <p className="text-lg text-gray-700 font-semibold">
      SSIM offers Post Graduate Diploma in Management - Banking, Insurance and
      Financial Services (PGDM-BIFS), a specialized program designed to master
      the nuances of the BFSI sector.
    </p>
    <p className="text-lg text-gray-700">
      The PGDM-BIFS program at Siva Sivani Institute of Management (SSIM) is
      uniquely crafted to equip management graduates with comprehensive
      knowledge of operations in the Banking, Finance services and Insurance
      (BFSI) sector. This sector plays a crucial role in fueling businesses by
      providing capital, covering risk, and strengthening financial security
      through various savings and investment avenues.
    </p>

    <h3 className="font-bold text-mainBlue text-2xl">Curriculum Structure</h3>
    <p className="text-gray-700 text-lg">
      The program follows a comprehensive two-year structure:
    </p>
    <ul className="list-disc ml-4 list-inside text-gray-700 text-lg">
      <li>
        First Year: Foundation in business practices including Economics,
        Finance, Marketing, HR, Quantitative Techniques, IT, Communication, and
        Operations
      </li>
      <li>
        Second Year: Specialized courses in Banking, Insurance, Security
        Analysis, Portfolio Management, and Capital Markets
      </li>
      <li>
        Additional core courses in Strategy, Entrepreneurship, Project
        Management, Governance, and Ethics
      </li>
    </ul>

    <h3 className="font-bold text-mainBlue text-2xl">Specialization Streams</h3>
    <ul className="list-disc ml-4 list-inside text-gray-700 text-lg">
      <li>
        Banking Stream: Retail banking, digital banking, risk and treasury
        management, mortgage banking, trade finance, AML & KYC
      </li>
      <li>
        Insurance Stream: Insure-tech, fraud risk management, reinsurance
        management, pensions and annuities, group insurance
      </li>
      <li>
        Analytical Stream: Fraud risk analytics, financial analytics, algo
        trading with Python, Blockchain and AI applications
      </li>
    </ul>

    <h3 className="font-bold text-mainBlue text-2xl">Program Highlights</h3>
    <div className="grid md:grid-cols-3 !mt-8 gap-6 h-full">
      {[
        {
          title: "Industry Recognition",
          description:
            "Accredited by Insurance Institute of India (III) with state-of-the-art NSE Assisted Finance Lab",
          icon: Award,
        },
        {
          title: "Experiential Learning",
          description:
            "Hands-on experience through StratX, Equity Levers, and CESIM simulations",
          icon: BookOpen,
        },
        {
          title: "Global Exposure",
          description:
            "International exchange program with Herzing University, Atlanta (USA)",
          icon: Globe,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-6 rounded-lg hover:scale-105 transition-all duration-300 border space-y-4 h-full">
            <item.icon className="w-8 h-8 text-mainBlue" />
            <h3 className="font-semibold text-red-600 text-xl">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <h3 className="font-bold text-mainBlue text-2xl mt-8">
      Career Opportunities
    </h3>
    <p className="text-gray-700 text-lg">
      Our graduates find excellent opportunities in:
    </p>
    <ul className="list-disc ml-4 list-inside text-gray-700 text-lg">
      <li>Fintech Companies as NAV Analysts</li>
      <li>Private & Public Sector Banks</li>
      <li>Life, General & Health Insurance Companies</li>
      <li>Insurance Intermediaries – Brokers/Corporate Agents</li>
      <li>Stock Broking Firms and Mutual Fund Companies</li>
      <li>Bancassurance channels as Unit Managers</li>
    </ul>

    <p className="text-lg text-gray-700 mt-4">
      The program boasts a near 100% placement record with leading recruiters
      including Deloitte, Accenture, Aditya Birla, ICICI, Asian Paints, ITC,
      Factset Systems, Franklin Templeton, and InfoEdge.
    </p>
  </div>
);

const ProgramsOffered = () => (
  <div className="space-y-8">
    <h3 className="font-bold text-mainBlue text-2xl">Programs Offered</h3>
    <div className="rounded-lg overflow-hidden border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-[#002f87] text-white text-lg">
              Minor
            </TableHead>
            <TableHead className="bg-[#002f87] text-white text-lg">
              Sectoral
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programsOffered.map((program, index) => (
            <TableRow key={index}>
              <TableCell className="text-red-600 text-lg">
                {program.minor}
              </TableCell>
              <TableCell className="text-black text-lg">
                {program.sectoral}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <p className="text-gray-700 text-lg !my-8">
      <strong>Note:</strong> Student need to choose One Minor and One Sectoral
      Sectoral
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
          {/* <p className="text-xl font-semibold text-gray-700">
            {item.description}
          </p> */}
          <p className="text-lg text-gray-700">{item.details}</p>
        </div>
      </motion.div>
    ))}
    <p className="text-lg text-gray-700 !mt-5">
      <strong>Note:</strong> Every student is given a specific date for reporng
      to the classes. Any student who does not report within 10 days of the
      specified date will be treated as having withdrawn from the instute. The
      admission of such student/s will automacally stand cancelled and any fee
      paid will be refunded aer deducng the processing fee.
    </p>
  </div>
);

const Fees = () => (
  <div className="space-y-8">
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl text-[#002f87]">
          Fee Structure (Batch 2025-27)
        </CardTitle>
        <CardDescription className="text-lg text-red-600 font-semibold">
          Total Program Fee: ₹6,90,000 (Six Lakhs Ninety Thousand only)
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Updated Fee Notes */}
          <div className="mt-4 space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 animate-pulse text-red-600 flex-shrink-0" />
              <p>
                Admission Fee and Alumni Association Fee are to be paid at the
                time of Admission
              </p>
            </div>
            {/* <div className="flex items-center gap-2">
              <Info className="h-4 w-4 animate-pulse text-red-600 flex-shrink-0" />
              <p>1st Installment includes ₹25,000 refundable caution deposit</p>
            </div> */}
          </div>
        </div>

        {/* Transport Fee Structure */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#002f87]">
            Transportation Charges
          </h3>
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Distance
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Amount (Per Annum)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feesData.transportFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black text-lg">
                      {fee.distance}
                    </TableCell>
                    <TableCell className="text-red-600 font-semibold text-lg">
                      {fee.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Hostel Fee Structure */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#002f87]">
            Hostel Fee (Accommodation and Food)
          </h3>
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Room Type
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Fee Per Annum
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feesData.hostelFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black text-lg">
                      {fee.type}
                    </TableCell>
                    <TableCell className="text-red-600 font-semibold text-lg">
                      {fee.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            * Food Charges: Every year there will be an increase of 15%.
          </p>
        </div>

        {/* Important Notes */}
        <div className="bg-[#002f87]/5 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-[#002f87] text-lg">
            Important Notes:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-lg text-black">
            <li>
              Caution money deposit of ₹25,000 (refundable upon exit) should be
              deposited along with the 1st installment fee
            </li>
            <li>
              Fee structure includes Admission fee, Course fee and regular
              Examination fee
            </li>
            <li>
              Institute provides Laptop, Business Suit and Textbooks (As per
              Book Bank Policy) to every student
            </li>
            <li>
              Late payment fines: ₹100/day (days 1-10) and ₹500/day (days 11-15)
            </li>
            <li>
              Names of defaulters will be removed from rolls after 15 days of
              due date
            </li>
            <li>
              Students must report within 10 days of specified date or admission
              will be cancelled
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
        <a target="_blank" href="https://apply.ssim.ac.in">
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

const Scholarships = () => <div>Scholarships content here</div>;

// Main Component
const PGDMBIFS = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4 pb-4 bg-gradient-to-r from-red-600 to-red-600/60 bg-clip-text text-transparent">
              Begin Your Journey with PGDM-BIFS Program
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
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
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
                        case "programs":
                          return <ProgramsOffered />;
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
                        case "scholarships":
                          return <Scholarships />;
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

export default PGDMBIFS;
